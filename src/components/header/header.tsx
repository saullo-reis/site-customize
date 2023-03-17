import { useState } from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux/es/exports";
import "./header.sass";

export const Header = () => {
  const name = useSelector((state: RootState) => state.name.name);
  const box = useSelector((state: RootState) => state.boxData)

  console.log(box);
  return (
    <section className="header">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1373/1373255.png"
        className="header-logo"
      ></img>
      {name !== "none" && (
        <p className="header-name">
          Bem vindo <span className="header-name-span">{name}</span>
        </p>
      )}
    </section>
  );
};
