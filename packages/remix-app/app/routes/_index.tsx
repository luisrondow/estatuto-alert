import { useState, useRef } from "react";

import type { V2_MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header";
import { useNavigate } from "@remix-run/react";
import { RiExternalLinkLine } from "react-icons/ri";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Estatuto Alert" },
    { name: "description", content: "Welcome to Remix!" },
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
    <div className="w-screen h-screen bg-gray-200 font-body dark:bg-gray-900">
      <Header />
      <div className="flex flex-col items-center justify-center h-[calc(100%-4rem)]">
        <h1 className="text-6xl font-bold text-primary-500">Estatuto Alert</h1>
        <span className="mt-4 text-gray-700 mb-4 dark:text-gray-300">
          Verifique se seu estatuto de igualdade de direitos foi despachado nos ultimos três meses!
        </span>
        <div className="flex items-center justify-center w-full">
          <input
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearchPerson()}
            placeholder="Seu nome completo (ou quase) ..."
            className="w-1/3 px-4 py-2 mt-4 mr-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          />
          <button
            type="submit"
            onClick={handleSearchPerson}
            className="px-4 py-2 mt-4 text-base font-semibold text-white transition duration-200 ease-in bg-primary-500 border border-transparent rounded-lg shadow hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Verificar
          </button>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center mt-40 px-8">
          <h1 className="w-[300px] text-3xl font-bold text-primary-500 text-center mb-3">Você pode criar um alerta tambem!</h1>
          <div className="flex items-center">
            <a href="/alert" className="flex items-center text-gray-700 underline text-lg mr-1 dark:text-gray-300">
              Criar alerta
              <RiExternalLinkLine className="ml-1" size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
