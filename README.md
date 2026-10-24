Skład grupy projektowej:
Maksym Shavryhin 78949
Kacper Rynkiewicz 81453
Mateusz Tołodziecki 78665
Rafał Bojarski 78210

*** [Projekt w Figmie] (https://www.figma.com/design/LELbMV7Jcc9r3hWJ3tZI96/Untitled?node-id=0-1&t=y4DeNav8WFrnI92P-1)

Dokumentacja Projektu: Responsywna Platforma Internetowa restauracji oparta na React.js i Node.js z Interaktywnym Menu, Systemem Zamówień Online oraz Panelem Administracyjnym
1. Cel Projektu 
Stworzenie nowoczesnej, responsywnej witryny internetowej dla Pizzerii Bemol, umożliwiającej przeglądanie menu, składanie zamówień online oraz budowanie wizerunku marki poprzez integrację z mediami społecznościowymi. 
2. Stack Technologiczny 
Projekt opiera się na nowoczesnych technologiach webowych, zapewniających szybkość działania i łatwość utrzymania. Komponent 	Technologia 	Zastosowanie 
Frontend 	React.js 	Budowa interaktywnego interfejsu użytkownika. 
Struktura 	HTML5 	Semantyczna struktura treści. 
Style 	Tailwind CSS / CSS3 	Stylowanie, responsywność (RWD). 
State Management 	Redux / Context API 	Zarządzanie stanem koszyka i zamówienia. 
Backend 	Node.js (Express) 	Logika serwerowa i obsługa zamówień. 
Baza danych 	MongoDB / PostgreSQL 	Przechowywanie danych o menu i klientach. 

3. Funkcjonalność Serwisu 
Dla Klienta: 
•	Menu Interaktywne: Podział na kategorie (Pizze, Pasta, Napoje), filtrowanie składników, wybór rozmiarów. 
•	System Koszyka: Dodawanie produktów, modyfikacja ilości, przeliczanie ceny w czasie rzeczywistym. 
•	Zamówienia Online: Formularz dostawy, wybór metody płatności (Blik, karta, gotówka przy odbiorze). 
•	Konta Użytkowników: Historia zamówień, zapisywanie ulubionych kompozycji. 
•	Geolokalizacja: Sprawdzanie, czy adres klienta znajduje się w strefie dostawy. 

Dla Administratora (Pizzerii): 
•	Panel Zarządzania Menu: Możliwość edycji cen, dodawania nowych dań "dnia". 
•	System Powiadomień: Odbieranie zamówień w czasie rzeczywistym. 
•	Status Zamówienia: Możliwość zmiany statusu (w przygotowaniu, wysłane, dostarczone). 

4. Komunikacja Zespołu 
Wszelkie ustalenia, wymiana plików oraz codzienna komunikacja odbywają się na dedykowanym serwerze: 
•	Platforma: Discord 
	Kanały: #ogólny – bieżące rozmowy i ogłoszenia. 
	#frontend – dyskusje o UI/UX i React. 
	#backend – bazy danych i API. 
	#zasoby – logotypy, zdjęcia potraw, teksty. 
	

5. Architektura Informacji (Sitemap) 
1.	Strona Główna: Hero section z aktualnymi promocjami. 
2.	Menu: Pełna lista produktów z funkcją "Dodaj do koszyka". 
3.	O nas: Historia Pizzerii Bemol i galeria lokalu. 
4.	Kontakt: Mapa dojazdu, formularz kontaktowy, godziny otwarcia. 
5.	Koszyk/Checkout: Finalizacja zamówienia. 

Uwaga Techniczna: Strona musi być w pełni zoptymalizowana pod urządzenia mobilne, ponieważ statystycznie ponad 70% zamówień pizzy odbywa się za pośrednictwem smartfonów.

Odbiorca strony: Pizzeria Bemol, Kościuszki 19, 83-300 Kartuzy
# ProjektWdro-eniowyPizzeriaBemol

## 6. Struktura projektu

Frontend rozwijamy w katalogu `frontend/`. Katalog `backend/` jest częścią
docelowej architektury, ale będzie tworzony i rozwijany przez pozostałych
członków zespołu.

```text
ProjektWdrożeniowyPizzeriaBemol/
├── frontend/
│   ├── public/
│   │   └── images/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── services/
│   │   ├── types/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── router.tsx
│   ├── package.json
│   ├── index.html
│   └── vite.config.ts
├── backend/                  # planowany; nie jest częścią frontendu
│   └── src/
│       ├── controllers/
│       ├── routes/
│       ├── models/
│       ├── middleware/
│       ├── services/
│       └── app.ts
├── .gitignore
└── README.md
```

`backend/` jest opisany wyłącznie jako planowana część repozytorium — katalog
ani jego pliki nie są tworzone w ramach prac frontendowych.

### Odpowiedzialność katalogów frontendu

- `assets/` — zasoby importowane przez kod aplikacji, takie jak grafiki i fonty.
- `components/` — współdzielone komponenty interfejsu.
- `pages/` — strony aplikacji, w tym strona główna.
- `layouts/` — wspólne układy stron.
- `hooks/` — własne hooki React.
- `context/` — współdzielony stan udostępniany przez React Context.
- `services/` — komunikacja z REST API.
- `types/` — wspólne typy TypeScript.
- `public/images/` — obrazy używane jako statyczne zasoby.

### Uruchomienie frontendu

```bash
cd frontend
npm install
npm run dev
```
