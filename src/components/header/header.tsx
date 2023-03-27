import { useState } from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux/es/exports";
import "./header.sass";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const name = useSelector((state: RootState) => state.name.name);
  const data = useSelector((state: RootState) => state.data.headerAndFooter)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/edit')
  }

  return (
    <section className="header" onClick={() => {handleClick()}}
    style={{backgroundColor: data.background}}>
      <img
        src={data.logo}
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
