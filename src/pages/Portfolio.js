import React from 'react';
import imgCoder from '../assets/coder.jpg';
import imgEspaceBienEtre from '../assets/espace-bien-etre.jpg';
import imgFreshFood from '../assets/fresh-food.jpg';
import imgRestaurantJaponais from '../assets/restaurant-japonais.jpg';
import imgScreens from '../assets/screens.jpg';
import imgSeo from '../assets/seo.jpg';
import imgHeroBg from '../assets/hero-bg.jpg';

const projects = [
  {
    title: 'Dashboard Développeur',
    description:
      'Tableau de bord interactif pour développeurs avec éditeur de code intégré, gestion de snippets et statistiques de productivité.',
    tags: ['React', 'Bootstrap', 'CSS Grid'],
    image: imgCoder,
    github: 'https://github.com/github-johndoe',
    demo: '#',
  },
  {
    title: 'Espace Bien-être',
    description:
      'Site vitrine pour un centre de bien-être et de méditation : présentation des soins, réservation en ligne et blog de conseils.',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    image: imgEspaceBienEtre,
    github: 'https://github.com/github-johndoe',
    demo: '#',
  },
  {
    title: 'Fresh Food – E-Commerce',
    description:
      'Boutique en ligne de produits frais et biologiques avec panier, fiches produit et système de commande en ligne.',
    tags: ['React', 'API REST', 'Bootstrap'],
    image: imgFreshFood,
    github: 'https://github.com/github-johndoe',
    demo: '#',
  },
  {
    title: 'Restaurant Japonais',
    description:
      'Site vitrine pour un restaurant japonais gastronomique : menu interactif, galerie photos et réservation de table en ligne.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: imgRestaurantJaponais,
    github: 'https://github.com/github-johndoe',
    demo: '#',
  },
  {
    title: 'Portfolio Responsive',
    description:
      'Portfolio personnel responsive optimisé pour tous les supports. Intégration pixel-perfect de maquettes avec Bootstrap 5.',
    tags: ['React', 'Bootstrap', 'Responsive'],
    image: imgScreens,
    github: 'https://github.com/github-johndoe',
    demo: '#',
  },
  {
    title: 'Audit SEO & Référencement',
    description:
      'Outil d\'audit SEO automatisé : analyse des balises méta, score de performance, suggestions d\'optimisation et rapport détaillé.',
    tags: ['React', 'API', 'SEO'],
    image: imgSeo,
    github: 'https://github.com/github-johndoe',
    demo: '#',
  },
  {
    title: 'Application de Gestion',
    description:
      'Application web de gestion de projets avec tableau de bord, suivi des tâches, calendrier et statistiques en temps réel.',
    tags: ['React', 'Hooks', 'Bootstrap'],
    image: imgHeroBg,
    github: 'https://github.com/github-johndoe',
    demo: '#',
  },
];

function Portfolio() {
  return (
    <section aria-labelledby="portfolio-title">
      <div className="container">
        <div className="text-center mb-5">
          <h1 id="portfolio-title" className="section-title text-center">
            Mes Réalisations
          </h1>
          <p className="text-muted mt-4 mx-auto" style={{ maxWidth: '600px' }}>
            Découvrez une sélection de mes projets personnels et de formation, réalisés
            avec les technologies web modernes.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-sm-6 col-xl-4">
              <div className="card h-100 border-0 shadow-sm overflow-hidden">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={`Capture d'écran du projet ${project.title}`}
                  style={{ height: '200px', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title h5 mb-2">{project.title}</h3>
                  <p className="card-text text-muted flex-grow-1">{project.description}</p>
                  <div className="mb-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="badge bg-primary me-1 mb-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="btn btn-dark btn-sm flex-fill"
                      aria-label={`Voir le code source de ${project.title} sur GitHub`}
                    >
                      <i className="bi bi-github me-1"></i>GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm flex-fill"
                      aria-label={`Voir la démo du projet ${project.title}`}
                    >
                      <i className="bi bi-eye me-1"></i>Démo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;