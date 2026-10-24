# Pizzeria Bemol — frontend

Frontend aplikacji Pizzerii Bemol, zbudowany w React i TypeScript.

## Technologie

- Vite
- React
- Tailwind CSS
- React Router

## Uruchomienie

```bash
npm install
npm run dev
```

## Walidacja

```bash
npm run lint
npm run build
```

## Struktura

```text
public/
  images/              obrazy używane bezpośrednio jako zasoby publiczne
src/
  components/           współdzielone komponenty UI (dodamy po analizie makiety)
  pages/                strony aplikacji
  App.tsx               konfiguracja dostawcy routingu
  router.tsx            trasy aplikacji
  index.css             globalne style i import Tailwind CSS
  main.tsx              punkt wejścia aplikacji
```
