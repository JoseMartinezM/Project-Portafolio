import supabase from "@/utils/supabase";
import { Session } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function LoginPage(){
  const [session, setSession] = useState<Session | null>(null);
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Redirect to home if already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        setLocation("/");
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        setLocation("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [setLocation]);

  if (session) return null;

  return (
    <div className="max-w-md mx-auto mt-10">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google", "github"]}
      />
    </div>
  );
};
