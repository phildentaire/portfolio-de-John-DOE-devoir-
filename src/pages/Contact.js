import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    setSubmitted(true);
    setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '' });
  };

  return (
    <section aria-labelledby="contact-title">
      <div className="container">
        <div className="text-center mb-5">
          <h1 id="contact-title" className="section-title text-center">
            Contactez-moi
          </h1>
          <p className="text-muted mt-4 mx-auto" style={{ maxWidth: '600px' }}>
            Vous avez un projet ou une offre d'alternance ? N'hésitez pas à me contacter,
            je vous répondrai dans les plus brefs délais.
          </p>
        </div>

        <div className="row g-5">
          {/*formulaire*/}
          <div className="col-12 col-lg-7">
            <h2 className="h4 mb-4">Envoyez-moi un message</h2>

            {submitted && (
              <div className="alert alert-success mb-4" role="alert">
                <i className="bi bi-check-circle me-2"></i>
                <strong>Message envoyé !</strong> Je vous répondrai dans les plus brefs délais.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <label htmlFor="nom" className="form-label fw-semibold">
                    Nom complet <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    placeholder="Jérome Dutrond"
                    aria-required="true"
                  />
                </div>

                <div className="col-12 col-sm-6">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Adresse e-mail <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jérome.dutrond@email.com"
                    aria-required="true"
                  />
                </div>

                <div className="col-12 col-sm-6">
                  <label htmlFor="telephone" className="form-label fw-semibold">
                    Numéro de téléphone <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    placeholder="+33 6 23 34 66 79"
                    aria-required="true"
                  />
                </div>

                <div className="col-12 col-sm-6">
                  <label htmlFor="sujet" className="form-label fw-semibold">
                    Sujet <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select"
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  >
                    <option value="">Choisir un sujet</option>
                    <option value="alternance">Offre d'alternance</option>
                    <option value="projet">Projet web</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Décrivez votre projet ou votre demande..."
                    aria-required="true"
                  ></textarea>
                </div>

                <div className="col-12">
                  <p className="text-muted small mb-3">
                    <span className="text-danger">*</span> Champs obligatoires
                  </p>
                  <button type="submit" className="btn btn-primary px-5">
                    <i className="bi bi-send me-2"></i>Envoyer le message
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/*Coordonnées*/}
          <div className="col-12 col-lg-5">
            <h2 className="h4 mb-4">Mes coordonnées</h2>

            <div className="mb-4">
              <div className="d-flex align-items-start mb-3 contact-info">
                <i className="bi bi-geo-alt-fill fs-5 me-3 mt-1"></i>
                <div>
                  <strong>Adresse</strong><br />
                  15 Rue de la Pagode<br />
                  75016 Paris, France
                </div>
              </div>

              <div className="d-flex align-items-start mb-3 contact-info">
                <i className="bi bi-telephone-fill fs-5 me-3 mt-1"></i>
                <div>
                  <strong>Téléphone</strong><br />
                  <a href="tel:+33612345678">+33 6 33 34 63 76</a>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4 contact-info">
                <i className="bi bi-envelope-fill fs-5 me-3 mt-1"></i>
                <div>
                  <strong>E-mail</strong><br />
                  <a href="mailto:john.doe@email.com">john.doe@email.com</a>
                </div>
              </div>
            </div>

            {/*Google Map*/}
            <div className="rounded overflow-hidden shadow-sm" style={{ height: '250px' }}>
              <iframe
                title="Localisation de John DOE sur Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.9413836127!2d2.3256169!3d48.8698186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sRue%20de%20la%20Paix%2C%2075002%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;