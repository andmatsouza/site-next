import Styles from './styles.module.css';

export const Menu = () => {
  return (
  <div>
    <nav className={Styles.navbar}>
      <div className={Styles.maxwidth}>
        <div className={Styles.logo}>
          <a href="/">Telelimp</a>
        </div>
        <ul className={Styles.menu}>
          <li>
            <a href="/" className={Styles.menubtn}>
              Home
            </a>
          </li>
          <li>
            <a href="sobre-empresa" className={Styles.menubtn}>
              Sobre Empresa
            </a>
          </li>
          <li>
            <a href="contato" className={Styles.menubtn}>
              Contato
            </a>
          </li>
        </ul>
        <div className={Styles.menubtn}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>    
  </div>
)};