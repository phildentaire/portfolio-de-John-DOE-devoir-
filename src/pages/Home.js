import React, { useState } from 'react';
import imgAbout from '../assets/john-doe-about.jpg';
import GithubModal from '../components/GithubModal';

const skills = [
  { name: 'HTML / CSS', level: 90, color: 'bg-danger' },
  { name: 'JavaScript', level: 60, color: 'bg-warning' },
  { name: 'React.js', level: 60, color: 'bg-info' },
  { name: 'Bootstrap', level: 75, color: 'bg-success' },
  { name: 'PHP / MySQL', level: 65, color: 'bg-primary' },
  { name: 'Git / GitHub', level: 80, color: 'bg-secondary' },
];

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/*section hero*/}
      <section className="hero-section" aria-label="Section d'accueil">
        <div className="container">
          <h1 className="display-3 fw-bold text-white mb-3">
            John <span className="text-primary">DOE</span>
          </h1>
          <h2 className="fs-3 text-white- mb-4">
            Développeur Web en alternance
          </h2>
          <p className="lead text-white- mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            Passionné par le développement web, je crée des expériences numériques modernes,
            accessibles et performantes avec React et Bootstrap.
          </p>
          <button
            className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow"
            onClick={() => setShowModal(true)}
            aria-label="En savoir plus sur John DOE"
          >
            <i className="bi bi-github me-2"></i>En savoir plus
          </button>
        </div>
      </section>

      {/*about skills et section*/}
      <section id="about" aria-labelledby="about-title">
        <div className="container">
          <div className="row g-5 align-items-center">

            {/*présentation*/}
            <div className="col-12 col-lg-6">
              <h2 id="about-title" className="section-title mb-4">
                À propos de moi
              </h2>
              <p className="mb-3">
                Je m'appelle <strong>John DOE</strong> et je suis actuellement en formation de
                développeur web au <strong>CEF</strong>. Je suis à la recherche d'une alternance
                pour mettre en pratique mes compétences et continuer à évoluer dans un environnement
                professionnel stimulant.
              </p>
              <p className="mb-3">
                Curieux et rigoureux, j'aime concevoir des interfaces soignées et des applications
                web fonctionnelles. Je maîtrise les technologies front-end modernes, en particulier
                <strong> React.js</strong> et <strong>Bootstrap</strong>.
              </p>
              <p className="mb-4">
                En dehors du code, je m'intéresse à l'open source, au design UI/UX et à la veille
                technologique.
              </p>
              <a href="/contact" className="btn btn-primary me-2">
                <i className="bi bi-envelope me-2"></i>Me contacter
              </a>
              <a
                href="/cv-johndoe.pdf"
                className="btn btn-outline-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-download me-2"></i>Télécharger mon CV
              </a>
            </div>

            {/*photo*/}
            <div className="col-12 col-lg-6 text-center">
              <img
                src={imgAbout}
                alt="Photo de profil de John DOE"
                style={{ maxWidth: '500px', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/*skills*/}
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="section-title mb-4">Mes compétences</h3>
            </div>
            {skills.map((skill, index) => (
              <div key={index} className="col-12 col-md-6 mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-semibold">{skill.name}</span>
                  <span className="text-muted">{skill.level}%</span>
                </div>
                <div className="progress">
                  <div
                    className={`progress-bar ${skill.color}`}
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={`Niveau en ${skill.name} : ${skill.level}%`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Modal GitHub*/}
      <GithubModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default Home;