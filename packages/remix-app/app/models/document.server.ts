import { prisma } from "~/db.server";

type Person = {
  name: string;
  birthDate: Date;
}

export type CrawlerDocument = {
  externalId: string;
  date: Date;
  link: string;
  persons: Person[];
}

export async function addDocument(document: CrawlerDocument) {
  console.log('addDocument', document);
  const { persons, ...documentData } = document;

  return await prisma.document.create({
    data: {
      ...documentData,
      persons: {
        create: persons.map((person) => ({
          ...person
        })),
      },
    },
  });
}