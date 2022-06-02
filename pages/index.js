import Head from "next/head";
import Script from "next/script";
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
      <section className="top">
        <div className="maxwidth">
          <div className="topcontent">
            <div className="text1">Temos a solução</div>
            <div className="text2">que a sua empresa precisa</div>
            <div className="text3">Podemos ajudar a sua empresa!</div>
            <a href="contato">Entrar em Contato</a>
          </div>
        </div>
      </section>

      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script src="custom.js" strategy="afterInteractive" />
    </div>
  );
}

export default Home;
