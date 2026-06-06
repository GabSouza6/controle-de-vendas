import SideBar from "../../components/Sidebar/SideBar";
import CardEstatistica from "../../components/CardEstatistica/CardEstatistica";

const cidades = [
  { cidade: "Estância", vendedores: 12, emEstoque: 74, totalVendido: 58 },
  { cidade: "Umbaúba", vendedores: 8, emEstoque: 55, totalVendido: 42 },
  { cidade: "Itabaianinha", vendedores: 5, emEstoque: 40, totalVendido: 31 },
];

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />

      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-sm text-gray-500">Visão geral do sistema</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <CardEstatistica
            titulo="Vendedores"
            valor={0}
            descricao="Total de vendedores cadastrados"
          />
          <CardEstatistica
            titulo="Total em Estoque"
            valor={0}
            descricao="Quantidade sobrando"
          />
          <CardEstatistica
            titulo="Total Vendido"
            valor={0}
            descricao="Unidades vendidas no total"
          />
        </section>

        <div className="bg-white border border-gray-200 rounded-xl p-6 ">
          <h2 className="text-sm font-semibold mb-4">Resumo por Cidade</h2>

          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 ">
                <th className="text-xs text-gray-400 font-medium text-left py-2 px-0">
                  CIDADE
                </th>

                <th className="text-xs text-gray-400 font-medium text-center py-2 ">
                  VENDEDORES
                </th>

                <th className="text-xs text-gray-400 font-medium text-center py-2 ">
                  EM ESTOQUE
                </th>

                <th className="text-xs text-gray-400 font-medium text-center py-2 ">
                  TOTAL VENDIDO
                </th>
              </tr>
            </thead>

            <tbody>
              {cidades.map((item) => (
                <tr key={item.cidade} className="border-b border-gray-100">
                  <td className="text-sm text-gray-700 py-4">{item.cidade}</td>

                  <td className="text-sm text-gray-500 text-center py-4">
                    {item.vendedores}
                  </td>

                  <td className="text-sm text-gray-500 text-center py-4">
                    {item.emEstoque}
                  </td>

                  <td className="text-sm text-green-500 font-medium text-center py-4">
                    {item.totalVendido}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
