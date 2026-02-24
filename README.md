
# Portfolio – John DOE
## Développeur Web en alternance

Portfolio développé avec **React.js** et **Bootstrap 5** dans le cadre d'une formation au CEF.

---

## Lancer le projet

### Prérequis
- Node.js (v16+)
- npm ou yarn

### Installation

```bash
# Cloner repository
git clone https://github.com/votre-compte/johndoe-portfolio.git
cd johndoe-portfolio

# Installer les dépendances
npm install

# Lancer en développement
npm start

# Build de production
npm run build
```

Le site sera accessible sur [http://localhost:3001](http://localhost:3001)

---

## 📁 Structure du projet

```
src/
|── screenshots/images.jpg #images
|── assets/images.jpg...    #images
├── components/
│   ├── Header.js          # Navbar Bootstrap + NavLink active
│   ├── Footer.js          # Footer 3 colonnes + réseaux sociaux
│   └── GithubModal.js     # Modale profil GitHub (useEffect)
├── pages/
│   ├── Home.js            # Page accueil : Hero + À propos + Skills
│   ├── Services.js        # Page services : Cards Bootstrap
│   ├── Portfolio.js       # Page réalisations : 8 projets en Cards
│   ├── Contact.js         # Page contact : Formulaire + Coordonnées + Google Map
│   └── MentionsLegales.js # Page mentions légales : Accordéon + noindex
├── App.js                 # Router principal (React Router v6)
├── index.js               # Point d'entrée React
└── index.css              # Styles personnalisés (effets hover, transitions...)
public/
└── index.html             # HTML avec meta SEO + Bootstrap CDN
```

---

## Fonctionnalités

### Pages
- **Accueil** – Hero plein écran, section À propos, progress bars des compétences
- **Services** – 6 services présentés en cards Bootstrap (hover avec ombre + fond)
- **Portfolio** – 7 projets en cards avec tags technologiques, liens GitHub et démo
- **Contact** – Formulaire complet (tous champs obligatoires) + coordonnées + Google Map
- **Mentions légales** – Accordéon Bootstrap + balise `noindex` dynamique

### Composants globaux
- **Header** – Logo, navigation responsive (hamburger mobile), liens actifs en gras + soulignés (NavLink)
- **Footer** – 3 colonnes égales, icônes réseaux sociaux, liens `nofollow`, ouverture nouvel onglet
- **Modal GitHub** – Données récupérées une seule fois via `useEffect`, données de fallback en cas d'erreur API

### Effets CSS
- Menu : lien actif en **gras + souligné**, survol souligné
- Cards : fond `#efefef` + ombre au survol
- Boutons : assombrissement au survol
- Footer : icônes sociales blanches au survol, liens en gras au survol
- Transitions CSS sur tous les éléments interactifs

### SEO
- Balises `<meta>` complètes (description, keywords, author, robots)
- Balise `noindex, nofollow` sur la page Mentions légales (ajoutée dynamiquement)
- Liens externes avec `rel="noopener noreferrer nofollow"`
- Attributs `alt` sur toutes les images
- Attributs `aria-*` pour l'accessibilité
- Police Google Fonts : **Nunito Sans** (400 / 600)

---

## 🛠️ Technologies

| Technologie | Version |
|---|---|
| React.js | 18.2 |
| React Router DOM | 6.x |
| Bootstrap | 5.3 |
| Bootstrap Icons | 1.11 |
| Google Fonts | Nunito Sans |

---

## Charte graphique

- **Police** : Nunito Sans (400 corps, 600 titres/strong)
- **Couleurs** : Palette Bootstrap 5 native
- **Icônes** : Bootstrap Icons
- **Images** : Pixabay (libres de droits)
- **Favicon** : Flaticon

---

## Issues GitHub suggérées

Pour organiser le projet avec GitHub Issues :

1. `[ARBORESCENCE DU PROJET]` Initialisation du projet Create React App + dépendances + gestion/création des fichiers
2. `[APP]` Gestion de App.js
3. `[COMPOSANT]` Header + Footer + Modale GitHub – API + useEffect 
4. `[INDEX]` Gestion des fichiers index (css avec:Effets hover + transitions, HTML(Balises meta + accessibilité) et JavaScript)
5. `[PAGE]` Home – Hero + À propos + Skills
6. `[PAGE]` Portfolio – Cards projets et Déploiement GitHub Pages
7. `[PAGE]` Services – Cards 
8. `[PAGE]` Contact – Formulaire + Map
9. `[PAGE]` Mentions légales – Accordéon + noindex
10. `[MODIFS]` Corrections ,vérifications et ajouts des screenshots demandés avec Snapcode et W3c (seulement pour les fichiers CSS et HTML le JavaScript n'étant pas prit en compte)
11. `[README]` Cheminement des étapes du projet

---

## Auteur

**John DOE** – Développeur Web en formation  
📧 john.doe@email.com  
🔗 [GitHub](https://github.com/github-johndoe) | [LinkedIn](https://linkedin.com/in/johndoe)