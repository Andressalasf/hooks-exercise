# Práctica de Hooks en React

## Integrantes del Grupo

| Nombre Completo | Código | Hooks Asignados |
|----------------|--------|-----------------|
| Andrés Felipe Salas Niño | AFSN | useState, useEffect, useContext, useReducer, useRef, useMemo |

---

## Tabla General de Hooks Implementados

| Hook | Descripción | Categoría |
|------|-------------|-----------|
| **useState** | Maneja el estado dentro de un componente funcional. | Estado |
| **useEffect** | Ejecuta efectos secundarios en componentes funcionales. | Efectos / ciclo de vida |
| **useContext** | Consume datos de contexto sin prop drilling. | Contexto y datos externos |
| **useReducer** | Maneja estado complejo mediante una función reductora. | Estado |
| **useRef** | Persiste un valor mutable entre renders sin causar re-renderizaciones y permite acceder al DOM. | Referencias / DOM |
| **useMemo** | Memoriza el resultado de un cálculo costoso y lo recalcula solo cuando cambian sus dependencias. | Rendimiento |

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

## Estructura del Proyecto

```
src/
  playground/
    ├── HomeHooks.jsx          # Componente principal con tabla de hooks
    ├── UseStateExample.jsx     # Ejercicio de useState
    ├── UseEffectExample.jsx    # Ejercicio de useEffect
    ├── UseContextExample.jsx   # Ejercicio de useContext
    ├── UseReducerExample.jsx   # Ejercicio de useReducer
    └── UseRefExample.jsx       # Ejercicio de useRef
```

---

## Navegación

- **Home**: `/playground` - Muestra la tabla con todos los hooks disponibles
- **useState**: `/playground/usestate` - Contador interactivo
- **useEffect**: `/playground/useeffect` - Temporizador con cambio de color
- **useContext**: `/playground/usecontext` - Cambio de tema e idioma
- **useReducer**: `/playground/usereducer` - Carrito de compras
- **useRef**: `/playground/useref` - Enfoque DOM y persistencia de valores

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

