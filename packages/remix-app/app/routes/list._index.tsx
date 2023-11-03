import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { RiExternalLinkLine } from 'react-icons/ri';
import { Header } from '~/components/Header';

import { getPersons, getPersonsByName } from '~/models/person.server';

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const name = url.searchParams.get('name');

  const persons = await (name ? getPersonsByName(name) : getPersons());

  return json({
    persons: persons.sort((a, b) => a.name.localeCompare(b.name)),
  });
};

export default function List() {
  const { persons } = useLoaderData<typeof loader>();

  return (
    <div className="h-screen w-screen bg-gray-200 font-body dark:bg-gray-900">
      <Header />
      <div className="flex h-[calc(100%-4rem)] flex-col items-center justify-center pb-4">
        <div className="relative w-[80%] overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nome
                </th>
                <th scope="col" className="px-6 py-3">
                  Data de nascimento
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {persons.map((person) => (
                <tr
                  key={person.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-600 border-b bg-white dark:border-gray-700 dark:bg-gray-500"
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {person.name}
                  </th>
                  <td className="whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white">
                    {new Date(person.birthDate || '').toLocaleDateString(
                      'pt-BR',
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a
                      className="text-blue-600 dark:text-blue-500 font-medium hover:underline"
                      href={person.document.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <RiExternalLinkLine size={18} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
