# Portfolio - Ghilas Berkane

## Déploiement sur NAS personnel

1. Construisez le projet pour la production :
```bash
npm run build
```

2. Le dossier `dist` sera créé contenant les fichiers statiques optimisés.

3. Configuration selon votre NAS :

### Synology NAS
- Activez Web Station dans le Package Center
- Créez un nouveau site web virtuel dans Web Station
- Copiez le contenu du dossier `dist` vers le dossier web de votre NAS :
  ```
  [votre-nas]/web/portfolio/
  ```

### QNAP NAS
- Installez Container Station
- Utilisez l'image Nginx officielle
- Montez le dossier `dist` comme volume :
  ```yaml
  version: '3'
  services:
    portfolio:
      image: nginx:alpine
      ports:
        - "8080:80"
      volumes:
        - ./dist:/usr/share/nginx/html
      restart: unless-stopped
  ```

### Configuration Nginx recommandée
```nginx
server {
    listen 80;
    server_name portfolio.local;
    root /chemin/vers/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Compression Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

## Installation locale pour développement

1. Clonez le projet :
```bash
git clone https://github.com/votre-username/portfolio
cd portfolio
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

## Structure du projet

```
src/
  ├── components/     # Composants React
  ├── assets/        # Images et ressources statiques
  └── App.tsx        # Composant principal
```

## Personnalisation

1. Photo de profil :
   - Placez `profile.png` dans `public/assets/`

2. Liens sociaux :
   - Modifiez les URLs dans `src/components/Hero.tsx`

3. Contenu :
   - `Hero.tsx` : Présentation
   - `About.tsx` : À propos
   - `Projects.tsx` : Projets
   - `Experience.tsx` : Expérience
   - `Contact.tsx` : Contact