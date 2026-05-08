# CodeComp - Modulo de Autenticacion (React + Firebase)

## Descripcion del proyecto
Este repositorio hace parte de CodeComp, una plataforma de aprendizaje progresivo con retroalimentacion automatizada para fortalecer las habilidades de los estudiantes de Ingenieria de Sistemas de la Universidad Francisco de Paula Santander.

El modulo de autenticacion ha evolucionado de una estructura base de interfaz hacia una implementacion funcional completa con Firebase Authentication, Firestore y soporte para multiples proveedores de OAuth (Google, GitHub y Facebook). Los usuarios pueden registrarse, iniciar sesion, recuperar su contrasena y autenticarse con sus cuentas de redes sociales.


## Integrantes del equipo y aportes realizados

| Integrante | Aportes |
|---|---|
| Andres Felipe Salas Nino | RegisterPage, autenticacion con GitHub, vista Historial de Usuarios |
| Javier Andres Quintero Clavijo | LoginPage, autenticacion con Google, Dashboard con foto de perfil |
| Andrey Castilla Contreras | RecoverPage, ResetPage, autenticacion con Facebook |


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


## Alcance actual del modulo de autenticacion

El modulo cuenta con un flujo de autenticacion completo integrado con Firebase:

- **Registro de usuario**: formulario con validaciones y persistencia en Firestore.
- **Inicio de sesion**: con correo/contrasena y con proveedores OAuth.
- **Autenticacion con Google**: inicio de sesion y registro completo con foto de perfil.
- **Autenticacion con GitHub**: inicio de sesion y registro con datos del perfil de GitHub.
- **Autenticacion con Facebook**: inicio de sesion y registro con datos del perfil de Facebook.
- **Recuperacion de contrasena**: envio de correo real mediante Firebase.
- **Cambio de contrasena**: flujo protegido con validaciones.
- **Dashboard personalizado**: muestra nombre, foto de perfil y datos del estudiante.
- **Historial de Usuarios**: vista con el registro de sesiones y actividad del usuario.
- **Vinculacion de cuentas**: si un correo ya existe con otro proveedor, se ofrece vinculacion automatica.


## Funcionamiento de RegisterPage
**Responsable:** Andres Felipe Salas Nino

La pagina de registro se hizo para que un usuario nuevo pueda crear su cuenta de forma clara y sin enredos.

Asi funciona:
- El usuario llena los datos del formulario de registro.
- La pagina guarda esos datos con estado de React para controlar lo que se escribe en cada campo.
- Se revisan validaciones basicas.
- Si hay errores, se muestran mensajes para que el usuario sepa que debe corregir.
- Si todo esta correcto, se realiza el registro real en Firebase Authentication y se guarda el perfil en Firestore.


## Funcionamiento de LoginPage
**Responsable:** Javier Andres Quintero Clavijo

La pagina de inicio de sesion permite al usuario autenticarse con correo/contrasena o mediante proveedores OAuth (Google, GitHub, Facebook).

Asi funciona:
- El usuario ingresa su correo electronico y su contrasena, o elige un proveedor OAuth.
- Se aplican validaciones antes de intentar el inicio de sesion.
- Hay un boton para mostrar u ocultar la contrasena mientras se escribe.
- Si las credenciales son incorrectas, se muestra el error correspondiente.
- Si el correo ya esta registrado con otro proveedor, se ofrece la vinculacion de cuentas.
- Si todo esta correcto, se redirige al Dashboard.


## Funcionamiento de RecoverPage
**Responsable:** Andrey Castilla Contreras

La pagina de recuperacion de contrasena permite al usuario solicitar un correo de restablecimiento a traves de Firebase.

Asi funciona:
- El usuario ingresa su correo electronico en el formulario.
- Se revisan validaciones basicas antes de enviar.
- Firebase envia el correo de recuperacion real al usuario.
- Si hay errores (correo no registrado, formato invalido), se muestran mensajes claros.
- Si el envio es exitoso, se muestra una confirmacion al usuario.


## Funcionamiento de ResetPage
**Responsable:** Andrey Castilla Contreras

La pagina de cambio de contrasena permite al usuario establecer una nueva contrasena con validaciones de seguridad.

Asi funciona:
- El usuario ingresa su contrasena actual y la nueva contrasena.
- Se revisan validaciones de longitud y caracter especial en la nueva contrasena.
- Se valida que la nueva contrasena sea diferente a la actual.
- Hay botones para mostrar u ocultar cada campo de contrasena.
- Si hay errores, se muestran mensajes debajo de cada campo.
- Si todo esta correcto, se actualiza la contrasena en Firebase y se confirma al usuario.


## Autenticacion con Google
**Responsable:** Javier Andres Quintero Clavijo

Permite iniciar sesion o registrarse usando una cuenta de Google mediante Firebase Authentication.

Asi funciona:
- El usuario hace clic en el boton de Google en la pantalla de login.
- Se abre un popup de seleccion de cuenta de Google.
- Firebase autentica al usuario y obtiene su nombre, correo y foto de perfil.
- Si el usuario es nuevo, se redirige a `CompleteProfilePage` para ingresar datos adicionales (nombre, apellido, codigo).
- La foto de perfil de Google se guarda en Firestore y se muestra en el Dashboard.
- Si el correo ya existe con otro proveedor, se gestiona la vinculacion de cuentas.


## Autenticacion con GitHub
**Responsable:** Andres Felipe Salas Nino

Permite iniciar sesion o registrarse usando una cuenta de GitHub mediante Firebase Authentication.

Asi funciona:
- El usuario hace clic en el boton de GitHub en la pantalla de login.
- Se abre un popup de autorizacion de GitHub.
- Firebase autentica al usuario y obtiene su nombre de usuario, correo y avatar de GitHub.
- Si el usuario es nuevo, se redirige a `CompleteProfilePage` para completar el perfil.
- Si el correo ya existe con otro proveedor, se gestiona la vinculacion de cuentas.


## Autenticacion con Facebook
**Responsable:** Andrey Castilla Contreras

Permite iniciar sesion o registrarse usando una cuenta de Facebook mediante Firebase Authentication.

Asi funciona:
- El usuario hace clic en el boton de Facebook en la pantalla de login.
- Se abre un popup de autorizacion de Facebook.
- Firebase autentica al usuario y obtiene su nombre, correo y foto de perfil de Facebook.
- Si el usuario es nuevo, se redirige a `CompleteProfilePage` para completar el perfil.
- Si el correo ya existe con otro proveedor, se gestiona la vinculacion de cuentas.


## Dashboard con foto de perfil
**Responsable:** Javier Andres Quintero Clavijo

El Dashboard es la pantalla principal a la que accede el usuario tras autenticarse, mostrando su informacion personal y estadisticas.

Muestra:
- Foto de perfil (desde Google, GitHub, Facebook o inicial del nombre como fallback).
- Nombre completo y codigo de estudiante.
- Puntos y trofeos del usuario.
- Navegacion hacia el historial de sesiones.
- Boton de cierre de sesion con registro del evento en Firestore.


## Historial de Usuarios
**Responsable:** Andres Felipe Salas Nino

La vista de historial permite al usuario y a los administradores ver el registro completo de sesiones iniciadas.

Asi funciona:
- Se consultan las sesiones almacenadas en la coleccion `historial_sesiones` de Firestore.
- Se muestra la lista ordenada por fecha con datos como: metodo de autenticacion, fecha de inicio, duracion y estado.
- El usuario puede filtrar y navegar entre los registros de su actividad.


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
|   |   |-- DashboardPage.jsx
|   |   |-- LoginPage.jsx
|   |   |-- RecoverPage.jsx
|   |   |-- RegisterPage.jsx
|   |   |-- ResetPage.jsx
|   |   |-- UserHistoryPage.jsx
|   |   `-- registerService.js
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
