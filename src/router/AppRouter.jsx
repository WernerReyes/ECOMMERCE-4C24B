import { lazy } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { RouterWithNotFound } from "./RouterWithNotFound";
import { publicRoutes } from "../routes";

const LoginPage = lazy(() => import("../auth/pages/LoginPage"));

const RegisterPage = lazy(() => import("../auth/pages/RegisterPage"));

const ShopPage = lazy(() => import("../shop/pages/ShopPage"));

const CartPage = lazy(() => import("../cart/pages/CartPage"));

const HomePage = lazy(() => import("../home/pages/HomePage"));

const { LOGIN, REGISTER, HOME, SHOP, SERVICES, BLOG, CONTACT, PERFIL, CAR } = publicRoutes;


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <RouterWithNotFound>
        
        <Route path="/" element={<Navigate to={LOGIN} />} />
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={REGISTER} element={<RegisterPage />} />
        
        <Route path={HOME} element={<HomePage />} />
        <Route path={SHOP} element={<ShopPage />} />
        <Route path={SERVICES} element={<ShopPage />} />
        <Route path={BLOG} element={<ShopPage />} />
        <Route path={PERFIL} element={<LoginPage />} />
        <Route path={CAR} element={< CartPage />} />

      </RouterWithNotFound>
    </BrowserRouter>
  );
};