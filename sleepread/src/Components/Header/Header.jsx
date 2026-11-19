import { NavLink } from "react-router-dom";

export default Headers = () => {
  return (
    <nav>
      <NavLink to="/">Бібліотека </NavLink>
      <NavLink to="/settings">Налаштування</NavLink>
      <NavLink to="/login">Реєестрація</NavLink>
    </nav>
  );
};
