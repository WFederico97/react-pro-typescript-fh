import { Suspense } from "react";
import { routes } from "./routes";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading.... </span>}  >
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <NavLink to="/">
              <img src="/logo.svg" alt="React Logo" />
            </NavLink>
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component, to }) => (
              <Route key={to} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
