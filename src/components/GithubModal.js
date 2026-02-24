import React, { useState, useEffect } from 'react';

function GithubModal({ show, onClose }) {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetched, setFetched] = useState(false);

  // Récupère les données une seule fois au chargement de la page (premier affichage)
  useEffect(() => {
    if (!fetched) {
      setLoading(true);
      setFetched(true);
      fetch('https://api.github.com/users/github-johndoe')
        .then((res) => {
          if (!res.ok) throw new Error('Utilisateur GitHub introuvable');
          return res.json();
        })
        .then((data) => {
          setGithubData(data);
          setLoading(false);
        })
        .catch(() => {
          
            // Données de fallback si l'API échoue
          setGithubData({
            login: 'github-john-doe',
            name: 'John DOE',
            bio: 'Développeur Web en formation – Passionné par le Web les nouvelles technologies.',
            public_repos: 15,
            followers: 38,
            following: 25,
            avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
            html_url: 'https://github.com/github-johndoe',
            location: 'Paris, France',
          });
          setLoading(false);
        });
    }
  }, [fetched]);

  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-github"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header modal-github" style={{ backgroundColor: '#24292e', color: 'white' }}>
            <h5 className="modal-title">
              <i className="bi bi-github me-2"></i>Profil GitHub
            </h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Fermer"></button>
          </div>

          <div className="modal-body">
            {loading && (
              <div className="text-center py-4">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Chargement...</span>
                </div>
                <p className="mt-2">Chargement du profil GitHub...</p>
              </div>
            )}

            {!loading && githubData && (
              <div className="text-center">
                <img
                  src={githubData.avatar_url}
                  alt={`Avatar de ${githubData.login}`}
                  className="github-avatar mb-3"
                />
                <h4>{githubData.name || githubData.login}</h4>
                <p className="text-muted">@{githubData.login}</p>
                {githubData.bio && <p className="mb-3">{githubData.bio}</p>}
                {githubData.location && (
                  <p className="text-muted">
                    <i className="bi bi-geo-alt me-1"></i>{githubData.location}
                  </p>
                )}
                <div className="row text-center my-3">
                  <div className="col-4">
                    <h5 className="text-primary mb-0">{githubData.public_repos}</h5>
                    <small className="text-muted">Dépôts</small>
                  </div>
                  <div className="col-4">
                    <h5 className="text-primary mb-0">{githubData.followers}</h5>
                    <small className="text-muted">Abonnés</small>
                  </div>
                  <div className="col-4">
                    <h5 className="text-primary mb-0">{githubData.following}</h5>
                    <small className="text-muted">Abonnements</small>
                  </div>
                </div>
                <a
                  href={githubData.html_url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="btn btn-dark"
                >
                  <i className="bi bi-github me-2"></i>Voir le profil GitHub
                </a>
              </div>
            )}
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubModal;