import { prisma } from "~/db.server";

export type CrawlerJob = {
  runDate: Date;
  status: 'SUCCESS' | 'ERROR';
  error?: string;
  lastDocumentBeforeRun?: string;
}

export async function addJob(job: CrawlerJob) {
  const lastDocumentBeforeRun = await prisma.document.findMany({
    orderBy: {
      id: 'desc',
    },
    take: 1,
  });

  return await prisma.job.create({
    data: {
      ...job,
      lastDocumentBeforeRun: lastDocumentBeforeRun[0].externalId,
    },
  });
}