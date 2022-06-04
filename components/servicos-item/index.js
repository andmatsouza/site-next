import Styles from './styles.module.css';

export const ServicosItem = ({ ...props }) => {
  return (
         
        <div className={Styles.card}>
          <div class={Styles.box}>
            <i className={props.iconName}></i>
            <div className={Styles.text}>{props.titleCard}</div>
            <p>{props.text}</p>
          </div>
        </div>     
  );
};
