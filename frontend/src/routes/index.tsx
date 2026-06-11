import { Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/Login/Login"
import Dashboard from "../pages/Dashboard/Dashboard"
import Vendedores from "../pages/Vendedores/Vendedores"
import Layout from "../components/Layout"
import CadastrarVendedor from "../pages/CadastrarVendedor/CadastrarVendedor"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vendedores" element={<Vendedores />} />
        <Route path="/vendedores/cadastrar" element={<CadastrarVendedor/>}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes