import iconFechar from "../../assets/x.svg";

const AtualizarSaldo = () => {
  return (
    <main className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="bg-white max-w-100 w-full rounded-2xl p-5">
        <div className="flex justify-between">
          <h3 className="text-sm">Atualizar Estoque</h3>
          <img
            src={iconFechar}
            alt="Icone Fechar"
            className="w-5 cursor-pointer"
          />
        </div>

        <div className="flex mt-6 gap-40 items-center">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-500">Vendedor</span>
            <span className="text-sm">Lucas Ferreira</span>
          </div>

          <div className="bg-gray-100 rounded-xl p-3 text-center flex flex-col">
            <span className="text-xs text-gray-500">Estoque atual</span>
            <span className="text-lg font-bold text-green-600 mt-1">50</span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="quantidade"
              className="text-sm font-medium text-gray-700"
            >
              Adicionar quantidade
            </label>
            <input
              type="number"
              id="quantidade"
              placeholder="0"
              className="bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none  "
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="venda"
              className="text-sm font-medium text-gray-700"
            >
              Registrar venda
            </label>
            <input
              type="number"
              id="venda"
              placeholder="0"
              className="flex-1 bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none "
            />
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button className="flex-1 py-2 px-4 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer">
            Cancelar
          </button>
          <button className="flex-1 py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium cursor-pointer">
            Confirmar
          </button>
        </div>
      </div>
    </main>
  );
};

export default AtualizarSaldo;
