import { Link } from "react-router-dom";
import iconSair from "../../assets/sair.svg";
import iconUser from "../../assets/user.svg";
import iconDashboard from "../../assets/dashboard.svg";
import iconVendedores from "../../assets/vendedores.svg";

const SideBar = () => {
  const NavLink = ({
    icon,
    text,
    to,
  }: {
    icon: string;
    text: string;
    to: string;
  }) => (
    <Link
      to={to}
      className="flex items-center gap-3 p-3 rounded-lg text-sm text-gray-600 hover:bg-green-100 hover:text-green-600 transition-colors"
    >
      <img src={icon} alt={`Ícone ${text}`} className="w-5 h-5" />
      {text}
    </Link>
  );

  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-100 border-r border-gray-200 h-screen sticky top-0">
      <div className="flex flex-col h-full p-6">
        <header className="mb-8 px-2">
          <span className="font-bold text-base tracking-tight">
            Controle de <span className="text-green-500">Vendas</span>
          </span>
        </header>

        <nav className="flex-1 flex flex-col gap-2">
          <NavLink icon={iconDashboard} text="Dashboard" to="/dashboard" />
          <NavLink icon={iconVendedores} text="Vendedores" to="/vendedores" />
        </nav>

        <footer className="flex flex-col gap-4 pt-6 border-t border-gray-200">
          <Link
            to="/"
            className="flex items-center gap-3 p-2 text-xs text-gray-600 hover:text-red-600 transition-colors cursor-pointer"
          >
            <img src={iconSair} alt="Sair" className="w-4 h-4" />
            <span>Sair</span>
          </Link>

          <div className="flex items-center gap-3 p-2">
            <img
              src={iconUser}
              alt="Foto de perfil do usuário"
              className="w-8 h-8 p-1.5 rounded-full bg-green-100 border border-green-200"
            />
            <div className="flex flex-col overflow-hidden">
              <span className="text-xs font-medium text-gray-800">
                Nome do Usuário
              </span>
              <span className="text-[10px] text-gray-500">
                usuario@exemplo.com
              </span>
            </div>
          </div>
        </footer>
      </div>
    </aside>
  );
};

export default SideBar;
