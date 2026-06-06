import iconSair from "../../assets/sair.svg";
import iconUser from "../../assets/user.svg";
import iconDashboard from "../../assets/dashboard.svg";
import iconVendedores from "../../assets/vendedores.svg";

const SideBar = () => {
  const NavLink = ({ icon, text }: { icon: string; text: string }) => (
    <a
      href="#"
      className="flex items-center gap-3 p-2 rounded-lg text-xs text-gray-600 hover:bg-green-100 hover:text-green-600 transition-colors"
    >
      <div className="w-8 flex justify-center">
        <img src={icon} alt={`Ícone ${text}`} className="w-4 h-4" />
      </div>
      {text}
    </a>
  );

  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-100 border-r border-gray-200 px-4 py-6 min-h-screen">
      <div className="flex flex-col gap-8 h-full">
        <div>
          <div className="px-2 mb-8">
            <span className="font-bold text-base tracking-tight">
              Controle de <span className="text-green-500">Vendas</span>
            </span>
          </div>

          <nav className="flex flex-col gap-1">
            <NavLink icon={iconDashboard} text="Dashboard" />
            <NavLink icon={iconVendedores} text="Vendedores" />
          </nav>
        </div>

        <div className="mt-auto flex flex-col gap-4 pt-6 border-t border-gray-200">
          {/* Sair */}
          <div className="flex items-center gap-3 p-2 text-xs text-gray-600 hover:text-black cursor-pointer transition-colors">
            <div className="w-8 flex justify-center">
              <img src={iconSair} alt="Icone de Sair" className="w-4 h-4" />
            </div>
            <span>Sair</span>
          </div>

          {/* Perfil */}
          <div className="flex items-center gap-3 p-2">
            <div className="w-8 flex justify-center">
              <img
                src={iconUser}
                alt="Icone de perfil"
                className="w-8 h-8 p-1.5 rounded-full bg-green-100"
              />
            </div>
            <span className="text-xs text-gray-800 font-medium truncate">
              usuario@exemplo.com
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
