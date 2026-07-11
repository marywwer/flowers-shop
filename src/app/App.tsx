import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { ProductsPage } from '../pages/ProductsPage/ProductsPage';
import { CartPage } from '../pages/CartPage/CartPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { ProtectedRoute } from './router/ProtectedRoute';
import { PublicRoute } from './router/PublicRoute';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/profile"
            element={<div>Личный кабинет</div>}
          />
        </Route>

        <Route
          path="*"
          element={<div>Страница не найдена</div>}
        />
      </Routes>
    </BrowserRouter>
  );
};