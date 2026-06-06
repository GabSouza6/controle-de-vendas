const Login = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm flex flex-col gap-6 bg-white px-8 py-10 rounded-xl border border-gray-200">
        
        <div>
          <span className="text-xl font-semibold">
            Controle de <span className="text-green-500">Vendas</span>
          </span>
          <p className="text-sm text-gray-500 mt-1">Acesse sua conta para continuar</p>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu E-mail"
              id="email"
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium">Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              id="password"
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-500"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-600 cursor-pointer"
          >
            Entrar
          </button>
        </form>

      </div>
    </main>
  );
};

export default Login;