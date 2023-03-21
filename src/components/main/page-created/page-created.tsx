import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Box } from "./box";
import './page.sass'

export const PageCreated = () => {
  const layout = useSelector((state: RootState) => state.data.layout);
  return <section className="page">{layout === "box" && <Box />}</section>;
};
