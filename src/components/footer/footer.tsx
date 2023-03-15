import "./footer.sass";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Footer = () => {
const name = useSelector((state: RootState) => state.name.name)

  return (
    <section className="footer">
      <p className="footer-text">{name} &copy; 2023</p>
    </section>
  );
};
