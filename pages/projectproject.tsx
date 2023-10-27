import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useRouter } from 'next/router';

const ProjectProject: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Access the projectId from the URL

  const [projectDetails, setProjectDetails] = useState<any>(null);

  useEffect(() => {
    if (id) {
      // Log the `id` to ensure it's being retrieved correctly
      console.log('ID:', id);

      // Fetch the project details based on the projectId from your server
      axios.get(`/api/industry-projects?id=${id}`)
        .then((response) => {
          // Log the response data to see if it contains the project details
          console.log('API Response:', response.data);

          setProjectDetails(response.data);
        })
        .catch((error) => {
          console.error('Error fetching project details: ', error);
        });
    }
  }, [id]);

  // Log the current state of `projectDetails`
  useEffect(() => {
    console.log('projectDetails:', projectDetails);
  }, [projectDetails]);

  return (
    <div>
      <Navbar />
      {projectDetails ? (
        <div>
          <h1>{projectDetails.projectTitle}</h1>
          <p>Company Name: {projectDetails.companyName}</p>
          {/* Add other project details here */}
        </div>
      ) : (
        <div>Loading project details...</div>
      )}
    </div>
  );
};

export default ProjectProject;
