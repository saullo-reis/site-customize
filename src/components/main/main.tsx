import "./main.sass";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addName } from "../store/name";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (name.length >= 3) {
      navigate("/edit");
      dispatch(addName(name));
    } else {
      setError(true);
    }
  };

  return (
    <section className="main">
      <h2 className="main-text">
        Modifique o site a seu gosto, modifique a logo, as cores etc.
      </h2>
      {error === true && (
        <p style={{ color: "red" }}>Adicione um nome correto</p>
      )}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick();
          }
        }}
        className="main-input"
        type={"text"}
        placeholder="Digite seu nome"
      ></input>
      <button onClick={() => handleClick()} className="main-button">
        Começar
      </button>
    </section>
  );
};
