import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { LazyLoad1, LazyLoad2, LazyLoad3 } from "../pages";

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout</h1>
      <ul>
        <li>
          <NavLink to="lazy1"> Lazy 1 </NavLink>
        </li>
        <li>
          <NavLink to="lazy2"> Lazy 2 </NavLink>
        </li>
        <li>
          <NavLink to="lazy3"> Lazy 3 </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy1" element={<LazyLoad1 />} />
        <Route path="lazy2" element={<LazyLoad2 />} />
        <Route path="lazy3" element={<LazyLoad3 />} />

        <Route path="*" element={<Navigate replace to='lazy1' />} />
      </Routes>
    </div>
  );
};
export default LazyLayout;
