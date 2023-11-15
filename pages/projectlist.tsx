import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { FaSortAlphaUp, FaSortAlphaDown } from 'react-icons/fa';

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('projectTitle');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(10); // Number of projects to display per page
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

  const handleSort = (criteria: string) => {
    // If the same criteria is clicked, toggle the sortOrder
    setSortOrder((prevOrder) => (sortCriteria === criteria ? (prevOrder === 'asc' ? 'desc' : 'asc') : 'asc'));
    setSortCriteria(criteria);
  };

  const getSortingArrow = (criteria: string) => {
    if (sortCriteria === criteria) {
      return sortOrder === 'asc' ? <FaSortAlphaUp /> : <FaSortAlphaDown />;
    }

    return null;
  };

  // Sort the projects before pagination
  const sortedProjects = [...projects].sort((a, b) => {
    const valueA = a[sortCriteria];
    const valueB = b[sortCriteria];

    if (valueA < valueB) {
      return sortOrder === 'asc' ? -1 : 1;
    }

    if (valueA > valueB) {
      return sortOrder === 'asc' ? 1 : -1;
    }

    return 0;
  });

  // Calculate the index of the last project to display on the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  // Calculate the index of the first project to display on the current page
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  // Get the current projects to display
  const currentProjects = sortedProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Navbar />
      {session && (
        <div>
          <h1 className="bg-red-700 text-white p-2">List of Industry Projects</h1>
          <table className="project-list">
            <thead>
              <tr>
                <th onClick={() => handleSort('projectTitle')} className="cursor-pointer">
                  <div className="flex items-center">
                    <span>Project Title</span>
                    <span className="text-gray-500">{getSortingArrow('projectTitle')}</span>
                  </div>
                </th>
                <th onClick={() => handleSort('companyName')} className="cursor-pointer">
                  <div className="flex items-center">
                    <span>Company Name</span>
                    <span className="text-gray-500">{getSortingArrow('companyName')}</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentProjects.map((project: any) => (
                <tr key={project.id} onClick={() => handleRowClick(project.id)} className="cursor-pointer hover:bg-gray-100">
                  <td>{project.projectTitle}</td>
                  <td>{project.companyName}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-4">
            <ul className="flex">
              {Array.from({ length: Math.ceil(sortedProjects.length / projectsPerPage) }, (_, i) => (
                <li key={i} onClick={() => paginate(i + 1)} className={`mr-2 ${currentPage === i + 1 ? 'active' : ''}`}>
                  <a href="#" className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">{i + 1}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
