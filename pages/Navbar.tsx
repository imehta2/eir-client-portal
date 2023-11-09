import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut(); // Sign out the user
    // Redirect to the sign-in page
    window.location.href = '/api/auth/signin';
  };

  return (
    <nav className="bg-gradient-animation">
      <div className="logo-container m-8">
        <a href="/welcome">
          <img src="/bglogo.png" alt="Logo" className="logo m-2" />
        </a>
      </div>
      <ul className="flex items-center">
        <li className="mx-4 btn btn-ghost normal-case text-l">
          <Link href="/projectlist">PROJECTS</Link>
        </li>
        <li className="btn btn-ghost normal-case text-l mx-4">
          <Link href="/projectlist"></Link>
        </li>
        <li className="mx-4 btn btn-ghost normal-case text-l">
          {session ? (
            <a onClick={handleLogout} style={{ cursor: 'pointer' }}>
              LOG OUT
            </a>
          ) : (
            <Link href="/api/auth/signin">LOG IN</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
