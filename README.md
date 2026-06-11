# CodeComp - Módulos adicionales (React + Firebase)

URL pública: https://code-comp-e73c7.web.app/

## Descripcion del proyecto
Este repositorio hace parte de CodeComp, una plataforma de aprendizaje progresivo con retroalimentacion automatizada para fortalecer las habilidades de los estudiantes de Ingenieria de Sistemas de la Universidad Francisco de Paula Santander.

Los módulos adicionales implementan los servicios de Torneos, Grupos y Retos Diarios en la plataforma, con una funcionalidad CRUD completa (Create, Read, Update, Delete), además se añade un generador de PDF para el módulo de Usuarios y una página de inicio concreta.

## Integrantes del equipo y aportes realizados

| Integrante | Aportes |
|---|---|
| Andres Felipe Salas Nino | TournamentsPage, Generador de PDF para reportes historial de Usuario |
| Javier Andres Quintero Clavijo | HomePage, GruposPage |
| Andrey Castilla Contreras | DailyChallengesPage, documentación |


## Tecnologias utilizadas
- React 19
- Vite
- JavaScript
- Tailwind CSS
- CSS
- ESLint
- npm
- Firebase (Authentication + Firestore)
- React Router DOM v7

## Alcance actual de módulos adicionales

Ademas del módulo de autenticacion, se han desarrollado los siguientes módulos funcionales:

- **Módulo de Grupos**: creacion y gestion de grupos de estudiantes con roles definidos para torneos.
- **Módulo de Retos Diarios**: creacion y gestion de desafios de programacion con diferentes niveles de dificultad.
- **Módulo de Torneos**: organizacion de competencias con sistema de registro de equipos y gestion de fechas.
- **Página de Inicio**: interfaz moderna de bienvenida con animaciones.
- **Generador de PDF**: descarga de reportes completos del historial de sesiones en formato profesional.



## Estructura del proyecto
La estructura principal del repositorio es la siguiente:

```text
hooks_exercise/
|-- public/
|-- src/
|   |-- assets/
|   |-- firebase/
|   |   `-- firebaseConfig.js
|   |-- loginProject/
|   |   |-- CompleteProfilePage.jsx
|   |   |-- DailyChallengesPage.jsx
|   |   |-- DashboardPage.jsx
|   |   |-- GruposPage.jsx
|   |   |-- gruposService.js
|   |   |-- HomePage.jsx
|   |   |-- LoginPage.jsx
|   |   |-- RecoverPage.jsx
|   |   |-- RegisterPage.jsx
|   |   |-- ResetPage.jsx
|   |   |-- TournamentsPage.jsx
|   |   |-- UserHistoryPage.jsx
|   |   |-- registerService.js
|   |   |-- README_Login_EmailPassword.md
|   |   |-- README_Login_Facebook.md
|   |   |-- README_Login_Github.md
|   |   |-- README_Login_Google.md
|   |-- playground/
|   |   |-- HomeHooks.jsx
|   |   |-- UseActionStateExample.jsx
|   |   |-- UseCallbackExample.jsx
|   |   |-- UseContextExample.jsx
|   |   |-- UseDebugValueExample.jsx
|   |   |-- UseDeferredValueExample.jsx
|   |   |-- UseEffectEventExample.jsx
|   |   |-- UseEffectExample.jsx
|   |   |-- UseIdExample.jsx
|   |   |-- UseImperativeHandleExample.jsx
|   |   |-- UseInsertionEffectExample.jsx
|   |   |-- UseLayoutEffectExample.jsx
|   |   |-- UseMemoExample.jsx
|   |   |-- UseOptimisticExample.jsx
|   |   |-- UseReducerExample.jsx
|   |   |-- UseRefExample.jsx
|   |   |-- UseStateExample.jsx
|   |   |-- UseSyncExternalStoreExample.jsx
|   |   |-- UseTransitionExample.jsx
|   |   |-- README_HOOKS.md
|   |   `-- todoStore.js
|   |-- App.css
|   |-- App.jsx
|   |-- config.js
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- eslint.config.js
|-- postcss.config.js
|-- tailwind.config.js
|-- vite.config.js
|-- package.json
`-- README.md
```


## Instrucciones para ejecucion local
1. Clonar o descargar este repositorio.
2. Instalar dependencias:

```bash
npm install
```

3. Configurar las variables de entorno de Firebase. Crear un archivo `.env` en la raiz del proyecto con las claves del proyecto de Firebase:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir en el navegador la URL que entrega Vite, normalmente http://localhost:5173
