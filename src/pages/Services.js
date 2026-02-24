import React from 'react';

const services = [
  {
    icon: 'bi-laptop',
    title: 'Création de sites web',
    description:
      'Je conçois des sites internet modernes, responsives et optimisés pour tous les supports : desktop, tablette et mobile.',
    color: 'text-primary',
  },
  {
    icon: 'bi-phone',
    title: 'Intégration responsive',
    description:
      'Intégration pixel-perfect de maquettes HTML/CSS avec Bootstrap, garantissant une expérience optimale sur chaque écran.',
    color: 'text-success',
  },
  {
    icon: 'bi-code-slash',
    title: 'Développement React',
    description:
      'Développement d\'applications web dynamiques avec React.js, composants réutilisables et gestion d\'état efficace.',
    color: 'text-info',
  },
  {
    icon: 'bi-search',
    title: 'Optimisation SEO',
    description:
      'Optimisation du référencement naturel : balises méta, structure sémantique, performance et accessibilité.',
    color: 'text-warning',
  },
  {
    icon: 'bi-palette',
    title: 'Design UI/UX',
    description:
      'Conception d\'interfaces intuitives et esthétiques centrées sur l\'expérience utilisateur, avec une attention aux détails.',
    color: 'text-danger',
  },
  {
    icon: 'bi-database',
    title: 'Bases de données',
    description:
      'Création et gestion de bases de données MySQL, développement de requêtes optimisées et intégration avec PHP.',
    color: 'text-secondary',
  },
];

function Services() {
  return (
    <section aria-labelledby="services-title">
      <div className="container">
        <div className="text-center mb-5">
          <h1 id="services-title" className="section-title text-center">
            Mes Services
          </h1>
          <p className="text-muted mt-4 mx-auto" style={{ maxWidth: '600px' }}>
            Je propose une gamme complète de services en développement web pour vous aider
            à concrétiser vos projets numériques.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <div className="card h-100 p-4 border-0 shadow-sm text-center">
                <div className="mb-3">
                  <i className={`bi ${service.icon} ${service.color}`} style={{ fontSize: '3rem' }}></i>
                </div>
                <div className="card-body p-0">
                  <h3 className="card-title h5 mb-3">{service.title}</h3>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;