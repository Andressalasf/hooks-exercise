# CodeComp - Estructura Inicial de Login (React)

## Descripcion del proyecto
Este repositorio hace parte de CodeComp, una plataforma de aprendizaje progresivo con retroalimentacion automatizada para fortalecer las habilidades de los estudiantes de Ingenieria de Sistemas de la Universidad Francisco de Paula Santander.

En esta etapa, el enfoque del proyecto en React esta en construir la estructura inicial del modulo de autenticacion, especialmente las pantallas base relacionadas con el flujo de acceso y recuperacion de cuenta.


## Integrantes del equipo y aporte realizado

| Integrante | Componente desarrollado/asignado |
|---|---|
| Andres Felipe Salas Nino | RegisterPage |
| Javier Andres Quintero Clavijo | LoginPage |
| Andrey Castilla Contreras | ResetPage y RecoverPage |

## Tecnologias utilizadas
- React 19
- Vite
- JavaScript 
- Tailwind CSS
- CSS
- ESLint
- npm

## Alcance actual del modulo login
En esta fase inicial se implemento la base de interfaz para autenticacion, separando responsabilidades por pagina para facilitar integracion y mantenimiento.

Puntos clave del avance actual:
- RegisterPage: estructura y flujo de registro de usuario nuevo.
- LoginPage: formulario de inicio de sesion.
- ResetPage y RecoverPage: flujo base para recuperacion de acceso.

Esta base permite continuar con validaciones mas estrictas, integracion con backend y manejo real de sesion en siguientes iteraciones.

## Funcionamiento de RegisterPage
**Responsable:** Andres Felipe Salas Nino

La pagina de registro se hizo para que un usuario nuevo pueda crear su cuenta de forma clara y sin enredos.

Asi funciona:
- El usuario llena los datos del formulario de registro.
- La pagina guarda esos datos con estado de React para controlar lo que se escribe en cada campo.
- Se revisan validaciones basicas.
- Si hay errores, se muestran mensajes para que el usuario sepa que debe corregir.
- Si todo esta correcto, se realiza el "registro" y se hace un llamado a un modal para que indique de forma clara los datos registrados por el usuario

Lo que se realizo en esta pagina fue dejar la base funcional del flujo de registro: estructura visual, control de campos, validaciones iniciales y retroalimentacion al usuario.

## Funcionamiento de LoginPage
**Responsable:** Javier Andres Quintero Clavijo

La pagina de inicio de sesion se hizo para que un usuario registrado pueda acceder a su cuenta de forma sencilla y con retroalimentacion clara en cada campo.

Asi funciona:
- El usuario ingresa su correo electronico y su contrasena en el formulario.
- La pagina guarda esos datos con estado de React para controlar lo que se escribe en cada campo.
- Hay un boton para mostrar u ocultar la contrasena mientras se escribe, para evitar errores al ingresar.
- Se revisan validaciones basicas al intentar enviar el formulario.
- Si hay errores, se muestran mensajes debajo de cada campo para que el usuario sepa que debe corregir.
- Si todo esta correcto, se redirige al usuario a la pagina de Dashboard.

Lo que se realizo en esta pagina fue dejar la base funcional del flujo de inicio de sesion: estructura visual, control de campos con React, validaciones iniciales, retroalimentacion al usuario y navegacion hacia el dashboard.

## Estructura del proyecto
La estructura principal del repositorio es la siguiente:

```text
hooks_exercise/
|-- public/
|-- src/
|   |-- assets/
|   |-- loginProject/
|   |   |-- DashboardPage.jsx
|   |   |-- LoginPage.jsx
|   |   `-- RegisterPage.jsx
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
|   |   |-- README.md
|   |   `-- todoStore.js
|   |-- App.css
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- eslint.config.js
|-- postcss.config.js
|-- tailwind.config.js
|-- vite.config.js
`-- package.json
```

## Instrucciones para ejecucion local
1. Clonar o descargar este repositorio.
2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

4. Abrir en el navegador la URL que entrega Vite normalmente http://localhost:5173


