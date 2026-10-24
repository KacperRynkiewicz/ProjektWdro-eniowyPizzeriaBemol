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
  components/           współdzielone komponenty UI
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

## Konwencja stylów

Komponenty używają Tailwind CSS i nazw BEM. Plik stylów znajduje się obok
komponentu i jest importowany bezpośrednio przez niego, np. `PizzaCard.tsx`
oraz `PizzaCard.css`.

- Blok opisuje komponent: `pizza-card`, `site-header`, `menu-section`.
- Element opisuje jego część: `pizza-card__price`, `site-header__link`.
- Modyfikator opisuje wariant: `menu-section__category--active`.
  Zawsze występuje razem z klasą bazową elementu.
- Stany interakcji opisujemy przez `:hover`, `:focus-visible` i `:disabled`.
- Media queries umieszczamy w pliku danego komponentu, od najmniejszych ekranów.

W JSX stosujemy czytelne nazwy BEM. W plikach CSS składamy style z narzędzi
Tailwind przez `@apply`. Każdy plik komponentu zaczyna się od
`@reference "../index.css"`, aby korzystać ze wspólnej konfiguracji bez
powielania resetu Preflight. Własny CSS zostawiamy dla nietypowych efektów,
takich jak wielowarstwowe gradienty.

```css
@reference "../index.css";

.menu-section__container {
  @apply mx-auto max-w-(--container-width);
}

.menu-section__category--active {
  @apply bg-surface-dark text-white;
}
```

`src/index.css` zawiera globalne ustawienia i motyw Tailwind (`@theme`): kolory
oraz font nagłówków. Dzięki temu używamy nazw takich jak `bg-cream`,
`text-surface-dark` i `font-display` zamiast powtarzać wartości kolorów i fontów.
Szerokość kontenera i responsywne odstępy pozostają wspólnymi zmiennymi CSS.

`MenuSection` odpowiada za układ sekcji, a `PizzaCard` za prezentację pojedynczej
pizzy. `BrandLogo` jest osobnym komponentem, który można wykorzystać także
w stopce. Nowe sekcje rozwijamy według tego samego podziału odpowiedzialności.
