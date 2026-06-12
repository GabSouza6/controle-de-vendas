import { Link } from "react-router-dom";
import iconCarteira from "../../assets/carteira.svg";
import iconLixeira from "../../assets/lixeira.svg";
import { useState } from "react";

const listaVendedores = [
  { id: "01", nome: "Gabriel Santos", cidade: "Estância", estoque: 50 },
  { id: "02", nome: "Mariana Costa", cidade: "Umbaúba", estoque: 28 },
  { id: "03", nome: "Pedro Alves", cidade: "Itabaianinha", estoque: 40 },
  { id: "04", nome: "Ana Lima", cidade: "Estância", estoque: 15 },
  { id: "05", nome: "Carlos Souza", cidade: "Umbaúba", estoque: 33 },
];

const TabelaVendedores = () => {
  const [vendedores, setVendedores] = useState(listaVendedores)

  const deletar = (id: string) => {
    setVendedores(vendedores.filter((vendedor) => vendedor.id !== id))
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr className="border-b border-gray-200">
            <th className="text-xs text-gray-400 font-medium text-left py-3 px-4">
              ID
            </th>
            <th className="text-xs text-gray-400 font-medium text-left py-3 px-4">
              NOME
            </th>
            <th className="text-xs text-gray-400 font-medium text-left py-3 px-4">
              CIDADE
            </th>
            <th className="text-xs text-gray-400 font-medium text-left py-3 px-4">
              ESTOQUE ATUAL
            </th>
            <th className="text-xs text-gray-400 font-medium text-left py-3 px-4">
              AÇÕES
            </th>
          </tr>
        </thead>
        <tbody>
          {vendedores.map((item) => (
            <tr key={item.id} className="border-b border-gray-100">
              <td className="text-sm text-gray-400 py-4 px-4">{item.id}</td>
              <td className="text-sm text-gray-700 font-medium py-4 px-4">
                {item.nome}
              </td>
              <td className="text-sm text-gray-500 py-4 px-4">{item.cidade}</td>
              <td className="text-sm text-green-500 font-medium py-4 px-4">
                {item.estoque}
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <Link
                    to="/vendedores/atualizar-saldo"
                    className="p-1.5 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer"
                  >
                    <img
                      src={iconCarteira}
                      alt="Atualizar saldo"
                      className="w-4 h-4"
                    />
                  </Link>
                  <button onClick={() => deletar(item.id)} className="p-1.5 border border-gray-200 rounded-md hover:bg-red-100 cursor-pointer">
                    <img
                      src={iconLixeira}
                      alt="Deletar vendedor"
                      className="w-4 h-4"
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaVendedores;
