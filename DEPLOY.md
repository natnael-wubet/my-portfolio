# Deployment Instructions

## Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Set public directory to portfolio
firebase deploy
```

## Netlify
Drag and drop the `portfolio` folder to [netlify.com/drop](https://app.netlify.com/drop)

## Vercel
```bash
npm i -g vercel
cd portfolio
vercel
```

## GitHub Pages
Push to GitHub and enable Pages from the portfolio folder or root.

## Local Preview
```bash
cd portfolio
python3 -m http.server 8000
# Visit http://localhost:8000
```
