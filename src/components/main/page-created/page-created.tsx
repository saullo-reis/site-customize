import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Box } from "./box";
import { Text } from "./text";
import "./page.sass";
import { TextAndImage } from "./text-and-image";

export const PageCreated = () => {
  const layout = useSelector((state: RootState) => state.data.layout);
  return <section className="page">{layout === "box" && <Box />}{layout === 'text' && <Text/>}{layout === 'image' && <TextAndImage/>}</section>;
};
