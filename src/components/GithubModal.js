import React, { useState, useEffect } from 'react';

function GithubModal({ show, onClose }) {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Utilisateur GitHub introuvable');
        }
        return res.json();
      })
      .then((data) => {
        setGithubData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

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

          <div className="modal-header bg-dark text-white">
            <h5 className="modal-title">
              <i className="bi bi-github me-2"></i>Profil GitHub
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body">

            {loading && (
              <div className="text-center py-4">
                <div className="spinner-border text-primary"></div>
                <p className="mt-2">Chargement...</p>
              </div>
            )}

            {error && (
              <div className="alert alert-danger text-center">
                {error}
              </div>
            )}

            {!loading && githubData && (
              <div className="text-center">
                <img
                  src={githubData.avatar_url}
                  alt={`Avatar de ${githubData.login}`}
                  className="rounded-circle mb-3"
                  width="120"
                />
                <h4>{githubData.name || githubData.login}</h4>
                <p className="text-muted">@{githubData.login}</p>
                {githubData.bio && <p>{githubData.bio}</p>}

                <div className="row text-center my-3">
                  <div className="col-4">
                    <strong>{githubData.public_repos}</strong>
                    <div>Dépôts</div>
                  </div>
                  <div className="col-4">
                    <strong>{githubData.followers}</strong>
                    <div>Abonnés</div>
                  </div>
                  <div className="col-4">
                    <strong>{githubData.following}</strong>
                    <div>Abonnements</div>
                  </div>
                </div>

                <a
                  href={githubData.html_url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="btn btn-dark"
                >
                  Voir le profil GitHub
                </a>
              </div>
            )}

          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Fermer
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default GithubModal;