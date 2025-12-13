import { useState } from "react";

const RegisterWithoutHook = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [age, setAge] = useState(0);
  let [password, setPassword] = useState("");
  let [clgName, setClgName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name", name);
    console.log("age", age);
    console.log("email", email);
    console.log("password", password);
    console.log("clgName", clgName);
    setName("");
    setAge(0);
    setClgName("");
    setEmail("");
  };

  return (
    <div>
      <h1>RegistrationWithoutHook Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <label>College Name</label>
        <input
          type="text"
          value={clgName}
          onChange={(e) => setClgName(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterWithoutHook;