import type { V2_MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header";
import Icon from "~/components/Icon";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Estatuto Alert" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="w-screen h-screen bg-gray-200 font-body">
      <Header />
      <div className="flex flex-col items-center justify-center h-[calc(100%-4rem)]">
        <h1 className="text-6xl font-bold text-primary-500">Estatuto Alert</h1>
        <span className="mt-4 text-gray-700 mb-4">
          Verifique se seu estatuto de igualdade de direitos foi despachado nos ultimos três meses!
        </span>
        <div className="flex items-center justify-center w-full">
          <input className="w-1/3 px-4 py-2 mt-4 mr-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500" placeholder="Seu nome completo (ou quase) ..." />
          <button className="px-4 py-2 mt-4 text-base font-semibold text-white transition duration-200 ease-in bg-primary-500 border border-transparent rounded-lg shadow hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">Verificar</button>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center mt-40 px-8">
          <h1 className="text-3xl font-bold text-primary-500 w-1/2 text-center mb-3">Você pode criar um alerta tambem!</h1>
          <div className="flex items-center">
            <a href="/criar-alerta" className="text-gray-700 underline text-lg mr-1">Criar alerta</a>
            <Icon name="external-link" />
          </div>
        </div>
      </div>
    </div>
  );
}
