import "./footer.scss";
import { Link } from "react-router-dom";
import logo from "./white-logo.svg";
import linkImg from "./link-img.svg"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <Link className="footer_logo" to={'/'}>
            <img src={logo} alt="logo" className="footer__logo-img" />
            <p className="footer__logo-description">благодійний фонд</p>
          </Link>
          <nav className="footer__nav">
            <Link className="footer__nav-link" to={'/about'}>ПРО ФОНД</Link>
            <Link className="footer__nav-link" to={'/news'}>НОВИНИ</Link>
            <Link className="footer__nav-link" to={'/reports'}>ЗВІТИ</Link>
          </nav>
          <nav className="footer__nav">
            <a href="#" className="footer__nav-link-social"><img src={linkImg} className="footer__nav-link-social-img" />сторінка фонду </a>
            <a href="#" className="footer__nav-link-social"><img src={linkImg} className="footer__nav-link-social-img" />сторінка Антитіла </a>
            <a href="#" className="footer__nav-link-social"><img src={linkImg} className="footer__nav-link-social-img" />сторінка сторінка ` </a>
            <a href="#" className="footer__nav-link-social"><img src={linkImg} className="footer__nav-link-social-img" />сторінка фонду` </a>
            <a href="#" className="footer__nav-link-social"><img src={linkImg} className="footer__nav-link-social-img" />сторінка фонду` </a>
            <a href="#" className="footer__nav-link-social"><img src={linkImg} className="footer__nav-link-social-img" />сторінка фонду` </a>
          </nav>
          <div className="footer__about">
            <h3 className="footer__about-item">Контакти: </h3>
            <h3 className="footer__about-item">Дмитро Водовозов </h3>
            <a href="tel:+380730000000" className="footer__about-item">+38 (073) 000-00-00 </a>
            <a href="email:office@info.in.ua" className="footer__about-item">office@info.in.ua </a>
          </div>
        </div>

      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-left">© Antytila | Зареєстровано в Україні. Благодійний фонд «АНТИТІЛА»</div>
          <nav className="footer__bottom-right">
            <a href="#" className="footer__bottom-link">Політика конфіденційності</a>
            <a href="#" className="footer__bottom-link">Політика Cookies</a>
            <a href="#" className="footer__bottom-link">Публічна оферта</a>
          </nav>
        </div>
      </div>
    </footer >
  )
}