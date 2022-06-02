import Link from "next/link";
import Styles from './styles.module.css';

const Menu = () => (

  <div>
    <Link href="/">
      <a className={Styles.menu}>Home</a>
    </Link>

    <Link href="/sobre-empresa">
      <a className={Styles.menu}>Sobre Empresa</a>
    </Link>

    <Link href="/contato">
      <a className={Styles.menu}>Contato</a>
    </Link>
  </div>

);

export default Menu;