import Head from "next/head";
import Menu from "../components/Menu";

function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Site sobre material de limpeza" />
        <meta name="author" content="Anderson - Telelimp" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <title>Telelimp</title>
      </Head>
      <Menu />
      <p>Meu site sobre...</p>
    </div>
  );
}

export default Home;
