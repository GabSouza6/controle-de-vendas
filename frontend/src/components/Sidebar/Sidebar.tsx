import iconSair from "../../assets/sair.svg";
import iconUser from "../../assets/user.svg";
import iconDashboard from "../../assets/dashboard.svg";
import iconVendedores from "../../assets/vendedores.svg";

const SideBar = () => {
  return (
    <aside className="flex flex-col h-screen w-64 px-4 py-6 border-r border-gray-200 bg-gray-50">
      <div className="px-3">
        <span className="font-semibold">
          Controle de <span className="text-green-500">Vendas</span>
        </span>
      </div>

      <nav className="flex flex-col flex-1 mt-8 gap-2">
        <a
          href="#"
          className="flex items-center gap-2 p-3 rounded-lg text-sm text-gray-600 hover:bg-green-100 hover:text-green-600"
        >
          <img src={iconDashboard} alt="Ícone Dashboard" className="w-5 h-5" />
          Dashboard
        </a>
        <a
          href="#"
          className="flex items-center gap-2 p-3 rounded-lg text-sm text-gray-600 hover:bg-green-100 hover:text-green-600"
        >
          <img
            src={iconVendedores}
            alt="Ícone Vendedores"
            className="w-5 h-5"
          />
          Vendedores
        </a>
      </nav>

      <div className=" pt-4 cursor-pointer">
        <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50">
          <img src={iconSair} alt="Icone de Sair" className="w-4 h-4" />
          <span>Sair</span>
        </div>

        <div className="flex items-center gap-2 mt-4 px-1">
          <img
            src={iconUser}
            alt="Icone de perfil do usuário"
            className="w-7 h-7 p-1.5 rounded-full bg-green-100"
          />
          <span className="text-xs text-gray-800">Estância</span>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
