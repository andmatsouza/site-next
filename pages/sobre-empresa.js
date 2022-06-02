import Head from "next/head";
import Menu from "../components/Menu";

function SobreEmpresa() {
  return(
    <div>
      <Head>
        <meta charSet="utf-8" />
      <meta name="robots" content="index, follow"/>
        <meta name="description" content="A empresa oferece material de limpeza"/>
        <meta name="author" content="Anderson - Telelimp"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Sobre Empresa - Telelimp</title>
      </Head>
      <Menu />
      <p>Página sobre empresa</p>
    </div>
  )
}

export default SobreEmpresa;