# Brief de création – Video Ads / Book Launch

## Objet
Créer une publicité vidéo courte, percutante et premium pour un livre orienté cybersécurité, hacking éthique, test d’intrusion et Metasploit.

Le produit doit être présenté comme un guide pratique, sérieux et crédible, conçu pour aider les profils techniques à comprendre les vulnérabilités, tester les défenses et renforcer la sécurité de manière encadrée.

---

## Positionnement
- Public visé : passionnés de cybersécurité, étudiants, pentesters, profils IT, équipes sécurité, responsables système
- Angle marketing : concret, technique, crédible, premium
- Ton : cyber, futuriste, rigoureux, dynamique, sans lourdeur académique
- Message clé : comprendre les failles, tester les défenses, maîtriser la sécurité offensive dans un cadre légal et responsable

---

## Objectif marketing
La vidéo ne doit pas vendre un livre comme un simple objet. Elle doit transmettre une idée forte :

La vraie sécurité passe par la compréhension des failles, la maîtrise du test d’intrusion et la bonne méthode.

Le livre n’est donc pas seulement un manuel : il est une base de compétences pour penser comme un professionnel de la sécurité.

---

## Direction artistique
- Palette : noir profond, vert cyber, beige clair, orange chaud
- Style visuel : scanlines, interface technique, lignes réseau, HUD, surveillance, glow, particules, profondeur subtile
- Typographie : forte, lisible, moderne, inspirée des dashboards cyber et des systèmes de sécurité
- Mouvements : transitions fortes, flash, blur, impact, morphing de textes, micro-animations sur mots-clés, background animé, rien de statique

---

## Principe de narration : VO comme source de vérité
La vidéo doit être structurée autour de la voix off, et non autour d’un timing arbitraire.

Règle fondamentale :
- la voix off pilote le montage
- chaque phrase correspond à une séquence visuelle
- chaque pause correspond à un changement de plan ou d’effet
- le visuel répond à la phrase parlée, pas à un timing fixé

Le timing global suit la durée réelle de la narration. Si la VO dure 22 secondes, la vidéo doit durer 22 secondes.

---

## Structure narrative recommandée
### 1. Attention / tension
Exemple de rôle : poser le problème ou la menace.

### 2. Intérêt / compréhension
Exemple : expliquer qu’il faut comprendre les vulnérabilités avant qu’elles ne soient exploitées.

### 3. Désir / gain
Exemple : montrer que la maîtrise du pentest et de Metasploit apporte un réel avantage en sécurité.

### 4. Action / CTA
Exemple : “Découvre le livre et apprends la bonne méthode.”

La vidéo doit fonctionner comme une montée de tension narrative, pas comme une suite d’éléments visuels sans lien.

---

## Direction motion design premium
Le motion design doit être pensé comme un système de mise en scène, pas comme des effets isolés.

### Composants recommandés
- fond cyber animé
- scanlines et grille de fond
- particules / points / lignes de signal
- glow sur mots-clés
- transitions flash / wipe / blur
- overlays de texte rejoints au rythme de la VO
- éléments 3D légers ou HUD cyber via @remotion/three
- bruit procédural via @remotion/noise
- audio-reactive motion via @remotion/media-utils
- sous-titres synchronisés via @remotion/captions
- animations vectorielles / lignes via @remotion/paths

### Ce qu’il faut éviter
- machine à écrire longuement comme unique moteur visuel
- scènes trop “template” ou “basic”
- effets trop nombreux sans logique narrative
- visuel qui défile sans lien avec la VO

---

## Proposition de voix off (version narrative premium)
« Le hacking n’est pas juste une technique de casse. C’est avant tout comprendre les failles, identifier les vulnérabilités et tester les défenses avant qu’une attaque ne se produise. Avec le bon cadre, le test d’intrusion devient un outil de sécurité, pas une menace. Ce guide vous aide à comprendre la logique du pentest, à maîtriser Metasploit et à renforcer la cybersécurité avec méthode. Apprenez à repérer les failles avant qu’elles ne soient exploitées. Découvrez le livre et passez du simple intérêt à la vraie maîtrise. »

---

## Format de montage recommandé
- durée totale : alignée sur la VO réelle
- format vertical 9:16
- format carré 1:1
- rendu final en MP4
- audio principal = voix off personnelle
- effets sonores = courts, d’impact, synchronisés sur les moments clés

---

## Fichiers audio
Pour utiliser une voix off personnelle, déposer le fichier MP3 ou WAV dans `public/audio/`, puis pointer la source dans `src/data/currentProduct.json` (`audio.voiceover.src`).

La piste VO doit être la référence pour le timing. Les effets sonores ne doivent pas être dispersés : ils doivent tomber sur les moments de tension, de transition ou de coupure visuelle.

Exemple de structure :

```json
{
  "audio": {
    "voiceover": { "src": "audio/ma-voix.mp3", "volume": 1 },
    "soundEffects": [
      { "src": "audio/impact.wav", "atSeconds": 0.5, "volume": 0.7 },
      { "src": "audio/transition.wav", "atSeconds": 8.4, "volume": 0.45 },
      { "src": "audio/impact.wav", "atSeconds": 14.8, "volume": 0.7 }
    ]
  }
}
```

---

## Livrables
- 1 spot vertical 9:16
- 1 spot carré 1:1
- durée : calibrée sur la voix off réelle
- rendu final MP4
- motion design pro orienté cyber sécurité
- montage narratif entièrement piloté par la voix off

---

## Commandes
- `npm start` : aperçus et preview
- `npm run render:vertical` : export vertical
- `npm run render:square` : export carré

---

## Conclusion
L’objectif n’est pas de faire “une vidéo technique avec du texte animé”.
L’objectif est de faire une publicité immersive, cyber, narrativement forte et visuellement premium, où la voix off guide chaque décision de montage, et où le design soutient la gravité du message.
