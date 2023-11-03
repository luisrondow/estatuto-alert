import { prisma } from '~/db.server';

export async function getPersons() {
  return await prisma.person.findMany({
    include: {
      document: true,
    },
  });
}

export async function getPersonsByName(name: string) {
  const persons = await prisma.person.findMany({
    where: {
      name: {
        contains: name,
      },
    },
    include: {
      document: true,
    },
  });

  return persons;
}
