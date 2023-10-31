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
      <div className="container mx-auto p-5">
        {projectDetails ? (
          <div className="bg-gray p-4 shadow-md rounded-md mx-auto w-3/4">
            <h1 className="text-2xl font-extrabold mb-4 text-center bounce">
              {projectDetails.projectTitle}
            </h1>
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Company Name:</td>
                  <td className="p-2">{projectDetails.companyName}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Website:</td>
                  <td className="p-2">{projectDetails.website}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Contact Person:</td>
                  <td className="p-2">{projectDetails.contactPerson}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Email:</td>
                  <td className="p-2">{projectDetails.email}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Primary Phone Number:</td>
                  <td className="p-2">{projectDetails.primaryPhoneNumber}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Mobile Number:</td>
                  <td className="p-2">{projectDetails.mobileNumber}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Best Times To Contact:</td>
                  <td className="p-2">{projectDetails.bestTimesToContact}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Hours Commited:</td>
                  <td className="p-2">{projectDetails.commitHours}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Business Address:</td>
                  <td className="p-2">{projectDetails.businessAddress}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">City:</td>
                  <td className="p-2">{projectDetails.city}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">State:</td>
                  <td className="p-2">{projectDetails.state}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Zip:</td>
                  <td className="p-2">{projectDetails.zip}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Country:</td>
                  <td className="p-2">{projectDetails.country}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Description:</td>
                  <td className="p-2">{projectDetails.description}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">RRC student:</td>
                  <td className="p-2">{projectDetails.isRRCStudent ? 'Yes' : 'No'}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">RRC Program:</td>
                  <td className="p-2">{projectDetails.rrcProgram }</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Description:</td>
                  <td className="p-2">{projectDetails.description}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">North Forge:</td>
                  <td className="p-2">{projectDetails.isNorthForge ? 'Yes' : 'No'}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">North Forge Program:</td>
                  <td className="p-2">{projectDetails.northForgeProgram}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Is Indigenous Owned:</td>
                  <td className="p-2">{projectDetails.isIndigenousOwned ? 'Yes' : 'No'}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Indigenous Focused:</td>
                  <td className="p-2">{projectDetails.indigenousFocus ? 'Yes' : 'No'}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Business Idea:</td>
                  <td className="p-2">{projectDetails.businessIdea}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Service Description:</td>
                  <td className="p-2">{projectDetails.serviceDescription}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Strategic Priorities:</td>
                  <td className="p-2">{projectDetails.strategicPriorities}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Problem To Solve:</td>
                  <td className="p-2">{projectDetails.problemToSolve}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Value Proposition:</td>
                  <td className="p-2">{projectDetails.valueProposition}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Success Metrics:</td>
                  <td className="p-2">{projectDetails.successMetrics}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Customer Benefits:</td>
                  <td className="p-2">{projectDetails.customerBenefits}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Impact Of Opportunity:</td>
                  <td className="p-2">{projectDetails.impactOfOpportunity}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Customers:</td>
                  <td className="p-2">{projectDetails.customers}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Current Marketing:</td>
                  <td className="p-2">{projectDetails.currentMarketing}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Delivery Method:</td>
                  <td className="p-2">{projectDetails.deliveryMethod}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Adoption Approach:</td>
                  <td className="p-2">{projectDetails.adoptionApproach}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Key Users:</td>
                  <td className="p-2">{projectDetails.keyUsers}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Alternative Usage:</td>
                  <td className="p-2">{projectDetails.alternativeUsage}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Business Case:</td>
                  <td className="p-2">{projectDetails.businessCase}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Applied For Grant:</td>
                  <td className="p-2">{projectDetails.appliedForGrant ? 'Yes' : 'No'}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Grant Details:</td>
                  <td className="p-2">{projectDetails.grantDetails}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Student Funding:</td>
                  <td className="p-2">{projectDetails.studentFunding ? 'Yes' : 'No'}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Funding Amount:</td>
                  <td className="p-2">{projectDetails.fundingAmount}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Receive Information:</td>
                  <td className="p-2">{projectDetails.receiveInfo}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Anticipated Length:</td>
                  <td className="p-2">{projectDetails.anticipatedLength}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Feature Set:</td>
                  <td className="p-2">{projectDetails.featureSet}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Technology Environment:</td>
                  <td className="p-2">{projectDetails.technologyEnvironment}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Student Enticement:</td>
                  <td className="p-2">{projectDetails.studentEnticement}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Learning Outcomes:</td>
                  <td className="p-2">{projectDetails.learningOutcomes}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="font-bold p-2">Additional Comments:</td>
                  <td className="p-2">{projectDetails.additionalComments}</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-lg">Loading project details...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectProject;
