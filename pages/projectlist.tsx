import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    // Check if the user is authenticated
    if (!session) {
      router.push('/login'); // Redirect to the login page if not authenticated
    } else {
      // Fetch the list of industry projects from your server here
      axios.get('/api/industry-projects')
        .then((response) => {
          setProjects(response.data);
        })
        .catch((error) => {
          console.error('Error fetching industry projects: ', error);
        });
    }
  }, [session]);

  const handleRowClick = (id: number) => {
    // Programmatically navigate to the projectproject page with the project ID
    router.push(`/projectproject?id=${id}`);
  };

  return (
    <div>
      <Navbar />
      {session && (
        <div>
          <h1>List of Industry Projects</h1>
          <table className="project-list">
            <thead>
              <tr>
                <th>Project Title</th>
                <th>Company Name</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project: any) => (
                <tr key={project.id} onClick={() => handleRowClick(project.id)} className="cursor-pointer hover:bg-gray-100">
                  <td>{project.projectTitle}</td>
                  <td>{project.companyName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
