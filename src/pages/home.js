import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="home">
      <h1>
        Kiermasz Szkolny <span className="ciemny2">ZS2</span>
      </h1>
      <h2 className="ciemny2 home_h2">
        Nasz kiermasz to książki od uczniów dla uczniów w przystępnych cenach{" "}
      </h2>
      <Link to="/login" className="classic_button">
        Zaloguj się
      </Link>
      <a href="prezentacja.pdf" download>
        Pobierz prezentację na temat pozycjonowania stron
      </a>
    </div>
  );
}

export default Home;
