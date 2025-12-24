# ActiveTogether2025

Eine Angular-Anwendung zur Verwaltung und Anmeldung für Kurse und Veranstaltungen. Die App ermöglicht es Benutzern, Kurse einzusehen und sich für diese anzumelden.

## Features

- **Dashboard**: Übersicht über alle verfügbaren Kurse und Anmeldungen
- **Kursverwaltung**: Anzeige von Kursen mit Details wie Name, Instruktor, Terminen und Veranstaltungsort
- **Anmeldungen**: Registrierung für Kurse mit persönlichen Daten
- **Veranstaltungsorte**: Verwaltung verschiedener Veranstaltungsorte mit Adressen und ÖV-Anbindung
- **Responsive Design**: Optimiert für Desktop und Mobile mit CSS Grid Layout

## Technologie-Stack

- **Angular 20.2.0**: Frontend-Framework
- **Angular Material 20.0.0**: UI-Komponenten
- **JSON Server 0.17.3**: Mock-Backend für Entwicklung
- **TypeScript 5.9.2**: Programmiersprache
- **CSS Grid**: Layout-Technologie für responsive Tabellen

## Voraussetzungen

- Node.js (Version 18 oder höher)
- npm (Node Package Manager)

## Installation

1. Repository klonen oder herunterladen
2. Abhängigkeiten installieren:

```bash
npm install
```

## Entwicklung

### Development Server starten

Um den lokalen Development Server zu starten, führen Sie aus:

```bash
npm start
```

oder

```bash
ng serve
```

Die Anwendung ist dann unter `http://localhost:4200/` erreichbar. Die Anwendung lädt automatisch neu, wenn Sie Änderungen an den Quelldateien vornehmen.

### Backend Server starten

Für die Entwicklung wird ein JSON Server benötigt. Starten Sie diesen in einem separaten Terminal:

```bash
npm run server
```

Der JSON Server läuft dann auf `http://localhost:5000` und simuliert ein REST-API Backend mit einer Verzögerung von 1000ms.

**Wichtig**: Beide Server (Angular Dev Server und JSON Server) müssen gleichzeitig laufen, damit die Anwendung vollständig funktioniert.

## Projektstruktur

```
src/
├── app/
│   ├── about/              # Über-Seite
│   ├── dashboard/          # Haupt-Dashboard
│   │   ├── add-data/       # Komponente zum Hinzufügen von Anmeldungen
│   │   └── data/           # Komponente zur Anzeige von Daten
│   ├── header/             # Header-Komponente
│   └── shared/             # Geteilte Services und Interfaces
│       ├── backend.ts      # Backend-Service
│       ├── store.ts        # State Management
│       └── Interfaces/     # TypeScript Interfaces
│           ├── Course.ts
│           ├── EventLocation.ts
│           └── Registration.ts
└── assets/                 # Statische Assets
```

## Build

Um das Projekt für die Produktion zu bauen:

```bash
npm run build
```

Die Build-Artefakte werden im `dist/` Verzeichnis gespeichert. Der Production Build optimiert die Anwendung für Performance und Geschwindigkeit.

## Tests

### Unit Tests

Um Unit Tests mit dem [Karma](https://karma-runner.github.io) Test Runner auszuführen:

```bash
npm test
```

oder

```bash
ng test
```

### End-to-End Tests

Für End-to-End (e2e) Tests:

```bash
ng e2e
```

Angular CLI kommt standardmäßig nicht mit einem End-to-End Testing Framework. Sie können eines nach Ihren Bedürfnissen wählen.

## Layout-Technologie

Die Anwendung verwendet **CSS Grid** für die Implementierung der Tabellen-Layouts. CSS Grid wurde gewählt, da es eine moderne, native Lösung ist, die keine zusätzlichen Dependencies erfordert und gleichzeitig die volle Kontrolle über das Layout bietet. Die Implementierung nutzt die Stärken von CSS Grid (präzise Spaltenpositionierung, automatische Row-Erstellung) kombiniert mit Flexbox für ein optimales, responsives Layout.

## Weitere Ressourcen

Für weitere Informationen zur Verwendung von Angular CLI, einschließlich detaillierter Befehlsreferenzen, besuchen Sie die [Angular CLI Übersicht und Befehlsreferenz](https://angular.dev/tools/cli) Seite.

## Lizenz

Siehe LICENSE Datei für Details.
