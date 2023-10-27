import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignIn = () => {
    // Redirect to the NextAuth.js email sign-in page
    router.push('/api/auth/signin/email');
  };

  // Check if the user is already authenticated, and redirect them to welcome.tsx
  if (session) {
    router.push('/welcome');
  }

  return (
    <div>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}
