import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const LoginPage: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignIn = () => {
    // Redirect to the NextAuth.js email sign-in page
    router.push('/api/auth/signin/email');
  };

  return (
    <div className="container mx-auto p-5 text-center">
      <h1 className="text-3xl font-extrabold mb-4">
        Welcome to the ACE Project Space Nomination Portal
      </h1>
      <p className="text-lg mb-4">You need to sign in to use the following website:</p>
      <button
        onClick={handleSignIn}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
      >
        Sign In
      </button>
    </div>
  );
};

export default LoginPage;
