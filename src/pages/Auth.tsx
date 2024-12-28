import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth as SupabaseAuth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useSession } from '@supabase/auth-helpers-react';

const Auth = () => {
  const session = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/');
    }
  }, [session, navigate]);

  return (
    <div className="container mx-auto max-w-md mt-12 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-navy-500 mb-6 text-center">Welcome to GoldInvestPro</h1>
      <SupabaseAuth 
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#1e3a8a',
                brandAccent: '#2563eb',
              },
            },
          },
        }}
        providers={[]}
      />
    </div>
  );
};

export default Auth;