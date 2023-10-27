// pages/api/industry-projects.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Check if the request has an `id` query parameter
    const projectId = req.query.id as string;

    if (projectId) {
      // Fetch the project details by `id` from your database
      try {
        const project = await prisma.industryProject.findUnique({
          where: {
            id: Number(projectId),
          },
        });

        if (project) {
          res.status(200).json(project);
        } else {
          res.status(404).json({ error: 'Project not found' });
        }
      } catch (error) {
        console.error('Error fetching project details: ', error);
        res.status(500).json({ error: 'Failed to fetch data' });
      }
    } else {
      // No `id` query parameter provided, return a list of all projects
      try {
        const projects = await prisma.industryProject.findMany();

        res.status(200).json(projects);
      } catch (error) {
        console.error('Error fetching industry projects: ', error);
        res.status(500).json({ error: 'Failed to fetch data' });
      }
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
