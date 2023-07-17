const Navbar = ({ setActiveModal }) => {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => setActiveModal("login")}>Вход</button>
        </li>
        <li>
          <button onClick={() => setActiveModal("signup")}>Регистрация</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
