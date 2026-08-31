import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useAppDispatch } from "@/redux-beta/hooks";
import { setUser } from "@/redux-beta/authSlice";

export default function AuthListener() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(
        setUser(
          session?.user
            ? { id: session.user.id, email: session.user.email ?? "" }
            : null
        )
      );
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(
        setUser(
          session?.user
            ? { id: session.user.id, email: session.user.email ?? "" }
            : null
        )
      );
    });
    return () => sub.subscription.unsubscribe();
  }, [dispatch]);
  return null;
}
