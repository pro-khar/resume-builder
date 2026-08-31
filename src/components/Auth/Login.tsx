import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "@/components/ui/theme-provider";
import logo from "@/assets/YARB.svg";
import logo_dark from "@/assets/YARB_dark.svg";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

interface LoginDraft {
  email: string;
  password: string;
}

export default function Login() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [draft, setDraft] = useState<LoginDraft>({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDraft({ ...draft, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const result = loginSchema.safeParse(draft);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setSubmitting(true);
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: result.data.email,
      password: result.data.password,
    });
    setSubmitting(false);

    if (signInError) {
      setError(signInError.message);
      return;
    }

    navigate("/app");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-8 py-4">
        <Link to="/">
          <img
            src={theme === "dark" ? logo_dark : logo}
            alt="YARB_Logo"
            className="w-32 -ml-4"
          />
        </Link>
        <ModeToggle />
      </header>
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-6 border rounded-xl p-6 shadow-sm">
          <div className="space-y-1 text-center">
            <h1 className="text-xl font-semibold">Sign in</h1>
            <p className="text-sm text-muted-foreground">
              Sign in to access your resumes
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={draft.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={draft.password}
                onChange={handleChange}
                required
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button className="w-full" type="submit" disabled={submitting}>
              {submitting ? "Signing in..." : "Sign in"}
            </Button>
          </form>
          <p className="text-sm text-center text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="underline underline-offset-4">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
