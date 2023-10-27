import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useRouter } from 'next/router';

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch the list of industry projects from your server here
    axios.get('/api/industry-projects')
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error('Error fetching industry projects: ', error);
      });
  }, []);

  const handleRowClick = (id: number) => {
    // Programmatically navigate to the projectproject page with the project ID
    router.push(`/projectproject?id=${id}`);
  };

  return (
    <div>
      <Navbar />
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
  );
};

export default ProjectList;
