import { useState } from "react";
import "./edit.sass";
export const EditHeader = () => {
  const[colorBackgroundAndLogo, setColorBackgroundAndLogo] = useState<{
    background?: string,
    logo?: string
  }>({
    background: "",
    logo: ""
  })
  const [layout, setLayout] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [box, setBox] = useState<{
    quantity?: number;
    images?: string;
    backgroundBox?: string;
    texts?: string;
  }>({ quantity: 0, images: "", backgroundBox: "", texts: "" });
  const[mainBackground, setMainBackground] = useState<string>("")
  const [textImage, setTextImage] = useState<{
    text?: string;
    image?: string;
  }>({ text: "", image: "" });

  const[text, setText] = useState<string>("")

  //ERROR
  // const handleClick = () => {
  //   if (logo !== "" && colorBackgroundHeaderAndFooter !== "") {
  //     setError(false);
  //   }
  //   setError(true);
  // };

  console.log(layout, box, text, textImage, )
  return (
    <section className="edit">
      <div>
        {/* HEADER*/}
        <ul className="container">
          <h1>Header/Footer</h1>
          <li className="container-item">
            <h2 className="container-item-text">
              Modificar a cor do header/footer:
            </h2>
            <input
              className="container-item-input"
              onChange={(e) =>
                setColorBackgroundAndLogo({background: e.target.value})
              }
              placeholder="nome da cor em inglês ou em hexadecimal"
            ></input>
          </li>
          <li className="container-item">
            <h2 className="container-item-text">Modificar a ícone da logo:</h2>
            <input
              className="container-item-input"
              onChange={(e) => setColorBackgroundAndLogo({logo : e.target.value})}
              placeholder="Digite o endereço da imagem"
            ></input>
          </li>
          {error === true && <p style={{ color: "red" }}>Algum campo vázio</p>}
        </ul>

        {/* MAIN*/}
        <ul className="container">
          <h1>Main</h1>
          <li className="container-item">
            <h2 className="container-item-text">Layout da Página:</h2>
            <select
              className="container-item-input"
              onChange={(e) => setLayout(e.target.value)}
              placeholder="nome da cor em inglês ou em hexadecimal"
            >
              <option>Selecione o layout</option>
              <option value="box">Em box</option>
              <option value="text">Em texto</option>
              <option value="image">Em texto e imagem</option>
            </select>
            {layout === "box" && (
              <>
                <input
                  className="container-item-input"
                  type={"text"}
                  placeholder="Cor da box"
                  onChange={(e) => setBox({ backgroundBox: e.target.value })}
                />

                <input
                  type={"text"}
                  className="container-item-input"
                  placeholder="Quantidade de boxs"
                  onChange={(e) =>
                    setBox({ quantity: parseInt(e.target.value) })
                  }
                />

                <input
                  className="container-item-input"
                  type={"text"}
                  placeholder="Imagens"
                  onChange={(e) => setBox({ images: e.target.value })}
                />

                <textarea
                  cols={40}
                  rows={10}
                  className="container-item-input"
                  placeholder="Textos"
                  onChange={(e) => setBox({ texts: e.target.value })}
                />
              </>
            )}
            {layout === "image" && (
              <>
                <select
                  placeholder="Imagem posição"
                  onChange={(e) => setTextImage({ image: e.target.value })}
                >
                  <option>Posição da imagem:</option>
                  <option value="top">Em Cima</option>
                  <option value="bottom">Em Baixo</option>
                </select>
                <textarea
                  cols={40}
                  rows={10}
                  className="container-item-input"
                  placeholder="Texto"
                  onChange={(e) => setTextImage({ text: e.target.value })}
                />
              </>
            )}
            {layout === "text" && (
              <textarea
                cols={40}
                rows={10}
                className="container-item-input"
                placeholder="Texto"
                onChange={(e) => setText(e.target.value)}
              />
            )}
          </li>
          <li className="container-item">
            <h2 className="container-item-text">
              Background da página principal:
            </h2>
            <input
              className="container-item-input"
              type={"text"}
              onChange={(e) => setMainBackground(e.target.value)}
              placeholder="Digite a cor em inglês ou em hexadecimal"
            ></input>
          </li>
          {error === true && <p style={{ color: "red" }}>Algum campo vázio</p>}
        </ul>
      </div>
      <button className="button">
        Confirmar
      </button>
    </section>
  );
};
