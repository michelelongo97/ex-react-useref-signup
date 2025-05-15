import { use, useMemo, useState, useRef } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

function App() {
  const fullnameRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const specializationRef = useRef();
  const yearsRef = useRef();
  const [description, setDescription] = useState("");

  const isUsernameValid = useMemo(() => {
    const charsValid = username
      .split("")
      .every(
        (char) =>
          letters.includes(char.toLocaleLowerCase()) || numbers.includes(char)
      );

    return charsValid && username.length >= 6;
  }, [username]);

  const isPasswordValid = useMemo(() => {
    return (
      password.trim().length >= 8 &&
      password.split("").some((char) => letters.includes(char)) &&
      password.split("").some((char) => numbers.includes(char)) &&
      password.split("").some((char) => symbols.includes(char))
    );
  }, [password]);

  const isDescriptionValid = useMemo(() => {
    return description.trim().length >= 100 && description.trim().length < 1000;
  }, [description]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullname = fullnameRef.current.value;
    const specialization = specializationRef.current.value;
    const years = yearsRef.current.value;

    if (
      !fullname.trim() ||
      !username.trim ||
      !password.trim() ||
      !specialization.trim() ||
      !years.trim() ||
      years < 0 ||
      !description.trim() ||
      !isUsernameValid ||
      !isPasswordValid ||
      !isDescriptionValid
    ) {
      alert("errore");
      return;
    }
    console.log("Succes", {
      fullname,
      username,
      password,
      specialization,
      years,
      description,
    });
  };

  return (
    <>
      <div>
        <h1>Web Developer Signup</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={fullnameRef} placeholder="Nome completo" />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        {username.trim() && (
          <p style={{ color: isUsernameValid ? "green" : "red" }}>
            {isUsernameValid
              ? "Username valido"
              : "Deve contenere almeno 6 caratteri alfanumerici"}
          </p>
        )}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {password.trim() && (
          <p style={{ color: isPasswordValid ? "green" : "red" }}>
            {isPasswordValid
              ? "Password valida"
              : "Deve contenere almeno 8 caratteri, 1 lettera, 1 numero ed 1 simbolo"}
          </p>
        )}
        <select ref={specializationRef}>
          {" "}
          <option value="">Seleziona Specializzazione</option>
          <option value="fullstack">Full Stack</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
        </select>
        <input type="number" ref={yearsRef} placeholder="Anni di esperienza" />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Breve desrcizione dello sviluppaotore"
        />
        {description.trim() && (
          <p style={{ color: isDescriptionValid ? "green" : "red" }}>
            {isDescriptionValid
              ? "Descrizione valida"
              : "Deve contenere almeno 100 caratteri e max 1000"}
          </p>
        )}
        <button type="submit">Invia</button>
      </form>
    </>
  );
}

export default App;
