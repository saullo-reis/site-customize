import { useState } from "react";
import "./edit.sass";
import { BoxTypes, HeaderTypes, TextAndImageType } from "../../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  addLayout,
  addDataHeaderFooter,
  AddBoxData,
  AddTextAndImage,
  AddText,
  addMainBackground,
} from "../../store/data";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { SketchPicker } from "react-color";

export const EditHeader = () => {
  const name = useSelector((state: RootState) => state.name.name);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [headerAndFooterData, setHeaderAndFooterData] = useState<HeaderTypes>({
    background: "",
    logo: "",
  });
  const [layout, setLayout] = useState<string>("");
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
    image: "",
  });
  const [text, setText] = useState<string>("");

  //Onclick
  function handleClick() {
    dispatch(addLayout(layout));
    dispatch(addDataHeaderFooter(headerAndFooterData));
    dispatch(addMainBackground(mainBackground));

    switch (layout) {
      case "box":
        dispatch(AddBoxData(box));
        break;
      case "text":
        dispatch(AddText(text));
        break;
      case "image":
        dispatch(AddTextAndImage(textImage));
    }
    navigate(`/page/${name}`);
  }

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
            <h3 style={{ margin: "20px" }}>Modificar cor do Footer/Header</h3>
            <SketchPicker
              color={headerAndFooterData.background}
              onChangeComplete={(e) =>
                setHeaderAndFooterData({
                  background: e.hex,
                  logo: headerAndFooterData.logo,
                })
              }
            />
          </li>
          <li className="container-item">
            <h2 style={{ margin: "20px" }} className="container-item-text">
              Modificar a ícone da logo:
            </h2>
            <input
              className="container-item-input"
              onChange={(e) =>
                setHeaderAndFooterData({
                  logo: e.target.value,
                  background: headerAndFooterData.background,
                })
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

            {/* BOX */}

            {layout === "box" && (
              <>
                <h3 style={{ margin: "20px" }} className="container-item-text">
                  Cor da box
                </h3>
                <SketchPicker
                  color={box.backgroundBox}
                  onChangeComplete={(e) =>
                    setBox({
                      backgroundBox: e.hex,
                      quantity: box.quantity,
                      images: box.images,
                      texts: box.texts,
                    })
                  }
                />
                <input
                  style={{ margin: "20px" }}
                  type={"text"}
                  className="container-item-input"
                  placeholder="Quantidade de boxs"
                  onChange={(e) =>
                    setBox({
                      quantity: parseInt(e.target.value),
                      backgroundBox: box.backgroundBox,
                      texts: box.texts,
                      images: box.images,
                    })
                  }
                />

                <input
                  className="container-item-input"
                  type={"text"}
                  placeholder="URL das imagens separe com vírgulas"
                  onChange={(e) =>
                    setBox({
                      images: e.target.value.split(", "),
                      backgroundBox: box.backgroundBox,
                      quantity: box.quantity,
                      texts: box.texts,
                    })
                  }
                />

                <textarea
                  style={{ margin: "20px" }}
                  cols={40}
                  rows={10}
                  className="container-item-input"
                  placeholder="Textos separe com vírgulas"
                  onChange={(e) =>
                    setBox({
                      texts: e.target.value.split(", "),
                      images: box.images,
                      backgroundBox: box.backgroundBox,
                      quantity: box.quantity,
                    })
                  }
                />
              </>
            )}

            {/* IMAGE */}

            {layout === "image" && (
              <>
                <input
                  className="container-item-input"
                  type={"text"}
                  onChange={(e) =>
                    setTextImage({
                      image: e.target.value,
                      text: textImage.text,
                    })
                  }
                  placeholder="Digite o endereço da imagem"
                ></input>
                <textarea
                  cols={40}
                  rows={10}
                  className="container-item-input"
                  placeholder="Texto"
                  onChange={(e) =>
                    setTextImage({
                      text: e.target.value,
                      image: textImage.image,
                    })
                  }
                />
              </>
            )}

            {/* TEXT */}

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
            <SketchPicker
              color={mainBackground}
              onChangeComplete={(e) => setMainBackground(e.hex)}
            />
          </li>
        </ul>
      </div>
      <button className="button" onClick={() => handleClick()}>
        Confirmar
      </button>
    </section>
  );
};
