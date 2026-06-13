# Contributing

Small improvements, bug fixes, translation corrections, and accessibility enhancements are welcome.

## Local Setup

```bash
git clone https://github.com/ASSIGNITER/nihon-drop.git
cd nihon-drop
python -m http.server 8000
```

Open `http://localhost:8000` and test changes in both Russian and English.

## Before Submitting

- Keep the project dependency-free unless a dependency provides clear value.
- Verify all 47 prefectures remain clickable.
- Test all-Japan mode and at least one regional mode.
- Test zoom, drag, browser back/forward navigation, and the reference drawer.
- Check desktop and mobile layouts.
- Preserve attribution for third-party map assets.

## Code Style

- Use plain JavaScript, HTML, and CSS.
- Keep UI strings in the translation object when possible.
- Prefer focused changes over broad rewrites.
- Use concise comments only for non-obvious behavior.
