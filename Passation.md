# Brief de création – Video Ads / Book Launch

## Objet
Créer une vidéo publicitaire courte et percutante pour un livre intitulé :

Hacking, test d’intrusion et Metasploit

Le but est de positionner l’ouvrage comme un guide pratique pour comprendre la sécurité offensive, les vulnérabilités, les méthodes de test d’intrusion et l’usage de Metasploit dans un cadre légitime et encadré.

---

## Positionnement du livre
- Public visé : passionnés de cybersécurité, étudiants, pentesters, professionnels IT, équipes sécurité, responsables système
- Angle marketing : pratique, technique, crédible, sérieux
- Ton : pro, futuriste, cyber, dynamique, sans lourdeur académique
- Message clé : comprendre les failles, tester les défenses, renforcer la sécurité

---

## Message principal
La sécurité ne se résume pas à la prévention : elle passe aussi par la compréhension des vulnérabilités, des méthodes d’attaque et des bonnes pratiques de test d’intrusion.

Le livre propose une approche pédagogique, concrète et encadrée pour découvrir :
- le hacking éthique
- le pentest et les tests d’intrusion
- la logique des vulnérabilités
- l’usage de Metasploit de manière responsable

---

## Direction artistique
- Palette : noir profond, vert cyber, beige métallique, orange chaud
- Style visuel : interfaces techniques, scanlines, effet de terminal, fond animé, particules, éléments 3D subtils
- Typographie : forte, lisible, inspirée des dashboards cyber et de la surveillance
- Mouvements : typewriter, glow, transitions fluides, animations de texte avec impact

---

## Structure de la vidéo
### 1. Hook (0–3s)
Accroche forte sur la menace et la préparation.
Exemple :
« Le vrai hacking, c’est la maîtrise du test d’intrusion. »

### 2. Solution (3–9s)
Présenter le livre comme un guide pratique de cybersécurité. 
Exemple :
« Comprendre les failles avant qu’elles ne soient exploitées. »

### 3. Benefits (9–15s)
Mettre en avant les bénéfices : apprendre les vulnérabilités, maîtriser Metasploit, renforcer la sécurité.

### 4. CTA (15–20s)
Appel à l’action fort pour faire découvrir le livre.
Exemple :
« Découvrir le livre »

---

## Proposition de voix off
« Le hacking n’est pas juste une technique de casse. C’est aussi un moyen de comprendre les failles, de tester les défenses et de renforcer la cybersécurité. Dans ce guide, vous découvrirez les bases du test d’intrusion, les méthodes de sécurité offensive et l’utilisation de Metasploit dans un environnement maîtrisé et encadré. Apprenez à repérer les vulnérabilités avant qu’elles ne soient exploitées. »

---

## Fichiers audio
Les pistes audio sont optionnelles mais recommandées. Le format attendu est compatible avec Remotion via `public/audio/`.

Exemple de configuration :

```json
{
  "audio": {
    "voiceover": { "src": "audio/voix-off-fr.mp3", "volume": 1 },
    "soundEffects": [
      { "src": "audio/impact.mp3", "atSeconds": 0.2, "volume": 0.35 },
      { "src": "audio/transition.mp3", "atSeconds": 9, "volume": 0.25 }
    ]
  }
}
```

---

## Livrables demandés
- 1 spot vertical 9:16
- 1 spot carré 1:1
- durée : 20 secondes
- rendu final en MP4
- animation premium : typewriter, glow, grilles, direction artistique cyber
- support audio facultatif mais fortement recommandé

---

## Commandes
- `npm start` : preview local
- `npm run render:vertical` : export vertical
- `npm run render:square` : export carré

Le projet est prêt pour une version plus premium orientée cybersécurité / hacking / test d’intrusion avec Metasploit.
