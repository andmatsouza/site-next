import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import premiumImg from '../public/premium_v5.jpg';

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

      <section className="services">
      <div className="maxwidth">
        <h2 className="title">Serviços</h2>
        <div className="servcontent">
          <div className="card">
            <div class="box">
              <i className="fas fa-wifi"></i>
              <div className="text">Wifi veloz</div>
              <p>Sed nisl elit, eleifend vel elit nec, tempus aliquet eros. Etiam nec blandit tortor.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-rocket"></i>
              <div className="text">Espaço inpirador</div>
              <p>Sed nisl elit, eleifend vel elit nec, tempus aliquet eros. Etiam nec blandit tortor.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-handshake"></i>
              <div className="text">Reuniões</div>
              <p>Sed nisl elit, eleifend vel elit nec, tempus aliquet eros. Etiam nec blandit tortor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="premium">
      <div class="maxwidth">
        <h2 class="title">Serviço Premium</h2>
        <div class="premiumcontent">
          <div class="column left">
            <Image src={premiumImg} alt="Serviço premium" />
          </div>
          <div class="column right">
            <div class="text">
              Desenvolvido para você atingir seus melhores índices de produtividade,
              criatividae e bem-estar.
            </div>
            <p>Sed eget lorem justo. Aliquam enim velit, faucibus bibendum sapien at, posuere pharetra mi. Nam id commodo leo, vitae cursus massa. Phasellus metus nisl, feugiat nec diam ut, malesuada aliquam tortor. Quisque vitae tellus eget neque consectetur efficitur. Nulla et sapien commodo mi mattis pulvinar. Mauris commodo, justo a malesuada pulvinar, tortor libero accumsan elit, et feugiat ipsum justo non quam.</p>
            <a href="contato">Contato</a>
          </div>
        </div>
      </div>
    </section>

    <Footer />

      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script src="custom.js" strategy="afterInteractive" />
    </div>
  );
}

export default Home;
