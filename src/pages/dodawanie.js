function Dodawanie() {
  return (
    <div className="dodawanie">
      <nav>
        KIERMASZ <span className="ciemny2">ZS2</span>
      </nav>
      <main>
        <form>
          <div class="text_inputs">
            <div class="input_container">
              <input
                type="text"
                class="form_input"
                id="nazwa_podrecznika"
                name="nazwa_podrecznika"
                placeholder=" "
                required
              />
              <label for="nazwa_podrecznika">Nazwa Podręcznika</label>
            </div>
            <div class="input_container">
              <input
                type="text"
                class="form_input"
                id="przedmiot"
                name="przedmiot"
                placeholder=" "
                required
              />
              <label for="przedmiot">Przedmiot</label>
            </div>
            <div class="input_container">
              <input
                type="text"
                class="form_input"
                id="klasa"
                name="klasa"
                placeholder=" "
                required
              />
              <label for="klasa">Klasa</label>
            </div>
            <div class="input_container">
              <input
                type="text"
                class="form_input"
                id="cena"
                name="cena"
                placeholder=" "
                required
              />
              <label for="cena">Cena</label>
            </div>
            <input type="submit" value="DODAJ KSIĄŻKE" />
          </div>
          <div class="image_inputs">
            <span>Dodaj Zdjęcie</span>
            <input type="file" accept="image/*" multiple name="Zdjecie" />
          </div>
        </form>
      </main>
    </div>
  );
}

export default Dodawanie;
