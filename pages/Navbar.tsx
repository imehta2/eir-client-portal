// Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <a href="/welcome">
        <img src="/bglogo.png" alt="Logo" className="logo" />
        </a>
      </div>
      <ul>
        <li>
          <Link href="/projectlist">PROJECTS</Link>
        </li>
        <li>
          <Link href="/projectlist">PROJECTS ON HOLD</Link>
        </li>
        <li>
          <Link href="">LOG OUT</Link>
        </li>
      </ul>
    </nav>
  );
}
