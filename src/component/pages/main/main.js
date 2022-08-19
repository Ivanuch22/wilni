import { Link } from "react-router-dom"
import Banner from "../../banner/banner"
import firstBannerImg from "./bannerImages/firstBannerImg.jpg"
import secondBannerImg from "./bannerImages/secondBannerImg.jpg"
import thirdBannerImg from "./bannerImages/thirdBannerImg.jpg"
import aboutImg from "./bannerImages/about.jpg"
import firstRowImg from "./bannerImages/rowFirstImg.jpg"
import secondRowImg from "./bannerImages/rowSecondImg.jpg"
import thirdRowImg from "./bannerImages/rowThirdImg.jpg"
import forthRowImg from "./bannerImages/rowForthImg.jpg"
import "./main.scss"
export default function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__banner-block">
          <Banner linkToPage={'helpArmy'} linkToImg={firstBannerImg} title={"Допомога Збройним  Силам України "} />
          <Banner linkToPage={'helpChild'} linkToImg={secondBannerImg} title={"Допомога дітям"} description={"загиблих військових 130 батальйону ТрО"} />
          <Banner linkToPage={'aeroexposure'} linkToImg={thirdBannerImg} title={"аеророзробка"} description={'на розробку українських дронів та БПЛА'} />
        </div>
        <div className="main__about">
          <div className="main__column">
            <h1 className="main__title title">Про фонд</h1>
            <p className="main__description description"> <span className="red">Благодійний Фонд «АНТИТІЛА»</span>  – некомерційна благодійна організація, заснована в м.Києві музикантами гурту Антитіла. Сьогодні, під час широкомасштабної російської агресії проти України, музиканти гурту Антитіла з першого дня війни несуть службу у підрозділах 130 батальйону ТРО, а БФ «Антитіла» посилює свою роботу з допомоги Збройним Силам України, а також цивільним особам, і визначає <span className="red">три основних напрямки роботи:</span></p>
            <p className="main__description main__description-li description  ">Підтримка ЗСУ засобами захисту, розвідки і медицини.</p>
            <p className="main__description main__description-li description  ">Підтримка дітей та сімей загиблих військових.</p>
            <p className="main__description main__description-li description  ">Фінансування інноваційних військових розробок у галузі робототехніки та авіабудування</p>
            <Link to={'/about'}>
              <button className="main__button button-transparent">докладніше</button>
            </Link>
          </div>
          <div className="main__column">
            <img src={aboutImg} alt='main-about' className="main__img" />
          </div>
        </div>

      </div>
      <div className="main__row">
        <div className="main__row-block">
          <img src={secondRowImg} className="main__img" />
          <div className="main__row-text-block">
            <div className="main__row-text-number">1,1+</div>
            <div className="main__row-text-title">МЛН ГРН</div>
            <div className="main__row-text-description">закуплено для  українського війська</div>
          </div>
        </div>
        <div className="main__row-block">
          <img src={firstRowImg} className="main__img" />
          <div className="main__row-text-block">
            <div className="main__row-text-number">500+</div>
            <div className="main__row-text-title">ЗАСОБІВ ТАКТИЧНОЇ АМУНІЦІЇ</div>

            <div className="main__row-text-description">зібрано на потреби армії
              з 2014 року</div>
          </div>
        </div>

        <div className="main__row-block">
          <img src={thirdRowImg} className="main__img" />
          <div className="main__row-text-block">
            <div className="main__row-text-number">200+</div>
            <div className="main__row-text-title">ТОН ГУМАНІТАРНОЇ ДОПОМОГИ</div>

            <div className="main__row-text-description">доставлено від початку
              повномасштабного вторгнення</div>
          </div>
        </div>
        <div className="main__row-block">
          <img src={forthRowImg} className="main__img" />
          <div className="main__row-text-block">
            <div className="main__row-text-number">100+</div>
            <div className="main__row-text-title">комплекти аптечок</div>

            <div className="main__row-text-description">доставлено від початку
              повномасштабного вторгнення</div>
          </div>
        </div>
      </div>
    </main>
  )
}