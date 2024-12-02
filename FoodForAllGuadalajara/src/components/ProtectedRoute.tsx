import supabase from "@/utils/supabase";
import { Session } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

type Props =  {
  component: React.ComponentType;
}

export default function ProtectedRoute({ component: Component, ...rest }: Props) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Check for session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (!session) {
        setLocation("/login");
      }
    });

    // Set up auth listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) {
        setLocation("/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [setLocation]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return session ? <Component {...rest} /> : null;
};
