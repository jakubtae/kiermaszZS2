import { Link } from "react-router-dom";

function Nav() {
  return (
    <Nav>
      <h1>
        KIERMASZ
        <span>ZS2</span>
      </h1>
      <Link to="/dodawani">Dodaj Książke</Link>
      <div
        style={{
          width: "200px",
          aspectRatio: 1 / 1,
          borderRadius: "50%",
          color: "black",
        }}
      ></div>
    </Nav>
  );
}
export default Nav;
