import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import { BoxDataTypes } from "../../../utils/utils";

export const Box = () => {
  const [allData, setAllData] = useState<BoxDataTypes[]>([]);
  const boxData = useSelector((state: RootState) => state.data.box);

  const createObjectOfBoxData = () => {
    var array: BoxDataTypes[] = [];

    for (let i = 0; i < boxData.quantity; ++i) {
      array.push({ image: boxData.images[i], text: boxData.texts[i]})
    }

    setAllData(array);
  };

  useEffect(() => {
    createObjectOfBoxData();
  },[])

  console.log(allData)
  return <></>;
};
