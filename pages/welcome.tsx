import { useSession } from 'next-auth/react';

import Navbar from './Navbar';

export default function WelcomePage() {
  const { data: session } = useSession();

  return (
    <div>
      <Navbar />
      {session ? (
        session.user ? (
          <p className="text-xl text-center mt-4">Ji Ayan Nu, {session.user.name} {session.user.email} !</p>
        ) : (
          <p>You are not signed in.</p>
        )
      ) : (
        <p>You are not signed in.</p>
      )}
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-4">Welcome to ACE Project Space</h1>
        <p className="text-lg mb-6">We're your dedicated project information hub. Here, you'll find everything you need to develop, collaborate, and succeed with your projects. Let's get to work!</p>
        
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact Information:</h2>
            <ul>
                <li className="mb-2">
                    <span className="font-semibold">Technical Support:</span> If you encounter technical issues or need assistance with equipment, software, or resources, contact our Technical Support team at <a href="mailto:youremail@example.com" className="text-blue-500">youremail@example.com</a> or <span className="text-blue-500">[Phone Number]</span>.
                </li>
                <li className="mb-2">
                    <span className="font-semibold">Project Guidance:</span> For project-related queries or guidance, reach out to <span className="text-blue-500">[Contact Name]</span> at <a href="mailto:contact@example.com" className="text-blue-500">contact@example.com</a> or <span className="text-blue-500">[Phone Number]</span>.
                </li>
                <li className="mb-2">
                    <span className="font-semibold">Facility Access:</span> If you have questions about access to our facilities or require special arrangements, please contact <span className="text-blue-500">[Contact Name]</span> at <a href="mailto:facility@example.com" className="text-blue-500">facility@example.com</a> or <span className="text-blue-500">[Phone Number]</span>.
                </li>
            </ul>
        </div>
        
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">College Details:</h2>
            <ul>
                <li className="mb-2">
                    <span className="font-semibold">Location:</span> ACE Project Space is conveniently located within the <span className="text-blue-500">[Campus Name]</span> campus at <span className="text-blue-500">[Campus Address]</span>.
                </li>
                <li className="mb-2">
                    <span className="font-semibold">Operating Hours:</span> Our facility is open <span className="text-blue-500">[Operating Hours]</span>. However, please note that during <span className="text-blue-500">[Holidays or Special Occasions]</span>, we may operate on a different schedule.
                </li>
                <li className="mb-2">
                    <span className="font-semibold">Campus Resources:</span> As part of the <span className="text-blue-500">[College Name]</span> campus, you have access to a wide range of resources, including libraries, cafeterias, and recreational facilities. Explore the campus to discover all it has to offer.
                </li>
                <li className="mb-2">
                    <span className="font-semibold">Parking:</span> Ample parking is available on campus. You can find designated parking areas near ACE Project Space.
                </li>
                <li className="mb-2">
                    <span className="font-semibold">Security:</span> Your safety is important to us. <span className="text-blue-500">[RED RIVER POLYTECH]</span> has a dedicated security team on campus. In case of any security concerns, please contact <span className="text-blue-500">[Campus Security Contact]</span> at <span className="text-blue-500">[Campus Security Phone Number]</span>.
                </li>
            </ul>
        </div>
    </div>
      <div className="moving-image-container">
        <img src="/rrc.png" alt="Moving Image" className="moving-image" />
      </div>
    </div>
  );
}
