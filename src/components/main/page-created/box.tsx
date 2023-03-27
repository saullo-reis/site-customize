import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import { BoxDataTypes } from "../../../utils/utils";
import "./page.sass"

export const Box = () => {
  const [allData, setAllData] = useState<BoxDataTypes[]>([]);
  const boxData = useSelector((state: RootState) => state.data);

  const createObjectOfBoxData = () => {
    let array: BoxDataTypes[] = [];

    for (let i = 0; i < boxData.box.quantity; ++i) {
      array.push({ image: boxData.box.images[i], text: boxData.box.texts[i] });
    }

    setAllData(array);
  };

  useEffect(() => {
    createObjectOfBoxData();
  }, []);

  console.log(boxData);
  return (
    <section style={{backgroundColor: boxData.backgroundMain}} className="boxs">
      <ul className="boxs-container">
        {allData.map((element, index) => {
          return (
            <li style={{backgroundColor: boxData.box.backgroundBox}} key={index} className="boxs-container-item">
              <img
                className="boxs-container-item-image"
                src={element.image}
              ></img>
              <p className="boxs-container-item-text">{element.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
