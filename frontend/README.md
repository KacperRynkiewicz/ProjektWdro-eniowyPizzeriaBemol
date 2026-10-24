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
  images/               obrazy używane bezpośrednio jako zasoby publiczne
src/
  assets/               grafiki i fonty importowane przez kod
  components/           komponenty UI, każdy we własnym katalogu
  pages/                strony aplikacji
  layouts/              wspólne układy stron
  hooks/                własne hooki React
  context/              współdzielony stan aplikacji
  services/             komunikacja z REST API
  types/                wspólne typy TypeScript
  App.tsx               główny komponent aplikacji
  main.tsx              punkt wejścia aplikacji
  router.tsx            trasy aplikacji
```

Katalog `backend/` jest opisany w głównym README jako część docelowej
architektury, ale nie jest tworzony w ramach prac frontendowych.

## Styling conventions

Each component has its own directory. Keep its implementation and component-specific
styles together, for example:

```text
components/
  Header/
    Header.tsx
  CartDrawer/
    CartDrawer.tsx
    CartDrawer.css
```

Import components explicitly, e.g. `../components/Header/Header`. Shared images,
types, data and state stay in `assets/`, `types/`, `data/` and `context/`.

Use Tailwind utility classes directly in JSX. Do not wrap utility classes in
BEM selectors or use @apply.

- Use responsive and state variants: sm:, md:, lg:, hover: and disabled:.
- Keep complete class names so Tailwind can detect them during builds.
- Extract repeated UI into components such as PizzaCard and BrandLogo.
- Keep the shared Tailwind theme and global defaults in src/index.css.
- Reserve custom CSS for complex effects, such as the layered gradients
  in HomePage.css.
