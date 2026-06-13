# Architecture

NIHON DROP is a dependency-free static web application. It runs entirely in the browser and stores no personal data.

## Main Files

- `index.html` defines the four application screens: home, region selection, quiz, and results.
- `styles.css` contains the base layout, map styling, responsive breakpoints, and feedback states.
- `app.js` contains prefecture metadata, translations, game state, routing, scoring, and map controls.
- `map-data.js` exposes the SVG path data used to draw the 47 prefectures.

## Screen Flow

```text
Home → Region selection → Quiz → Results
          ↑              ↓
          └──── Back ────┘
```

The browser History API mirrors this flow, allowing mouse back/forward buttons and browser navigation controls to move between application screens.

## Game State

The central state object tracks:

- selected language and region
- shuffled prefecture queue
- current question index
- mistakes for the current prefecture
- total clicks and correct answers
- solved prefectures

Each answer updates CSS classes on the relevant SVG path:

- `correct`: solved on the first attempt
- `assisted`: solved after one or more mistakes
- `wrong`: temporary error feedback
- `revealed`: displayed after five mistakes
- `solved`: previously completed prefecture

## Map Navigation

Regional mode calculates the combined SVG bounding box of the active prefectures and updates the SVG `viewBox`. Zoom and drag operations continue to modify the same `viewBox`, preserving sharp vector rendering.

## Deployment

GitHub Pages serves the repository root from the `main` branch. The `.nojekyll` marker prevents unnecessary Jekyll processing.
