import { projects } from './seedproject';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function mainModule() {
  for (let project of projects) {
    await prisma.industryProject.create({ // Make sure to use "industryProject" for the model
      data: project
    });
  }
}

mainModule()
  .catch(e => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
