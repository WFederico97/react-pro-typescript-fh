import { Suspense } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading.... </span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <NavLink to="/">
              <img src="/logo.svg" alt="React Logo" />
            </NavLink>
            <ul>
              <li>
                <NavLink to="/shopping" >
                  Shopping Page
                </NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/shopping' element={<ShoppingPage />} />
            <Route path="/*" element={<Navigate to='/shopping' replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
