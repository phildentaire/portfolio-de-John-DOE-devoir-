import React, { useEffect } from 'react';

function MentionsLegales() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    meta.id = 'meta-robots-noindex';
    document.head.appendChild(meta);

    return () => {
      const existing = document.getElementById('meta-robots-noindex');
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  return (
    <section aria-labelledby="mentions-title">
      <div className="container" style={{ maxWidth: '860px' }}>
        <div className="text-center mb-5">
          <h1 id="mentions-title" className="section-title text-center">
            Mentions légales
          </h1>
          <p className="text-muted mt-4">
            Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique.
          </p>
        </div>

        {/*accordéon Bootstrap*/}
        <div className="accordion shadow-sm" id="mentionsAccordion">

          {/*Éditeur du site*/}
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading-editeur">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-editeur"
                aria-expanded="true"
                aria-controls="collapse-editeur"
              >
                <i className="bi bi-person-badge me-3 text-primary"></i>
                <strong>Éditeur du site</strong>
              </button>
            </h2>
            <div
              id="collapse-editeur"
              className="accordion-collapse collapse show"
              aria-labelledby="heading-editeur"
              data-bs-parent="#mentionsAccordion"
            >
              <div className="accordion-body">
                <dl className="row mb-0">
                  <dt className="col-sm-4">Nom</dt>
                  <dd className="col-sm-8">John DOE</dd>
                  <dt className="col-sm-4">Statut</dt>
                  <dd className="col-sm-8">Particulier – Étudiant en développement web</dd>
                  <dt className="col-sm-4">Adresse</dt>
                  <dd className="col-sm-8">15 Rue de la Pagode, 75016 Paris, France</dd>
                  <dt className="col-sm-4">Téléphone</dt>
                  <dd className="col-sm-8">+33 6 33 34 63 76</dd>
                  <dt className="col-sm-4">E-mail</dt>
                  <dd className="col-sm-8">
                    <a href="mailto:john.doe@email.com">john.doe@email.com</a>
                  </dd>
                  <dt className="col-sm-4">Formation</dt>
                  <dd className="col-sm-8">CEF – Centre Européen de Formation</dd>
                </dl>
              </div>
            </div>
          </div>

          {/*hébergeur du site*/}
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading-hebergeur">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-hebergeur"
                aria-expanded="false"
                aria-controls="collapse-hebergeur"
              >
                <i className="bi bi-server me-3 text-success"></i>
                <strong>Hébergeur du site</strong>
              </button>
            </h2>
            <div
              id="collapse-hebergeur"
              className="accordion-collapse collapse"
              aria-labelledby="heading-hebergeur"
              data-bs-parent="#mentionsAccordion"
            >
              <div className="accordion-body">
                <dl className="row mb-0">
                  <dt className="col-sm-4">Hébergeur</dt>
                  <dd className="col-sm-8">GitHub Pages</dd>
                  <dt className="col-sm-4">Société</dt>
                  <dd className="col-sm-8">GitHub, Inc.</dd>
                  <dt className="col-sm-4">Adresse</dt>
                  <dd className="col-sm-8">88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis</dd>
                  <dt className="col-sm-4">Site web</dt>
                  <dd className="col-sm-8">
                    <a
                      href="https://pages.github.com"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      https://pages.github.com
                    </a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>

          {/*propriété intellectuelle*/}
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading-propriete">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-propriete"
                aria-expanded="false"
                aria-controls="collapse-propriete"
              >
                <i className="bi bi-shield-lock me-3 text-warning"></i>
                <strong>Propriété intellectuelle</strong>
              </button>
            </h2>
            <div
              id="collapse-propriete"
              className="accordion-collapse collapse"
              aria-labelledby="heading-propriete"
              data-bs-parent="#mentionsAccordion"
            >
              <div className="accordion-body">
                <p>
                  L'ensemble du contenu de ce site (textes, codes, structure) est la propriété de
                  John DOE, sauf mention contraire. Toute reproduction est interdite sans autorisation
                  préalable.
                </p>
                <p className="mb-0">
                  Ce site a été développé dans le cadre d'un projet de formation au CEF
                  (Centre Européen de Formation).
                </p>
              </div>
            </div>
          </div>

          {/*crédits*/}
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading-credits">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-credits"
                aria-expanded="false"
                aria-controls="collapse-credits"
              >
                <i className="bi bi-star me-3 text-info"></i>
                <strong>Crédits</strong>
              </button>
            </h2>
            <div
              id="collapse-credits"
              className="accordion-collapse collapse"
              aria-labelledby="heading-credits"
              data-bs-parent="#mentionsAccordion"
            >
              <div className="accordion-body">
                <h4 className="h6 mb-3">Images</h4>
                <p>
                  Les images utilisées sur ce site sont des images libres de droits, issues du site{' '}
                  <a
                    href="https://pixabay.com"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    Pixabay
                  </a>{' '}
                  (licence Pixabay, utilisation gratuite à des fins personnelles et commerciales).
                </p>

                <h4 className="h6 mb-3">Favicon</h4>
                <p>
                  Le favicon est disponible et téléchargeable sur le site{' '}
                  <a
                    href="https://www.flaticon.com"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    Flaticon
                  </a>
                  .
                </p>

                <h4 className="h6 mb-3">Technologies utilisées</h4>
                <ul className="mb-0">
                  <li>
                    <strong>React.js</strong> –{' '}
                    <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer nofollow">
                      reactjs.org
                    </a>
                  </li>
                  <li>
                    <strong>Bootstrap 5</strong> –{' '}
                    <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer nofollow">
                      getbootstrap.com
                    </a>
                  </li>
                  <li>
                    <strong>Bootstrap Icons</strong> –{' '}
                    <a href="https://icons.getbootstrap.com" target="_blank" rel="noopener noreferrer nofollow">
                      icons.getbootstrap.com
                    </a>
                  </li>
                  <li>
                    <strong>React Router</strong> –{' '}
                    <a href="https://reactrouter.com" target="_blank" rel="noopener noreferrer nofollow">
                      reactrouter.com
                    </a>
                  </li>
                  <li>
                    <strong>Google Fonts</strong> – Police Nunito Sans
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/*données personnelles*/}
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading-donnees">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-donnees"
                aria-expanded="false"
                aria-controls="collapse-donnees"
              >
                <i className="bi bi-lock me-3 text-danger"></i>
                <strong>Données personnelles (RGPD)</strong>
              </button>
            </h2>
            <div
              id="collapse-donnees"
              className="accordion-collapse collapse"
              aria-labelledby="heading-donnees"
              data-bs-parent="#mentionsAccordion"
            >
              <div className="accordion-body">
                <p>
                  Ce site ne collecte pas de données personnelles à des fins commerciales. Les
                  informations saisies dans le formulaire de contact sont uniquement utilisées pour
                  répondre à votre demande.
                </p>
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD – UE 2016/679),
                  vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
                </p>
                <p className="mb-0">
                  Pour toute demande, contactez :{' '}
                  <a href="mailto:john.doe@email.com">john.doe@email.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MentionsLegales;