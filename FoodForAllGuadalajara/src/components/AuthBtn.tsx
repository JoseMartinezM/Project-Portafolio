import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import supabase from "@/utils/supabase";
import { Session } from "@supabase/supabase-js";
import { Link, useLocation } from "wouter";

const AuthButton = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [_, setLocation] = useLocation();
  
  useEffect(() => {
    // Check for initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Set up auth listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setLocation("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading) {
    return <Button disabled>Loading...</Button>;
  }

  return session ? (
    <Button
      onClick={handleLogout}
      variant={"ghost"}
      className="block px-3 py-2 rounded-md text-red-500 hover:underline font-medium text-secondary hover:text-secondary-dark"
    >
      Logout
    </Button>
  ) : (
    <Link href="/login">
      <a className="block px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-secondary-dark">
        Login
      </a>
    </Link>
  );
};

export default AuthButton;
