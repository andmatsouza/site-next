import React from "react";
import { ServicosItem } from "../index";
import Styles from './styles.module.css';

export const Servicos = ({title}) => {
  const data = [
    {
      iconName: "fas fa-wifi",
      titleCard: "Wifi veloz",
      text: "Sed nisl elit, eleifend vel elit nec, tempus aliquet eros. Etiam nec blandit tortor.",
     
    },
    {
      iconName: "fas fa-rocket",
      titleCard: "Espaço inpirador",
      text: "Sed nisl elit, eleifend vel elit nec, tempus aliquet eros. Etiam nec blandit tortor.",
    },
    {
      iconName: "fas fa-handshake",
      titleCard: "Reuniões",
      text: "Sed nisl elit, eleifend vel elit nec, tempus aliquet eros. Etiam nec blandit tortor.",
    },
  ]
  return(
  <div>
    <section className={Styles.services}>
      <div className={Styles.maxwidth}>
        <h2 className={Styles.title}>{title}</h2>
        <div className={Styles.servcontent}>
        {data.map((item) => (
          <ServicosItem key={item.titleCard} {...item} />
        ))}
        </div>
      </div>
    </section>   
  </div>
)}; 


