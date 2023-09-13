import { LoaderArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getPersons, getPersonsByName } from "~/models/person.server";

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");

  if (name) {
    return json({ persons: await getPersonsByName(name) });
  }

  return json({ persons: await getPersons() });
};

export default function List() {
  const { persons } = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>List</h1>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} - {new Date(person.birthDate || '').toDateString()}
            <br />
            <b>Documento</b>: {person.document.date} - <a href={person.document.link} target="blank">Link para o documento</a>
            <br />
            <br />
          </li>
        ))}
      </ul>
    </main>
  );
}