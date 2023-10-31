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
      <div className="logo-container">
        <a href="/welcome">
          <img src="/bglogo.png" alt="Logo" className="logo m-2" />
        </a>
      </div>
      <ul className="flex">
        <li className="mx-4">
          <Link href="/projectlist">PROJECTS</Link>
        </li>
        <li className="mx-4">
          <Link href="/projectlist">PROJECTS ON HOLD</Link>
        </li>
        <li className="mx-4">
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
