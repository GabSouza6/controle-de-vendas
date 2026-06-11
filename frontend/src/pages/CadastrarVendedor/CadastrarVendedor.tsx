const CadastrarVendedor = () => {
  return (
    <main className="flex-1 p-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Cadastrar Vendedor</h1>
        <p className="text-sm text-gray-500">Preencha os dados do novo vendedor</p>
      </header>

      <div className="flex flex-col gap-4 w-full max-w-md">
        <div className="flex flex-col gap-1">
          <label htmlFor="nome" className="text-sm font-medium text-gray-700">Nome</label>
          <input type="text" id="nome" placeholder="Nome completo" className="bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="telefone" className="text-sm font-medium text-gray-700">Telefone</label>
          <input type="text" id="telefone" placeholder="(00) 00000-0000" className="bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="cidade" className="text-sm font-medium text-gray-700">Cidade</label>
          <select id="cidade" className="bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none cursor-pointer">
            <option value="">Selecione a cidade</option>
            <option value="estancia">Estância</option>
            <option value="umbauba">Umbaúba</option>
            <option value="itabaianinha">Itabaianinha</option>
          </select>
        </div>

        <div className="pt-1 flex gap-3">
          <button className="px-4 py-1.5 text-xs border border-gray-200 text-black hover:bg-gray-100 rounded-lg cursor-pointer">Cancelar</button>
          <button className="px-5 py-3 text-xs bg-green-500 hover:bg-green-600 text-white rounded-lg cursor-pointer">Salvar</button>
        </div>
      </div>
    </main>
  );
};

export default CadastrarVendedor;