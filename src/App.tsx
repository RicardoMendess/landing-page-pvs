import './App.css'
import LogoPrincipal from './img/logo-principal.png';
import IconeFacebook from './img/icone-facebook.png';
import IconeInstagram from './img/instagram.png';
import IconeOngImpacto from './img/text-ong-impacto.png';
import Homem from './img/imagem-homem-camisa-azul.png';
import BalaoEsquerdo from './img/balao-verde-esquerdo.png';
import GrupoJovens from './img/grupo-jovens.png';
import NossaHistoria from './img/nossa-historia.png';

function App() {

  return (
    <section className="bg-landing-pv">
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><img src={LogoPrincipal} alt="" /></a>

              <div className="navbar-collapse justify-content-center" data-bs-target="#navbarNavDropdown">
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <a className="c-000000 l-none t-none fw-bold" aria-current="page" href="#">Ínicio</a>
                  </li>
                  <li className="nav-item">
                    <a className="c-000000 l-none t-none mx-3 fw-bold" href="#">Quem Somos</a>
                  </li>
                  <li className="nav-item">
                    <a className="c-000000 l-none t-none fw-bold" href="#">Contato</a>
                  </li>
                </ul> 
              </div>

              <div className="navbar">
                <ul className="navbar-nav ">
                  <li className="nav-item mt-2">
                    <a className="c-000000 l-none t-none" aria-current="page" href="#"><img src={IconeFacebook} alt="Este ícone levará a página do facebook" /></a>
                  </li>
                  <li className="nav-item mt-2">
                    <a className="c-000000 l-none t-none mx-4" href="#"><img src={IconeInstagram} alt="Este ícone levará a página do instagram" /></a>
                  </li>
                  <li className="nav-item">
                    <button className="btn-faca-doacao"><a className="txt-faca-doacao l-none t-none c-ffffff" href="#">Faça sua doação</a></button>
                  </li>
                </ul> 
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="col-12 mt-10">
            <div className="row">
              <div className="col-12 col-sm-6">
                <img src={IconeOngImpacto} alt="Imagem de texto referente a informação sobre a Ong" />
                <p className="mt-5">Acreditamos que a solução para os problemas <br /> socioambientais começa no prato, que é verde, vivo, e <br />
                  se irradia para o corpo e espírito.
                </p>
                <button className="btn-saiba-mais mt-4"><a className="l-none t-none c-ffffff txt-saiba-mais" href="#">Saiba mais</a></button>
              </div>
              <div className="col-12 col-sm-6">
                <img src={Homem} alt="Imagem de homem negro segurando uma garrafa de plástico" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <img src={BalaoEsquerdo} alt="Imagem de balão esquerdo" />
        </div>
        <div className="container">
          <div className="col-12 ">
            <div className="row">
              <div className="col-12 col-sm-6 text-center">
                <img src={GrupoJovens} alt="Imagem referente a grupo de jovens" />
              </div>
              <div className="col-12 col-sm-6 text-center">
                <img src={NossaHistoria} alt="Imagem referente ao texto nossa história" />
                <p className="text-start fs-5 mt-5">
                  O Prato Verde Sustentável é uma tecnologia de impacto socioambiental criada em 2013, pelo gestor ambiental Wagner Ramalho, localizado na Associação Mutirão, no bairro Jardim Filhos da Terra, zona norte de São Paulo. Atuamos na promoção da soberania alimentar, a partir da produção de alimentos na cidade, utilizando como método de trabalho a educação ambiental, ensinando sobre a origem dos alimentos, como plantar, reutilizar água da chuva, reciclar resíduos orgânicos entre outros temas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>

      </footer>
    </section>
  )
}

export default App
