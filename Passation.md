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

## Principe de narration visé : VO comme source de vérité
La vidéo doit être structurée autour de la voix off, et non autour d’un timing arbitraire.

Règle fondamentale :
- la voix off pilote le montage
- chaque phrase correspond à une séquence visuelle
- chaque pause correspond à un changement de plan ou d’effet
- le visuel répond à la phrase parlée, pas à un timing fixé

À terme, le timing global doit suivre la durée réelle de la narration. Si la VO dure 22 secondes, la vidéo doit durer 22 secondes.

**État actuel au 6 octobre 2026 :** cet objectif n’est pas encore entièrement implémenté. La composition Remotion est actuellement fixée à 22 secondes et le template répartit ce temps en quatre durées de scène prédéfinies. Il n’y a pas encore de détection automatique des phrases ou des silences dans la voix off.

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

### Direction visuelle et composants
- fond cyber animé
- scanlines et grille de fond
- particules / points / lignes de signal
- glow sur mots-clés
- transitions flash / wipe / blur
- overlays de texte rejoints au rythme de la VO
- éléments 3D légers et HUD cyber via `@remotion/three` (intégré)
- bruit procédural via `@remotion/noise` (à évaluer, non intégré)
- audio-reactive motion via `@remotion/media-utils` (à évaluer, non intégré)
- sous-titres synchronisés via `@remotion/captions` (à évaluer, non intégré)
- animations vectorielles / lignes via `@remotion/paths` (à évaluer, non intégré)
- composants d’interface au style inspiré de shadcn/ui, réalisés en styles React/CSS; la bibliothèque shadcn/ui n’est pas installée

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

## Livrables visés
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

## Conclusion créative
L’objectif n’est pas de faire “une vidéo technique avec du texte animé”.
L’objectif est de faire une publicité immersive, cyber, narrativement forte et visuellement premium, où la voix off guide chaque décision de montage, et où le design soutient la gravité du message.

---

## Passation de fin de journée — 6 octobre 2026

### Réalisé aujourd’hui
- Refonte des scènes Hook, Solution, Benefits et CTA avec fonds cyber animés, HUD, éléments 3D et mouvements plus affirmés.
- CTA retravaillé avec un bouton plus visible et des éléments graphiques de signal.
- Ajout de l’option `whiteSpace` à `TypewriterText` et réglage du titre du CTA pour rester sur une ligne.
- Brief et contenu produit recentrés sur le livre de hacking éthique, le pentest et Metasploit.
- Export vertical récent généré dans `out/vertical.mp4` (environ 14,5 MB). Le typecheck `npx tsc --noEmit` a réussi.

### État technique
- Composition Remotion : 30 fps, 1080 × 1920 vertical et 1080 × 1080 carré.
- Durée déclarée dans `src/Root.tsx` : 22 secondes.
- Durées de scènes dans `src/templates/DynamicAdTemplate.tsx` : 5,8 s / 6,2 s / 7,2 s / 2,8 s, soit 22 s au total.
- Voix off et effets sonores configurés depuis `src/data/currentProduct.json`.
- `@remotion/three` et Three.js sont présents. Le warning de dépréciation `THREE.Clock` n’a pas empêché l’export vertical.
- Le fichier `out/square.mp4` existe, mais aucun nouvel export carré n’a été vérifié aujourd’hui après les dernières modifications visuelles.

### À reprendre
1. Mesurer la durée réelle de la voix off avec un outil disponible dans l’environnement (FFmpeg/ffprobe n’y était pas installé lors de la vérification).
2. Faire dépendre la durée des compositions et des scènes de la durée réelle de la VO; implémenter ensuite un découpage par phrases/silences ou fournir des timecodes éditables.
3. Vérifier le cadrage du texte sur une ligne dans les deux formats; `nowrap` peut déborder si le titre est plus large que le cadre.
4. Régénérer et contrôler les exports vertical et carré après la prochaine passe.

### Commandes de reprise
- `npx tsc --noEmit` : vérification TypeScript
- `npm run render:vertical -- --overwrite` : rendu vertical
- `npm run render:square -- --overwrite` : rendu carré

La session du 6 octobre se termine avec un rendu vertical exporté et un style visuel amélioré. Le montage réellement synchronisé phrase par phrase avec la VO reste le principal chantier ouvert; ne pas le présenter comme déjà livré.
