import { use, useState } from "react";

function App() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [years, setYears] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fullname.trim() ||
      !username.trim ||
      !password.trim() ||
      !specialization.trim() ||
      !years.trim() ||
      years < 0 ||
      !description.trim()
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
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          placeholder="Nome completo"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <select
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          {" "}
          <option value="fullstack">Full Stack</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
        </select>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          placeholder="Anni di esperienza"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Breve desrcizione dello sviluppaotore"
        />
        <button type="submit">Invia</button>
      </form>
    </>
  );
}

export default App;
