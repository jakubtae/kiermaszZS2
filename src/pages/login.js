import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <main>
        <span class="logo">ZS2</span>
        <h1>Witaj Ponownie</h1>
        <form>
          <div class="input_container">
            <input
              type="text"
              class="form_input"
              id="uname"
              name="uname"
              placeholder=" "
              required
            />
            <label for="uname">Email</label>
          </div>
          <div class="input_container">
            <input
              type="password"
              class="form_input"
              id="pass"
              name="password"
              placeholder=" "
              required
            />
            <label for="pass">Hasło</label>
          </div>
          <div className="utilities">
            <div>
              <input type="checkbox" />
              <span>Pamiętaj mnie</span>
            </div>
            <div>Zapomniałeś hasła?</div>
          </div>
          <Link to="/dodawanie" className="logowanie_button">
            Zaloguj się
          </Link>
        </form>
        <footer>
          <span>Nie masz konta? Idź do wychowawcy</span>
        </footer>
      </main>
      <aside>
        <img src="logo_tran.png" alt="logo" />
      </aside>
    </div>
  );
}

export default Login;
