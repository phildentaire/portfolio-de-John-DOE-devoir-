import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 mt-auto">
      <div className="container">
        <div className="row g-4">
          
          {/*colonne 1 :infos développeur*/}
          <div className="col-12 col-md-4">
            <h5 className="mb-3">John DOE</h5>
            <address className="mb-3" style={{ fontStyle: 'normal', lineHeight: '1.8' }}>
              <i className="bi bi-geo-alt-fill me-2"></i>15 Rue de la Pagode, 75016 Paris<br />
              <i className="bi bi-telephone-fill me-2"></i>+33 6 33 34 63 76<br />
              <i className="bi bi-envelope-fill me-2"></i>john.doe@email.com
            </address>
            <div className="footer-social">
              <a
                href="https://github.com/github-johndoe"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="GitHub de John DOE"
                title="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Twitter de John DOE"
                title="Twitter / X"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="LinkedIn de John DOE"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/*colonne 2: Nav*/}
          <div className="col-12 col-md-4">
            <h5 className="mb-3">Navigation</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2"><Link to="/">Accueil</Link></li>
              <li className="mb-2"><Link to="/services">Services</Link></li>
              <li className="mb-2"><Link to="/portfolio">Portfolio</Link></li>
              <li className="mb-2"><Link to="/contact">Contact</Link></li>
              <li className="mb-2"><Link to="/mentions-legales">Mentions légales</Link></li>
            </ul>
          </div>

          {/*colonne 3:dernières réalisations*/}
          <div className="col-12 col-md-4">
            <h5 className="mb-3">Dernières réalisations</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2"><Link to="/portfolio">DashBoard Développeur</Link></li>
              <li className="mb-2"><Link to="/portfolio">Espace Bien-Etre</Link></li>
              <li className="mb-2"><Link to="/portfolio">Fresh-Food E-Commerce</Link></li>
              <li className="mb-2"><Link to="/portfolio">Restaurant Japonais</Link></li>
              <li className="mb-2"><Link to="/portfolio">Portfolio Responsive</Link></li>
              <li className="mb-2"><Link to="/portfolio">Audit SEO & Référencement</Link></li>
              <li className="mb-2"><Link to="/portfolio">Apllicaion de Gestion</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary mt-4" />
        <p className="text-center mb-0" style={{ color: '#6c757d', fontSize: '0.9rem' }}>
          © {currentYear} John DOE – Tous droits réservés. |{' '}
          <Link to="/mentions-legales">Mentions légales</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;