import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "@/components/ui/theme-provider";
import logo from "@/assets/YARB.svg";
import logo_dark from "@/assets/YARB_dark.svg";

const signupSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

interface SignupDraft {
  email: string;
  password: string;
}

export default function Signup() {
  const { theme } = useTheme();
  const [draft, setDraft] = useState<SignupDraft>({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [confirmationSent, setConfirmationSent] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDraft({ ...draft, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const result = signupSchema.safeParse(draft);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setSubmitting(true);
    const { error: signUpError } = await supabase.auth.signUp({
      email: result.data.email,
      password: result.data.password,
    });
    setSubmitting(false);

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    setConfirmationSent(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-8 py-4">
        <Link to="/">
          <img
            src={theme === "dark" ? "./yarb.svg":"./yarb.svg"}
            alt="YARB_Logo"
            className="w-32 -ml-4"
          />
        </Link>
        <ModeToggle />
      </header>
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-6 border rounded-xl p-6 shadow-sm">
          {confirmationSent ? (
            <div className="space-y-2 text-center">
              <h1 className="text-xl font-semibold">Check your email</h1>
              <p className="text-sm text-muted-foreground">
                We've sent you a confirmation link. Confirm your account, then
                sign in below.
              </p>
              <Link to="/login">
                <Button className="w-full mt-4">Go to sign in</Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-1 text-center">
                <h1 className="text-xl font-semibold">Create an account</h1>
                <p className="text-sm text-muted-foreground">
                  Sign up to save your resumes to the cloud
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
                    autoComplete="new-password"
                    value={draft.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button className="w-full" type="submit" disabled={submitting}>
                  {submitting ? "Signing up..." : "Sign up"}
                </Button>
              </form>
              <p className="text-sm text-center text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="underline underline-offset-4">
                  Sign in
                </Link>
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
