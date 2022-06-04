import Script from "next/script";
import Image from "next/image";
import {PageHead, Menu, Footer, Servicos} from '../components';
import premiumImg from '../public/premium_v5.jpg';


function Home() {
  return (
    <div>      
      <PageHead
      title="Telelimp"
      description="Site sobre material de limpeza"
    ></PageHead>      
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

     <Servicos title={"Serviços"} />

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
