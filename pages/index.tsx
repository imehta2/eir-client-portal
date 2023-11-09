import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen h-screen bg-white text-black">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold mb-4 animate-fade-in">
          Welcome to the ACE Project Space Nomination Portal
        </h1>
        <p className="text-lg mb-4 animate-fade-in">Please sign in to access the portal:</p>
        <Link href="/api/auth/signin" className="text-blue-600 hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Home;
