import { useState } from "react";
import './editheader.sass'
export const EditHeader = () => {
  const [colorBackgroundHeader, setColorBackgroundHeader] =
    useState<string>("");
  const [logo, setLogo] = useState<string>("");
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const[error, setError] = useState<boolean>(false)

  const handleClick = () => {
    if(logo !== "" && colorBackgroundHeader !== ""){
        setError(false);
        return setModalOpened(true)
    }
    setError(true)
  };

  return (
    <section className="header-edit">
      <ul className="container">
        <li className="container-item">
          <h2 className="container-item-text">
            Modificar a cor do header/footer:
          </h2>
          <input
            className="container-item-input"
            value={colorBackgroundHeader}
            onChange={(e) => setColorBackgroundHeader(e.target.value)}
            placeholder="nome da cor em inglês ou em hexadecimal"
          ></input>
        </li>
        <li className="container-item">
          <h2 className="container-item-text">Modificar a ícone da logo:</h2>
          <input
            className="container-item-input"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
            placeholder="Digite o endereço da imagem"
          ></input>
        </li>
      </ul>
      {error === true && (
        <p style={{ color: "red" }}>Algum campo vázio</p>
      )}
      <button className="button" onClick={() => handleClick()}>
        Confirmar
      </button>
      {modalOpened === true && (
        <div className="modal">
          <p className="modal-text">
            Essa é a cor que você quer?{" "}
            <span className="modal-text-span"></span>
          </p>
          <p className="modal-text">Essa é a imagem que você quer?</p>
          <img className="modal-img" src={logo}></img>
        </div>
      )}
    </section>
  );
};
