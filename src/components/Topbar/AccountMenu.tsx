import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { useAppSelector } from "@/redux-beta/hooks";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// "prakharvermamanu.veed@gmail.com" -> "PV" (first letter of the first two
// dot/underscore/hyphen-separated segments before the @); falls back to the
// first two characters of the local part if there's only one segment.
function getInitials(email: string): string {
  const localPart = email.split("@")[0] ?? "";
  const segments = localPart.split(/[._-]+/).filter(Boolean);
  if (segments.length >= 2) {
    return (segments[0][0] + segments[1][0]).toUpperCase();
  }
  return (localPart.slice(0, 2) || "?").toUpperCase();
}

export default function AccountMenu() {
  const { user, status } = useAppSelector((state) => state.auth);

  if (status === "loading") return null;

  if (!user) {
    return (
      <Link to="/login">
        <Button variant="ghost" size="sm">
          Sign in
        </Button>
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs font-medium">
              {getInitials(user.email)}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="truncate">{user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/resumes">My Resumes</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => supabase.auth.signOut()}>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
