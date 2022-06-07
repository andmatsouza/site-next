import { PageHead, Menu, Footer } from "../components";

function SobreEmpresa() {
  return (
    <div>
      <PageHead
        title="Sobre Empresa - Telelimp"
        description="A empresa oferece material de limpeza"
      ></PageHead>
      <Menu />

      <section className="about">
      <div className="max-width">
        <h2 className="title">Sobre Empresa</h2>
        <div className="about-content">
          <div className="column left">
            <img src="premium_v5.jpg" alt="Sobre Empresa"/>
          </div>
          <div className="column right">
            <div className="text">
              Desenvolvido para você atingir seus melhores índices de produtividade,
              criatividae e bem-estar.
            </div>
            <p>Sed eget lorem justo. Aliquam enim velit, faucibus bibendum sapien at, posuere pharetra mi. Nam id commodo leo, vitae cursus massa. Phasellus metus nisl, feugiat nec diam ut, malesuada aliquam tortor. Quisque vitae tellus eget neque consectetur efficitur. Nulla et sapien commodo mi mattis pulvinar. Mauris commodo, justo a malesuada pulvinar, tortor libero accumsan elit, et feugiat ipsum justo non quam.</p>           
          </div>
        </div>
        <div className="about-content">
          <div className="column left">
            <img src="premium_v5.jpg" alt="Sobre Empresa"/>
          </div>
          <div className="column right">
            <div className="text">
              Desenvolvido para você atingir seus melhores índices de produtividade,
              criatividae e bem-estar.
            </div>
            <p>Sed eget lorem justo. Aliquam enim velit, faucibus bibendum sapien at, posuere pharetra mi. Nam id commodo leo, vitae cursus massa. Phasellus metus nisl, feugiat nec diam ut, malesuada aliquam tortor. Quisque vitae tellus eget neque consectetur efficitur. Nulla et sapien commodo mi mattis pulvinar. Mauris commodo, justo a malesuada pulvinar, tortor libero accumsan elit, et feugiat ipsum justo non quam.</p>           
          </div>
        </div>
        <div className="about-content">
          <div className="column left">
            <img src="premium_v5.jpg" alt="Sobre Empresa"/>
          </div>
          <div className="column right">
            <div className="text">
              Desenvolvido para você atingir seus melhores índices de produtividade,
              criatividae e bem-estar.
            </div>
            <p>Sed eget lorem justo. Aliquam enim velit, faucibus bibendum sapien at, posuere pharetra mi. Nam id commodo leo, vitae cursus massa. Phasellus metus nisl, feugiat nec diam ut, malesuada aliquam tortor. Quisque vitae tellus eget neque consectetur efficitur. Nulla et sapien commodo mi mattis pulvinar. Mauris commodo, justo a malesuada pulvinar, tortor libero accumsan elit, et feugiat ipsum justo non quam.</p>            
          </div>
        </div>
      </div>
    </section>

    <Footer />

    </div>
  );
}

export default SobreEmpresa;
