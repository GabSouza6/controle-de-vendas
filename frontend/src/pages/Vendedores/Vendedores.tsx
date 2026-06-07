import SideBar from "../../components/Sidebar/SideBar";

const Vendedores = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />

      <main className="flex-1 p-8">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Vendedores</h1>
            <p className="text-sm text-gray-500">Gerencie os vendedores cadastrados</p>
          </div>
          <button className=" bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg cursor-pointer">
            + Cadastrar Vendedor
          </button>
        </header>

        <div className="flex items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Buscar vendedor por nome ou código"
            className="w-96 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none hover:border-gray-500 "
          />

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Filtrar por cidade:</span>
            <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none hover:border-gray-500 cursor-pointer">
              <option>Todas as cidades</option>
              <option>Estância</option>
              <option>Umbaúba</option>
              <option>Itabaianinha</option>
            </select>
          </div>
        </div>

        {/* TabelaVendedores vai aqui */}

      </main>
    </div>
  )
}

export default Vendedores