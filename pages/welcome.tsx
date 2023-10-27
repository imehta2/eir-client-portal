import { useSession } from 'next-auth/react';

import Navbar from './Navbar';

export default function WelcomePage() {
  const { data: session } = useSession();

  return (
    <div>
      <Navbar />
      {session ? (
        session.user ? (
          <p>Welcome, {session.user.name} {session.user.email} !</p>
        ) : (
          <p>You are not signed in.</p>
        )
      ) : (
        <p>You are not signed in.</p>
      )}
      <div className="moving-image-container">
        <img src="/rrc.png" alt="Moving Image" className="moving-image" />
      </div>
    </div>
  );
}
