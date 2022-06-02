import Link from "next/link";
//import Styles from "./styles.module.css";

const Menu = () => (
  <div>
    <nav className="navbar">
      <div className="maxwidth">
        <div className="logo">
          <a href="/">Telelimp</a>
        </div>
        <ul className="menu">
          <li>
            <a href="/" className="menubtn">
              Home
            </a>
          </li>
          <li>
            <a href="sobre-empresa" className="menubtn">
              Sobre Empresa
            </a>
          </li>
          <li>
            <a href="contato" className="menubtn">
              Contato
            </a>
          </li>
        </ul>
        <div className="menubtn">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>

    {/*<nav className={Styles.navbar}>
      <div className={Styles.maxwidth}>
        <div className={Styles.logo}><a href="/">Telelimp</a></div>
        <ul className={Styles.menu}>
          <li><a href="/" class={Styles.menubtn}>Home</a></li>
          <li><a href="/sobre-empresa" class={Styles.menubtn}>Sobre Empresa</a></li>
          <li><a href="/contato" class={Styles.menubtn}>Contato</a></li>
        </ul>
        <div className={Styles.menubtn}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
</nav>*/}
    {/*<Link href="/">
      <a className={Styles.menu}>Home</a>
    </Link>

    <Link href="/sobre-empresa">
      <a className={Styles.menu}>Sobre Empresa</a>
    </Link>

    <Link href="/contato">
      <a className={Styles.menu}>Contato</a>
</Link>*/}
  </div>
);

export default Menu;
