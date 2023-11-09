import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const ProjectProject: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Access the projectId from the URL

  const [projectDetails, setProjectDetails] = useState<any>(null);
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      // If the user is not authenticated, redirect them to the login page
      router.push('/login');
    } else if (id) {
      // Fetch the project details based on the projectId from your server
      axios
        .get(`/api/industry-projects?id=${id}`)
        .then((response) => {
          setProjectDetails(response.data);
        })
        .catch((error) => {
          console.error('Error fetching project details: ', error);
        });
    }
  }, [id, session]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-5 flex flex-wrap">
        {projectDetails ? (
          <div className="sticky top-0 self-start max-w-sm ml-8">
            <h1 className="text-3xl font-extrabold mb-6 font-serif text-center animate-fade-in">
              {projectDetails.projectTitle}
            </h1>
            <section className="mb-16">
            <section className="mb-4">
              <h2 className="text-xl font-bold mb-2 bg-red-700 text-white">Company</h2>
              <p className="text-xl">
                {projectDetails.companyName}
              </p>
              <p className="text-blue">
              <a href={projectDetails.website} target="_blank" rel="noopener noreferrer">
                  {projectDetails.website}
                  </a>
              </p>
              </section>
              <section className="mb-4">
              <h2 className="text-l font-bold mb-2 bg-gray-400 text-white">Business Address</h2>
              <p>
                 {projectDetails.businessAddress}
              </p>
              <p>
                 {projectDetails.city}
              </p>
              <p>
                 {projectDetails.state}
              </p>
              <p>
                 {projectDetails.country}
              </p>
              <p>
                 {projectDetails.zip}
              </p>
            </section>
            <section className="mb-4">
              <h2 className="text-l font-bold mb-2 bg-gray-400 text-white">Contact Person</h2>
              <p>
                {projectDetails.contactPerson}
              </p>
              <p>
                <a href={`mailto:${projectDetails.email}`}>{projectDetails.email}</a>
              </p>

              <p>
                {projectDetails.primaryPhoneNumber}
              </p>
              <p>
                {projectDetails.mobileNumber}
              </p>
              <p>
                <span className="font-bold italic text-gray-500">Best Times To Contact:</span> {projectDetails.bestTimesToContact}
              </p>
              <p>
                <span className="font-bold italic text-gray-500">Hours Committed:</span> {projectDetails.commitHours}
              </p>
              </section>
              </section>
              <section className="mb-4">
              <h2 className="text-l font-bold mb-2 bg-red-700 text-white">Course Info (If College student)</h2>
              <table className="invisible-table">
    <tbody>
      <tr>
        <td className="font-bold italic text-gray-500">RRC Student:</td>
        <td>{projectDetails.isRRCStudent ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td className="font-bold italic text-gray-500">RRC Program:</td>
        <td>{projectDetails.rrcProgram}</td>
      </tr>
      <tr>
        <td className="font-bold italic text-gray-500">North Forge:</td>
        <td>{projectDetails.isNorthForge ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td className="font-bold italic text-gray-500">North Forge Program:</td>
        <td>{projectDetails.northForgeProgram}</td>
      </tr>
      <tr>
        <td className="font-bold italic text-gray-500">Is Indigenous Owned:</td>
        <td>{projectDetails.isIndigenousOwned ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td className="font-bold italic text-gray-500">Indigenous Focused:</td>
        <td>{projectDetails.indigenousFocus ? 'Yes' : 'No'}</td>
      </tr>
    </tbody>
  </table>
            </section>
            <section className="mb-4">
              <h2 className="text-l font-bold mb-2 bg-red-700 text-white">Student Funding</h2>
              <p className="font-bold">
              {projectDetails.studentFunding ? 'Yes' : 'No'}
              </p>
              <p>
                <span className="font-bold italic text-gray-500">Funding Amount:</span> {projectDetails.fundingAmount}
              </p>
            </section>
            <section className="mb-4">
              <h2 className="text-l font-bold mb-2 bg-red-700 text-white">Anticipated Length</h2>
              <p className="font-bold">{projectDetails.anticipatedLength}</p>
            </section>
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-lg">Loading project details...</p>
          </div>
        )}

        {projectDetails && (
          <div className="bg-gray p-4 shadow-md rounded-md w-2/3 ml-4">
            
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Description</h2>
              <p>{projectDetails.description}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Business Idea</h2>
              <p>{projectDetails.businessIdea}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Service Description</h2>
              <p>{projectDetails.serviceDescription}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Strategic Priorities</h2>
              <p>{projectDetails.strategicPriorities}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Problem To Solve</h2>
              <p>{projectDetails.problemToSolve}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Value Proposition</h2>
              <p>{projectDetails.valueProposition}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Success Metrics</h2>
              <p>{projectDetails.successMetrics}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Customer Benefits</h2>
              <p>{projectDetails.customerBenefits}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Impact Of Opportunity:</h2>
              <p>{projectDetails.impactOfOpportunity}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Customers</h2>
              <p>{projectDetails.customers}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Marketing</h2>
              <p>{projectDetails.currentMarketing}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Delivery Method</h2>
              <p>{projectDetails.deliveryMethod}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Adoption Approach</h2>
              <p>{projectDetails.adoptionApproach}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Key Users</h2>
              <p>{projectDetails.keyUsers}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Alternative Usage</h2>
              <p>{projectDetails.alternativeUsage}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Business Case</h2>
              <p>{projectDetails.businessCase}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Applied For Grant:</h2>
              <p>{projectDetails.appliedForGrant ? 'Yes' : 'No'}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Grant Details</h2>
              <p>{projectDetails.grantDetails}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Receive Information</h2>
              <p>{projectDetails.receiveInfo}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Feature Set</h2>
              <p>{projectDetails.featureSet}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Technology Environment</h2>
              <p>{projectDetails.technologyEnvironment}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Student Enticement</h2>
              <p>{projectDetails.studentEnticement}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Learning Outcomes</h2>
              <p>{projectDetails.learningOutcomes}</p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2">Additional Comments</h2>
              <p>{projectDetails.additionalComments}</p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectProject;
