import "./footer.sass";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Footer = () => {
  const name = useSelector((state: RootState) => state.name.name);
  const backgroundColor = useSelector((state: RootState) => state.data.headerAndFooter.background)

  return (
    <section className="footer" style={{backgroundColor: backgroundColor}}>
      <p className="footer-text">{name} &copy; 2023</p>
    </section>
  );
};
