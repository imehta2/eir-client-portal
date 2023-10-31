import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignIn = () => {
    // Redirect to the NextAuth.js email sign-in page
    router.push('/api/auth/signin/email');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center mb-4">
        <p>You need to sign in to use the following website.</p>
      </div>
      <button onClick={handleSignIn} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
        Sign In
      </button>
    </div>
  );
}
