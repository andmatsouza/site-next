import Head from "next/head";
import Menu from "../components/Menu";

function Contato() {
  return(
    <div>
      <Head>
        <meta charSet="utf-8" />
      <meta name="robots" content="index, follow"/>
        <meta name="description" content="Contato com a empresa Telelimp"/>
        <meta name="author" content="Anderson - Telelimp"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Contato - Telelimp</title>
      </Head>
      <Menu />
      Página de contato
    </div>
  )
}

export default Contato;