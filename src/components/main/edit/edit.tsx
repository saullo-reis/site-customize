import { useState } from "react";
import "./edit.sass";
import { BoxTypes, HeaderTypes, TextAndImageType } from "../../../utils/utils";
import { useDispatch } from "react-redux";
import { AddBackgroundBox, AddImagesBox, AddQuantityBox, AddTextsBox} from "../../store/data";

export const EditHeader = () => {
  const dispatch = useDispatch()
  const [colorBackgroundAndLogo, setColorBackgroundAndLogo] =
    useState<HeaderTypes>({
      background: "",
      logo: "",
    });
  const [layout, setLayout] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [box, setBox] = useState<BoxTypes>({
    quantity: 0,
    images: [],
    backgroundBox: "",
    texts: [],
  });
  const [mainBackground, setMainBackground] = useState<string>("");
  const [textImage, setTextImage] = useState<TextAndImageType>({
    text: "",
    imagePosition: "",
  });
  const [text, setText] = useState<string>("");
  

  //ERROR
  const handleClick = () => {
    if(layout === 'box'){
      dispatch(AddBackgroundBox(box.backgroundBox))
      dispatch(AddImagesBox(box.images))
      dispatch(AddTextsBox(box.texts));
      dispatch(AddQuantityBox(box.quantity));
    }
  };

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
                setColorBackgroundAndLogo({ background: e.target.value })
              }
              placeholder="nome da cor em inglês ou em hexadecimal"
            ></input>
          </li>
          <li className="container-item">
            <h2 className="container-item-text">Modificar a ícone da logo:</h2>
            <input
              className="container-item-input"
              onChange={(e) =>
                setColorBackgroundAndLogo({ logo: e.target.value })
              }
              placeholder="Digite o endereço da imagem"
            ></input>
          </li>
        </ul>

        {/* MAIN*/}
        <ul className="container">
          <h1>Main</h1>
          <li className="container-item">
            <h2 className="container-item-text">Layout da Página:</h2>
            <select
              className="container-item-input"
              onChange={(e) => setLayout(e.target.value)}
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
                  placeholder="URL das imagens"
                  onChange={(e) =>
                    setBox({ images: e.target.value.split(", ") })
                  }
                />

                <textarea
                  cols={40}
                  rows={10}
                  className="container-item-input"
                  placeholder="Textos"
                  onChange={(e) =>
                    setBox({ texts: e.target.value.split(", ") })
                  }
                />

              </>
            )}
            {layout === "image" && (
              <>
                <input
                  className="container-item-input"
                  type={"text"}
                  onChange={(e) => setTextImage({ image: e.target.value })}
                  placeholder="Digite a cor em inglês ou em hexadecimal"
                ></input>
                <select
                  placeholder="Imagem posição"
                  onChange={(e) =>
                    setTextImage({ imagePosition: e.target.value })
                  }
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
        </ul>
      </div>
      <button className="button" onClick={() => handleClick()}>
        Confirmar
      </button>
    </section>
  );
};
