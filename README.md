# devops-e2e

A simple one-page website project with a GitHub Actions workflow that builds, tests, and generates a downloadable PNG artifact.

## Project contents

- `src/index.html` — simple website page
- `src/styles.css` — page styling
- `src/script.js` — small page script
- `scripts/build.js` — copies source files into `dist/`
- `scripts/generate-image.js` — creates `artifacts/site-image.png`
- `tests/site.test.js` — Jest test for basic HTML content
- `.github/workflows/ci.yml` — CI workflow for GitHub Actions

## How it works

1. GitHub Actions installs dependencies.
2. It runs `npm test` to verify website content.
3. It runs `npm run build` to create `dist/`.
4. It runs `npm run generate-image` to create `artifacts/site-image.png`.
5. It uploads `site-image.png` as a downloadable workflow artifact.

## Local setup

```bash
npm install
npm test
npm run build
npm run generate-image
```

## Artifact output

The GitHub workflow uploads:

- `website-image` → contains `artifacts/site-image.png`
- `website-dist` → contains the built `dist/` website files

## Docker deployment

A local Docker image can run the static website in Docker Desktop.

Build the image:

```powershell
docker build -t devops-e2e-site .
```

Run the container:

```powershell
docker run --rm -p 8080:80 devops-e2e-site
```

Open `http://localhost:8080` in your browser.

## Docker Hub publishing from GitHub Actions

To push the image to Docker Hub from GitHub Actions, set the following repository secrets:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_PASSWORD`

The workflow will push the image to:

`docker.io/<DOCKERHUB_USERNAME>/devops-e2e-site:latest`

This happens only on `push` to the `main` branch.
