import './App.css'
import LogoPrincipal from './img/logo-principal.png';
import IconeFacebook from './img/icone-facebook.png';
import IconeInstagram from './img/instagram.png';
import IconeOngImpacto from './img/text-ong-impacto.png';
import Homem from './img/imagem-homem-camisa-azul.png';
import BalaoEsquerdo from './img/balao-verde-esquerdo.png';
import GrupoJovens from './img/grupo-jovens.png';
import NossaHistoria from './img/nossa-historia.png';
import BalaoDireito from './img/balao-verde-direito.png';
import ProjetoPrato from './img/projetos-do-prato.png';
import HortaAgro from './img/horta-agroecologica.png';
import BioFertilizante from './img/biofertilizantes.png';
import PlantaVerde from './img/plantacao-verde.png';
import MaosJuntas from './img/maos-juntas.png';
import Impacto from './img/impacto-sociedade.png';
import MaosTronco from './img/maos-ao-tronco.png';
import MaosVida from './img/maos-vida.png';
import MaosTerra from './img/maos-terra.png';
import BallomLeft from './img/ballom-left.png';
import BallomRight from './img/ballom-right.png';
import EstadaoTitle from './img/estadao.png';
import MsnTitle from './img/msn.png';
import BbcTitle from './img/bbc.png';
import EstadaoText from './img/estadao-text.png';
import MsnText from './img/text-msn.png';
import BbcText from './img/bbc-text.png';

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
          <img src={BalaoEsquerdo} alt="Imagem de balão esquerdo verde" />
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
        <div className="col-12">
          <img src={BalaoDireito} alt="Imagem de balão direito verde" />
        </div>
        <div className="container">
          <div className="col-12">
            <h1 className="text-center"><img src={ProjetoPrato} alt="Imagem referente ao texto Projetos do Prato" /></h1>
          </div>
          <div className="col-12 mt-5">
            <div className="row d-flex">
              <div className="col-12 col-sm-6">
                <div className="card b-40">
                  <img src={HortaAgro} alt="Card que leva a informações sobre a horta agroecológica" />
                  <div className="card-img-overlay bg-cards-prato mt-16">
                    <p className="card-text text-center text-light text-legend-cards">Horta Agroecológica</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="card b-40">
                  <img src={BioFertilizante} alt="Card que leva a informações sobre biofertilizantes" />
                  <div className="card-img-overlay bg-cards-prato mt-16">
                    <p className="card-text text-center text-light text-legend-cards">Biofertilizantes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4">
            <div className="row d-flex">
              <div className="col-12 col-sm-6">
                <div className="card b-40">
                  <img src={PlantaVerde} className="card-img-top" alt="Card que leva a informações sobre Consultoria Ambiental"></img>
                  <div className="card-img-overlay bg-cards-prato mt-16">
                    <p className="card-text text-center text-light text-legend-cards">Consultoria Ambiental</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="card b-40" >
                  <img src={MaosJuntas} className="card-img-top" alt="Card que leva a informações osbre Cursos e Oficinas"></img>
                  <div className="card-img-overlay bg-cards-prato mt-16">
                    <p className="card-text text-center text-light text-legend-cards">Cursos e Oficinas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center mt-16">
          <img src={Impacto}></img>
        </div>
        <div className="container-fluid mt-5">
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-sm-4">
                <div className="container text-center">
                  <img  src={MaosTronco} className="img-impacto-socidade" alt="..."></img>
                  <div className="card-body mt-3">
                    <h5 className="card-title card-imp-numbers">+5000</h5>
                    <p className="card-text card-imp-text">Pessoas atendidas</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="container text-center">
                  <img  src={MaosVida} className="img-impacto-socidade" alt="..."></img>
                  <div className="card-body mt-3">
                    <h5 className="card-title card-imp-numbers">+1400</h5>
                    <p className="card-text card-imp-text">Treinamentos</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="container text-center">
                  <img  src={MaosTerra} className="img-impacto-socidade" alt="..."></img>
                  <div className="card-body mt-3">
                    <h5 className="card-title card-imp-numbers">+25000kg</h5>
                    <p className="card-text card-imp-text">De alimentos produzidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12">
            <h1 className="text-center text-nossa-equipe">NOSSA EQUIPE</h1>
          </div>
        </div>

        <div className="container">
          <div className="col-12 col-sm-6 col-md-12 col-lg-12 col-xl-8">
            <h4 className="text-end mt-1">biografia da equipe</h4>
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <a><img src={BallomRight} alt="Borda referente a imagem com linhas compridas e finas formando um balão"></img></a>
        </div>
        
        <section className="col-12">
          <div className="d-flex justify-content-between">
            <div className="col-sm-6 col-md-4 col-lg-5 col-xl-5">
              <img src={BallomLeft} title="Balão verde lateral esquerdo apontando para o prato na imprensa" lang="pt-br"></img>
            </div>
            <div className="col-sm-6 col-md-8 col-lg-7 col-xl-7">
              <h2 className="text-uppercase txt-prato-imprensa">O prato na imprensa</h2>
            </div>
          </div>
        </section>

        <section className="container my-5">
          <div className="col-12">
            <div className="row justify-content-between">
              <div className="card border-0 bg-transparent col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="card-img-top d-flex justify-content-center">
                  <a><img src={EstadaoTitle} className="mt-4"></img></a>
                </div>
                <div className="card-body d-flex justify-content-center my-3">
                  <a><img src={EstadaoText}></img></a>
                </div>
              </div>

              <div className="card border-0 bg-transparent col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="card-img-top d-flex justify-content-center">
                  <a><img src={MsnTitle}></img></a>
                </div>
                <div className="card-body d-flex justify-content-center">
                  <a><img src={MsnText}></img></a>
                </div>
              </div>

              <div className="card border-0 bg-transparent col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="card-img-top d-flex justify-content-center">
                  <a><img src={BbcTitle} className="mt-4"></img></a>
                </div>
                <div className="card-body d-flex justify-content-center my-4">
                  <a><img src={BbcText}></img></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>

      </footer>
    </section>
  )
}

export default App
