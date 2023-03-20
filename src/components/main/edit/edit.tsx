import { useState } from "react";
import "./edit.sass";
import { BoxTypes, HeaderTypes, TextAndImageType } from "../../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { addLayout, addDataHeaderFooter } from "../../store/data";
// import { AddBackgroundBox, AddImagesBox, AddQuantityBox, AddTextsBox, AddText, AddImageOnText, AddTextOnImage, addLogo, addBackgroundHeaderAndFooter, addBackgroundMain, addLayout} from "../../store/data";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";

export const EditHeader = () => {
  const name = useSelector((state: RootState) => state.name.name)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [headerAndFooterData, setHeaderAndFooterData] =
    useState<HeaderTypes>({
      background: "",
      logo: ""
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
    image: ""
  });
  const [text, setText] = useState<string>("");
  

  //Onclick
  function handleClick(){
    dispatch(addLayout(layout));
    dispatch(addDataHeaderFooter(headerAndFooterData));
    console.log(headerAndFooterData.background, headerAndFooterData.logo)
    // switch (layout) {
    //   case 'box':
    //     dispatch(AddBackgroundBox(box.backgroundBox));
    //     dispatch(AddImagesBox(box.images));
    //     dispatch(AddTextsBox(box.texts));
    //     dispatch(AddQuantityBox(box.quantity));
    //     navigate(`/page/${name}`)
    //     break;
    //   case 'text':
    //     dispatch(AddText(text))
    //     navigate(`/page/${name}`)
    //     break;
    //   case 'image':
    //     dispatch(AddImageOnText(textImage.image))
    //     dispatch(AddTextOnImage(textImage.text))
    //     navigate(`/page/${name}`)

    // }
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
                setHeaderAndFooterData({ background: e.target.value, logo: headerAndFooterData.logo })
              }
              placeholder="nome da cor em inglês ou em hexadecimal"
            ></input>
          </li>
          <li className="container-item">
            <h2 className="container-item-text">Modificar a ícone da logo:</h2>
            <input
              className="container-item-input"
              onChange={(e) =>
                setHeaderAndFooterData({ logo: e.target.value, background: headerAndFooterData.background })
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

            {/* IMAGE */}

            {layout === "image" && (
              <>
                <input
                  className="container-item-input"
                  type={"text"}
                  onChange={(e) => setTextImage({ image: e.target.value })}
                  placeholder="Digite o endereço da imagem"
                ></input>
                <textarea
                  cols={40}
                  rows={10}
                  className="container-item-input"
                  placeholder="Texto"
                  onChange={(e) => setTextImage({ text: e.target.value })}
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
