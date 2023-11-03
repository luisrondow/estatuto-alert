import { useState } from 'react';

import type { V2_MetaFunction } from '@remix-run/node';
import { Header } from '~/components/Header';
import { useNavigate } from '@remix-run/react';
import { RiExternalLinkLine } from 'react-icons/ri';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Estatuto Alert' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSearchPerson = async () => {
    if (!name) {
      alert('Digite um nome para pesquisar!');
      return;
    }

    navigate(`/list?name=${name}`);
  };

  return (
    <div className="h-screen w-screen bg-gray-200 font-body dark:bg-gray-900">
      <Header />
      <div className="flex h-[calc(100%-4rem)] flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-primary-500">Estatuto Alert</h1>
        <span className="my-4 text-gray-700 dark:text-gray-300">
          Verifique se seu estatuto de igualdade de direitos foi despachado nos
          ultimos três meses!
        </span>
        <div className="flex w-full items-center justify-center">
          <input
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearchPerson()}
            placeholder="Seu nome completo (ou quase) ..."
            className="mr-4 mt-4 w-1/3 appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500"
          />
          <button
            type="submit"
            onClick={handleSearchPerson}
            className="border-transparent mt-4 rounded-lg border bg-primary-500 px-4 py-2 text-base font-semibold text-white shadow transition duration-200 ease-in hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Verificar
          </button>
        </div>
        <div className="mt-40 flex w-1/2 flex-col items-center justify-center px-8">
          <h1 className="mb-3 w-[300px] text-center text-3xl font-bold text-primary-500">
            Você pode criar um alerta tambem!
          </h1>
          <div className="flex items-center">
            <a
              href="/alert"
              className="mr-1 flex items-center text-lg text-gray-700 underline dark:text-gray-300"
            >
              Criar alerta
              <RiExternalLinkLine className="ml-1" size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
