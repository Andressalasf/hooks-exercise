# Práctica de Hooks en React

## Integrantes del Grupo

| Nombre Completo | Código | Hooks Asignados |
|----------------|--------|-----------------|
| Andrés Felipe Salas Niño | AFSN | useState, useEffect, useContext, useReducer, useRef, useMemo |
| Javier Andres Quintero Clavijo | JAQC | useCallback, useDebugValue, useId, useDeferredValue, useLayoutEffect, useTransition |

---

## Tabla General de Hooks Implementados

| Hook | Descripción | Categoría |
|------|-------------|-----------|
| **useState** | Maneja el estado dentro de un componente funcional. | Estado |
| **useEffect** | Ejecuta efectos secundarios en componentes funcionales. | Efectos / ciclo de vida |
| **useContext** | Consume datos de contexto sin prop drilling. | Contexto y datos externos |
| **useReducer** | Maneja estado complejo mediante una función reductora. | Estado |
| **useRef** | Persiste un valor mutable entre renders sin causar re-renderizaciones y permite acceder al DOM. | Referencias |
| **useMemo** | Memoriza el resultado de un cálculo costoso y lo recalcula solo cuando cambian sus dependencias. | Performance |
| **useCallback** | Memoriza la referencia de una función para evitar re-renders innecesarios en componentes hijos. | Performance |
| **useDebugValue** | Muestra una etiqueta personalizada para hooks personalizados en React DevTools. | Debug |
| **useId** | Genera identificadores únicos y estables para vincular elementos de formulario accesibles. | Contexto y datos externos |
| **useDeferredValue** | Difiere la actualización de un valor no urgente para mantener la interfaz responsiva. | Performance |
| **useLayoutEffect** | Ejecuta efectos síncronamente tras las mutaciones del DOM, antes de que el navegador pinte. | Efectos / ciclo de vida |
| **useTransition** | Marca actualizaciones de estado como no urgentes para priorizar interacciones del usuario. | Performance |

---

## Ejercicio 1: useState

### Descripción del Hook
El Hook `useState` es fundamental en React para manejar el estado local en componentes funcionales. Permite declarar variables de estado que React preservará entre re-renderizaciones. La sintaxis básica es:

```javascript
const [state, setState] = useState(valorInicial);
```

Donde:
- `state`: Es el valor actual del estado
- `setState`: Es la función que permite actualizar el estado
- `valorInicial`: Es el valor inicial que tendrá el estado

### Ejercicio Desarrollado: Contador Interactivo

Para demostrar el uso práctico de `useState`, desarrollé un contador interactivo que implementa múltiples estados simples:

#### Estados Utilizados:

1. **counter** (number): Almacena el valor actual del contador.

2. **step** (number): Define el tamaño del incremento/decremento (1-10).

3. **name** (string): Guarda el nombre ingresado por el usuario.

4. **showMessage** (boolean): Controla la visibilidad del mensaje personalizado.

#### Funcionalidades Implementadas:

- **Incrementar**: Suma el valor de `step` al contador
- **Decrementar**: Resta el valor de `step` al contador
- **Reset**: Reinicia el contador y el paso a sus valores iniciales
- **Ajustar paso**: Slider que permite cambiar el tamaño del paso (1-10)
- **Mensaje personalizado**: Muestra un saludo con el nombre y valor del contador
- **Auto-ocultar mensaje**: El mensaje desaparece automáticamente después de 3 segundos
- **Visualización en tiempo real**: Muestra todos los estados actuales

---

## Ejercicio 2: useEffect

### Descripción del Hook
El Hook `useEffect` permite ejecutar efectos secundarios en componentes funcionales. Se ejecuta después de que React actualiza el DOM y puede opcionalmente limpiar recursos. 

### Ejercicio Desarrollado: Temporizador con Cambio de Color

Un temporizador simple que cambia de color automáticamente cada 10 segundos.

#### Estados Utilizados:

1. **seconds** (number): Contador de segundos.
2. **isActive** (boolean): Indica si el temporizador está activo.
3. **color** (string): Color actual del temporizador.

#### Funcionalidades Implementadas:

- **Temporizador**: Cuenta segundos automáticamente
- **Iniciar/Pausar**: Control del estado del temporizador
- **Reiniciar**: Vuelve todo a cero
- **Cambio de color**: Cada 10 segundos cambia aleatoriamente
- **Limpieza**: useEffect limpia el interval correctamente

---

## Ejercicio 3: useContext

### Descripción del Hook
useContext permite consumir un valor de contexto dentro de un componente sin tener que pasar props por cada nivel del árbol de componentes. Se usa junto con createContext y un Provider. La sintaxis básica es:

```javascript
const valor = useContext(MiContexto);
```

### Ejercicio Desarrollado: Cambio de Tema e Idioma

Dos contextos en un mismo archivo que permiten cambiar el tema (claro/oscuro) y el idioma (español/inglés) globalmente, sin pasar props entre componentes.

#### Estados en los Contextos:

1. **theme** (string): Tema actual, puede ser 'light' o 'dark'.
2. **toggleTheme** (función): Alterna entre tema claro y oscuro.
3. **lang** (string): Idioma actual, puede ser 'es' o 'en'.
4. **toggleLang** (función): Alterna entre español e inglés.

#### Funcionalidades Implementadas:

- **Dos contextos en un archivo**: ThemeContext y LangContext definidos directamente en UseContextExample.jsx
- **Navbar**: Consume ambos contextos y expone los dos botones de cambio
- **Card**: Reacciona al tema e idioma sin recibir ningún prop
- **Cambio global**: Al cambiar tema o idioma, todos los componentes se actualizan a la vez

---

## Ejercicio 4: useReducer

### Descripción del Hook
useReducer es una alternativa a useState para manejar estado más complejo. Recibe una función reductora y un estado inicial. La función reductora recibe el estado actual y una acción, y devuelve el nuevo estado. La sintaxis básica es:

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

### Ejercicio Desarrollado: Carrito de Compras

Un carrito sencillo con una lista fija de productos donde se pueden agregar y quitar ítems, mostrando el total actualizado.

#### Estado del Reducer:

1. **items** (array): Lista de productos agregados al carrito.
2. **total** (number): Suma del precio de los ítems en el carrito.

#### Acciones Implementadas:

- **ADD_ITEM**: Agrega el producto al carrito.
- **REMOVE_ITEM**: Quita el producto del carrito y descuenta su precio del total.
- **CLEAR_CART**: Vacía el carrito y reinicia el total.

---

## Ejercicio 5: useRef

### Descripción del Hook
`useRef` retorna un objeto con una propiedad `.current` que persiste durante toda la vida del componente. A diferencia de `useState`, modificar `.current` no provoca un re-render. Tiene dos usos principales: acceder directamente a un elemento del DOM y guardar valores mutables entre renders. La sintaxis básica es:

```javascript
const ref = useRef(valorInicial);
```

Donde:
- `ref.current`: es el valor actual almacenado (o la referencia al elemento del DOM)
- `valorInicial`: el valor con el que se inicializa `ref.current`

### Ejercicio Desarrollado: Enfoque DOM y Persistencia de Valores

Panel que combina tres usos de `useRef`: una referencia de DOM, un contador de renders sin re-renderización y un rastreador de valor anterior.

#### Refs Utilizados:

1. **inputRef** (DOM ref): Se asigna al `<input>` de texto mediante el atributo `ref`. El botón "Enfocar" llama a `inputRef.current.focus()` para mover el cursor al campo sin modificar ningún estado.

2. **renderCountRef** (valor mutable): Se incrementa en cada render del componente. Al no usar `setState`, su cambio no dispara renders adicionales.

3. **prevTextRef** (valor previo): Almacena el texto guardado anteriormente usando un `useEffect`. En cada render ya contiene el valor del render anterior.

#### Funcionalidades Implementadas:

- **Enfocar input**: Un botón llama a `inputRef.current.focus()` directamente sobre el elemento DOM sin tocar el estado.
- **Guardar texto**: Actualiza `savedText` (estado) y limpia el input, disparando un render donde `prevTextRef` aún conserva el valor anterior.
- **Contador de renders**: Muestra cuántas veces se ha renderizado el componente usando `renderCountRef.current`, sin causar renders extra.
- **Valor anterior**: Muestra en paralelo el valor guardado actual y el anterior, evidenciando la diferencia de temporalidad entre `useState` y `useRef`.

---

## Ejercicio 6: useMemo

### Descripción del Hook
`useMemo` memoriza el resultado de un cálculo y solo lo vuelve a ejecutar cuando alguna de sus dependencias cambia. Es útil cuando hay valores derivados que dependen de un estado y no tiene sentido recalcularlos en cada render. La sintaxis básica es:

```javascript
const valor = useMemo(() => calculo(), [dependencias]);
```

Donde:
- `calculo()`: la función que produce el valor memorizado
- `dependencias`: array de valores que, al cambiar, disparan el recálculo

### Ejercicio Desarrollado: Filtro de Estudiantes

Un listado de estudiantes con notas donde `useMemo` calcula la lista filtrada y las estadísticas. Hay además un selector de color que modifica un estado sin relación con el filtro, lo que permite ver que el memo no se recalcula en ese caso.

#### Memo Utilizado:

1. **resultado** (objeto memorizado): contiene `filtrados` (lista de estudiantes que pasan el filtro), `promedio` y `mejor` nota. Se recalcula únicamente cuando cambia `minNota`.

#### Estado Adicional:

1. **minNota** (number): umbral mínimo de nota, controlado por un slider. Es la dependencia del memo.
2. **tema** (string): color del encabezado. Cambia el estado del componente sin afectar el memo.

#### Funcionalidades Implementadas:

- **Slider de nota mínima**: al arrastrarlo se actualiza `minNota`, lo que dispara el recálculo de `useMemo`.
- **Selector de color**: cambia el estado `tema` sin tocar `minNota`, demostrando que el memo no se vuelve a ejecutar.
- **Encabezado con estadísticas**: muestra cuántos aprueban, el promedio y la nota más alta del grupo filtrado.
- **Lista filtrada**: muestra cada estudiante que cumple el filtro con su nota, resaltando en verde los que superan 4.0.

---

## Ejercicio 7: useCallback

### Descripción del Hook
`useCallback` memoriza la referencia de una función y solo la recrea cuando alguna de sus dependencias cambia. Sin este hook, cada render del componente padre genera una nueva referencia de función, lo que provoca que los componentes hijos envueltos en `React.memo` se vuelvan a renderizar aunque sus props no hayan cambiado en valor. La sintaxis básica es:

```javascript
const fn = useCallback(() => lógica(), [dependencias]);
```

Donde:
- `lógica()`: la función que se quiere memorizar
- `dependencias`: array de valores que, al cambiar, provocan que la función se recree con una nueva referencia

### Ejercicio Desarrollado: Lista de Tareas con React.memo

Un gestor de tareas donde los ítems individuales están envueltos en `React.memo`. El componente padre tiene un contador independiente que al incrementarse provoca un re-render del padre, demostrando que los hijos **no se re-renderizan** gracias a que los callbacks están estabilizados con `useCallback`.

#### Callbacks Memorizados:

1. **handleToggle** `useCallback([])`: marca o desmarca una tarea como completada. Dependencias vacías porque usa el patrón funcional de `setTareas`.

2. **handleEliminar** `useCallback([])`: elimina una tarea por id. Misma razón que el anterior.

3. **handleAgregar** `useCallback([nuevaTarea])`: agrega una tarea nueva al listado. Depende de `nuevaTarea` porque necesita leer su valor actual.

#### Funcionalidades Implementadas:

- **Contador independiente**: al incrementarlo el padre se re-renderiza, pero los `TareaItem` (React.memo) no se re-renderizan si sus callbacks no cambiaron.
- **Contador de renders por tarea**: cada ítem muestra cuántas veces se ha renderizado usando `useRef`, evidenciando la optimización.
- **Marcar/desmarcar tarea**: checkbox que alterna el estado `completada` de la tarea.
- **Eliminar tarea**: botón que filtra la tarea del array de estado.
- **Agregar tarea**: input con botón y soporte de tecla Enter para añadir nuevas tareas.
- **Estadísticas en tiempo real**: muestra el total, completadas y pendientes del listado.

---

## Ejercicio 8: useDebugValue

### Descripción del Hook
`useDebugValue` permite añadir una etiqueta descriptiva y personalizada a un hook personalizado, visible en React DevTools al inspeccionar el árbol de componentes. Acepta un segundo argumento opcional de formato que solo se ejecuta cuando DevTools está abierto, evitando cálculos innecesarios. La sintaxis básica es:

```javascript
useDebugValue(valor, valor => formatear(valor));
```

Donde:
- `valor`: el estado o dato que se quiere etiquetar en DevTools
- `valor => formatear(valor)`: función opcional que transforma el valor en una cadena legible

### Ejercicio Desarrollado: Formulario de Registro con Validación

Un formulario de registro con tres campos (nombre, correo y contraseña) gestionados por el hook personalizado `useFormField`. Cada instancia del hook usa `useDebugValue` con una función formateadora para mostrar en DevTools el valor actual, su estado de validez y si el campo fue tocado. Se incluye un panel simulador de DevTools en la UI que replica en tiempo real lo que se vería en las herramientas de desarrollo.

#### Hook Personalizado:

1. **useFormField(valorInicial, validar)**: encapsula el estado `value`, `touched` y la lógica de validación. Usa `useDebugValue` con formateador para exponer `"valor" | ✓/✗ válido | tocado/sin tocar`.

#### Validaciones por Campo:

1. **nombre**: mínimo 3 caracteres.
2. **email**: expresión regular de formato de correo electrónico.
3. **password**: mínimo 6 caracteres.

#### Funcionalidades Implementadas:

- **Simulador de DevTools**: panel oscuro que muestra en tiempo real la etiqueta que `useDebugValue` expone para cada campo, incluyendo enmascaramiento de la contraseña.
- **Validación por campo**: cada campo valida al perder el foco (`onBlur`) y muestra mensaje de error o confirmación verde.
- **Botón de envío**: deshabilitado hasta que los tres campos sean válidos.
- **Pantalla de éxito**: al registrarse correctamente muestra confirmación y opción de resetear el formulario.

---

## Estructura del Proyecto

```
src/
  playground/
    ├── HomeHooks.jsx                 # Componente principal con tabla de hooks
    ├── UseStateExample.jsx            # Ejercicio de useState
    ├── UseEffectExample.jsx           # Ejercicio de useEffect
    ├── UseContextExample.jsx          # Ejercicio de useContext
    ├── UseReducerExample.jsx          # Ejercicio de useReducer
    ├── UseRefExample.jsx              # Ejercicio de useRef
    ├── UseMemoExample.jsx             # Ejercicio de useMemo
    ├── UseCallbackExample.jsx         # Ejercicio de useCallback
    └── UseDebugValueExample.jsx       # Ejercicio de useDebugValue
```

---

## Navegación

- **Home**: `/playground` - Muestra la tabla con todos los hooks disponibles
- **useState**: `/playground/usestate` - Contador interactivo
- **useEffect**: `/playground/useeffect` - Temporizador con cambio de color
- **useContext**: `/playground/usecontext` - Cambio de tema e idioma
- **useReducer**: `/playground/usereducer` - Carrito de compras
- **useRef**: `/playground/useref` - Enfoque DOM y persistencia de valores
- **useMemo**: `/playground/usememo` - Filtro de estudiantes
- **useCallback**: `/playground/usecallback` - Lista de tareas con React.memo
- **useDebugValue**: `/playground/usedebugvalue` - Formulario de registro con validación

---


## Instrucciones de Ejecución

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Abrir en el navegador: `http://localhost:5173`

---

