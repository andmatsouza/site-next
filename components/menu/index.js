import Styles from "./styles.module.css";
import create from "zustand";

const useFilter = create((set) => {
  const initialState = {
    isOpen: false,
  };

  return {
    state: {
      ...initialState,
    },
    toggleModal: () =>
      set(({ state }) => {
        state.isOpen = !state.isOpen;
      }),
  };
});

export const Menu = () => {
  const { isOpen } = useFilter((store) => store.state);
  const { toggleModal } = useFilter((store) => store);
  return (
    <div>
      <nav className={Styles.navbar}>
        <div className={Styles.maxwidth}>
          <div className={Styles.logo}>
            <a href="/">Telelimp</a>
          </div>

        <ul className={ isOpen ? Styles.menumodal : Styles.menu}>
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
            <i
              id="test"
              className={ isOpen ? "fa-solid fa-xmark" : "fas fa-bars"}
              onClick={toggleModal}
            ></i>
          </div>
        </div>
      </nav>
    </div>
  );
};
