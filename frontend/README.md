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

Komponenty używają zwykłego CSS i nazw BEM. Plik stylów znajduje się obok
komponentu i jest importowany bezpośrednio przez niego, np. `PizzaCard.tsx`
oraz `PizzaCard.css`.

- Blok opisuje komponent: `pizza-card`, `site-header`, `menu-section`.
- Element opisuje jego część: `pizza-card__price`, `site-header__link`.
- Modyfikator opisuje wariant: `menu-section__category--active`.
  Zawsze występuje razem z klasą bazową elementu.
- Stany interakcji opisujemy przez `:hover`, `:focus-visible` i `:disabled`.
- Media queries umieszczamy w pliku danego komponentu, od najmniejszych ekranów.

`src/index.css` zawiera wyłącznie ustawienia globalne oraz zmienne kolorów,
typografii i kontenera. Tailwind pozostaje skonfigurowany i dostarcza reset
Preflight; w komponentach nie mieszamy klas BEM z klasami narzędziowymi.

`MenuSection` odpowiada za układ sekcji, a `PizzaCard` za prezentację pojedynczej
pizzy. `BrandLogo` jest osobnym komponentem, który można wykorzystać także
w stopce. Nowe sekcje rozwijamy według tego samego podziału odpowiedzialności.
