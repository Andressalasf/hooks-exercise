# Práctica de Hooks en React

## Integrantes del Grupo

| Nombre Completo | Código | Hooks Asignados |
|----------------|--------|-----------------|
| Andrés Felipe Salas Niño | AFSN | useState, useEffect, useContext, useReducer, useRef, useMemo |
| Javier Andres Quintero Clavijo | JAQC | useCallback, useDebugValue, useId, useDeferredValue, useLayoutEffect, useTransition |
| Andrey Castilla Contreras | ACC | useActionState, useEffectEvent, useImperativeHandle, useInsertionEffect, useOptimistic, useSyncExternalStore |

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
| **useActionState** | Actualiza el estado basándose en el resultado de una acción de formulario. | Estado / Librerias |
| **useEffectEvent** | Ejecuta efectos secundarios basado en eventos específicos. | Efectos / ciclo de vida |
| **useImperativeHandle** | Permite personalizar el identificador expuesto como una ref. | Referencias |
| **useInsertionEffect** |  Inserta elementos en el DOM antes de que se dispare cualquier Efecto de diseño. | Efectos / ciclo de vida |
| **useOptimistic** | Actualiza la interfaz de usuario / UI de manera optimista. | Estado |
| **useSyncExternalStore** | Permite suscribirse a una fuente de almacenamiento de datos (store) externa. | Contexto y datos externos |

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

## Ejercicio 9: useId

### Descripción del Hook
`useId` genera un identificador único y estable por cada llamada al hook. Está diseñado para vincular elementos de formulario accesibles mediante los atributos `htmlFor` e `id` dentro de componentes reutilizables, evitando colisiones de IDs cuando el mismo componente se renderiza varias veces en la misma página. La sintaxis básica es:

```javascript
const id = useId();
```

Donde:
- `id`: cadena única generada por React, estable entre renders del mismo componente

### Ejercicio Desarrollado: Formularios con IDs sin Colisión

Dos instancias del mismo componente `FormularioReserva` se renderizan en paralelo. Cada campo de texto es un componente reutilizable `CampoTexto` que llama internamente a `useId` para generar su propio ID único. El ID generado se muestra visualmente junto a cada etiqueta, evidenciando que ningún ID se repite entre formularios aunque usen exactamente el mismo componente.

#### Componente Reutilizable:

1. **CampoTexto**: genera su propio `id` con `useId`, lo asigna al `<input>` y lo vincula al `<label>` mediante `htmlFor`. Muestra el ID en un badge azul junto a la etiqueta.

#### Funcionalidades Implementadas:

- **Dos formularios paralelos**: `Formulario A` y `Formulario B` usan el mismo componente pero con IDs únicos y sin colisión.
- **Badge de ID visible**: cada campo muestra en tiempo real el ID generado por `useId`, haciendo evidente la unicidad.
- **Accesibilidad correcta**: el `<label>` apunta al `<input>` correcto mediante `htmlFor`, comportamiento que se rompería con IDs manuales repetidos.

---

## Ejercicio 10: useDeferredValue

### Descripción del Hook
`useDeferredValue` recibe un valor y devuelve una versión diferida del mismo. React actualiza el valor diferido solo cuando no hay actualizaciones más urgentes pendientes, como las causadas por la interacción directa del usuario. Es útil para mantener la interfaz responsiva mientras se procesan listas grandes o cálculos costosos derivados de ese valor. La sintaxis básica es:

```javascript
const valorDiferido = useDeferredValue(valor);
```

Donde:
- `valor`: el valor urgente que se actualiza inmediatamente (ej. el texto del input)
- `valorDiferido`: la versión que React puede retrasar para priorizar otras actualizaciones

### Ejercicio Desarrollado: Buscador de Productos con Lista Diferida

Un buscador sobre una lista de 500 productos. El input actualiza el estado de búsqueda de forma inmediata, pero la lista filtra usando el valor diferido. Se muestra en tiempo real la diferencia entre el valor actual y el diferido, y la lista se vuelve semitransparente mientras está desactualizada, evidenciando cuándo React está procesando la actualización en segundo plano.

#### Estados y valores:

1. **busqueda** (string): valor urgente, se actualiza en cada tecla del input.
2. **deferredBusqueda** (string): versión diferida de `busqueda`, actualizada por React cuando el hilo está libre.
3. **isStale** (boolean): `busqueda !== deferredBusqueda`, indica que la lista aún no refleja el valor actual.

#### Funcionalidades Implementadas:

- **Input responsivo**: actualiza `busqueda` inmediatamente sin bloquear el hilo.
- **Lista diferida**: filtra 500 productos usando `deferredBusqueda` dentro de un `useMemo`.
- **Indicador de valores**: muestra en tiempo real el valor actual (azul) y el diferido (morado).
- **Indicador de actualización**: badge amarillo "Actualizando lista..." visible cuando `isStale` es `true`.
- **Opacidad de lista**: la lista se atenúa mientras está desactualizada y vuelve a su opacidad normal al sincronizarse.

---

## Ejercicio 11: useLayoutEffect

### Descripción del Hook
`useLayoutEffect` tiene la misma firma que `useEffect`, pero se ejecuta síncronamente después de que React aplica los cambios al DOM y **antes** de que el navegador pinte la pantalla. Esto permite leer medidas del DOM y ajustar la UI de forma inmediata, evitando el parpadeo visual que causaría un `useEffect` equivalente al ejecutarse después del pintado. La sintaxis básica es:

```javascript
useLayoutEffect(() => { medirDOM(); }, [dependencias]);
```

Donde:
- La función se ejecuta tras cada render en que cambien las dependencias, pero antes del pintado
- Es ideal para lecturas de layout (posición, tamaño) que requieren actualización inmediata

### Ejercicio Desarrollado: Catálogo con Indicador de Pestaña Animado

Un catálogo de productos filtrable por categoría con pestañas de navegación. El indicador azul que se desliza bajo la pestaña activa se posiciona usando `useLayoutEffect`, que mide el ancho y la posición real de cada pestaña en el DOM antes de que el navegador pinte. Esto garantiza que el indicador aparezca en la posición correcta desde el primer frame, sin saltos visibles.

#### Refs y medidas:

1. **tabsRef**: array de refs, uno por pestaña, para acceder a sus dimensiones reales con `getBoundingClientRect()`.
2. **contenedorRef**: ref del contenedor de pestañas, usado como punto de referencia para calcular el `left` relativo.
3. **indicador**: estado `{ left, width }` que controla la posición y ancho del indicador azul.

#### Funcionalidades Implementadas:

- **Indicador deslizante**: barra azul que se mueve suavemente bajo la pestaña activa, posicionada con medidas reales del DOM.
- **Medición en tiempo real**: muestra los valores calculados por `useLayoutEffect` (`left` y `width` en px) debajo de las pestañas.
- **Filtro por categoría**: al cambiar de pestaña, la lista de productos se filtra y el indicador se reposiciona antes del pintado.
- **Catálogo de productos**: 8 productos en 4 categorías con nombre, categoría y precio.

---

## Ejercicio 12: useTransition

### Descripción del Hook
`useTransition` permite marcar una actualización de estado como no urgente. React procesará esa actualización sin bloquear las interacciones del usuario (clics, escritura). Devuelve un booleano `isPending` que indica si la transición está en curso, útil para mostrar retroalimentación visual. La sintaxis básica es:

```javascript
const [isPending, startTransition] = useTransition();
```

Donde:
- `isPending`: `true` mientras React está procesando la actualización marcada como transición
- `startTransition(fn)`: función que envuelve la actualización de estado no urgente

### Ejercicio Desarrollado: Panel de Datos por Módulo

Un panel con cuatro pestañas (Ventas, Clientes, Productos, Reportes), cada una con 300 registros generados. El cambio de pestaña se envuelve en `startTransition`, marcándolo como no urgente. Mientras React procesa la actualización, `isPending` activa un indicador "Cargando..." y atenúa la lista, mientras las pestañas permanecen completamente clicables, demostrando que la UI no se bloquea.

#### Valores retornados:

1. **isPending** (boolean): `true` durante el procesamiento de la transición. Controla la opacidad de la lista y la visibilidad del indicador.
2. **startTransition(fn)**: envuelve el `setTabActiva(tab)` para marcarlo como no urgente.

#### Funcionalidades Implementadas:

- **4 pestañas de módulos**: cada una carga 300 registros distintos usando `startTransition`.
- **Indicador de transición**: texto "Cargando..." animado con `animate-pulse` visible solo cuando `isPending` es `true`.
- **Lista semitransparente**: la tabla de registros se atenúa durante la transición y vuelve a su opacidad normal al terminar.
- **Estadísticas por módulo**: total de registros, cantidad de activos y valor total del módulo activo.
- **Registros con estado**: cada ítem muestra su estado (Activo / Pendiente / Cerrado) con color distintivo.

---

## Ejercicio 13: useActionState

### Descripción del Hook
`useActionState` permite actualizar el estado basado en el resultado de una acción de formulario.

```javascript
const [state, dispatchAction, isPending] = useActionState(reducerAction, initialState, permalink?);
```

Donde:
- `state`: valor actual del estado.
- `dispatchAction`: una función llamada dentro de las acciones.
- `isPending`: bandera que permite saber si se tienen acciones pendientes

### Ejercicio Desarrollado: Carrito con cola en el boton de agregar

El carrito más simple posible, tiene la cantidad de productos que aumentan al presionar el botón de agregar, dicho botón permite encadenar acciones (agregar producto) si se presiona en menos de un segundo, terminado el tiempo de espera se actualiza el valor total.

#### Valores retornados:

1. **count**: estado que guarda la cantidad de veces que se presiono el botón de agregar
2. **dispatchAction(funcion)**: captura la cadena de acciones para modificar el estado
3. **isPending**: su valor es `true` hasta que se deja de presionar el botón por medio segundo

#### Funcionalidades Implementadas:

- **Agregar**: agrega productos al total, recibiendo entrada de click hasta que se deje de presionar por medio segundo, dicha funcionalidad mostrada por un icono
- **Total**: valor total calculado luego de dejar de presionar el botón anterior

---

## Ejercicio 14: useEffectEvent

### Descripción del Hook
`useEffectEvent` permite separar efectos de eventos, es decir permite refrescar valores en la llamada a un efecto sin que estos causen el mismo a correr de nuevo.

```javascript
const onEvent = useEffectEvent(callback);
```

Donde:
- `callback`: función conteniendo la lógica del evento de efecto, cuando es llamada siempre accede los ultimos valores del render al momento de llamado

### Ejercicio Desarrollado: Temporizador con los valores de intervalo mas recientes dados

Un temporizador cuyo intervalo de conteo es modificable sin reiniciar completamente el mismo

#### Valores retornados:

1. **count**: el conteo actual del temporizador
2. **incremento**: el valor de incremento del contador por segundo

#### Funcionalidades Implementadas:

- **Contador**: valor actual del temporizador
- **Reset**: reinicia el temporizador a cero
- **-**: reduce el incremento por segundo
- **+**: aumenta el incremento por segundo
- **valor**: el valor de incremento por segundo, si es cero el temporizador para

---

## Ejercicio 15: useImperativeHandle

### Descripción del Hook
`useImperativeHandle` permite personalizar el identificador expuesto como una ref.

```javascript
useImperativeHandle(ref, createHandle, dependencies?);
```

Donde:
- `ref`: referencia recibida como prop del componente usado
- `createHandle`: una función sin argumentos que devuelve el identificador ref que se quiere exponer
- `dependencies`: opcional, lista de valores reactivos que se hacen referencia en `createHandle`

### Ejercicio Desarrollado: Realizar acciones en una casilla de texto desde un nivel superior

Se realizo una demostracion simple usando un campo de introducción de texto creado a partir de una función en un nivel inferior cuya ref fue expuesta con `useImperativeHandle`
y se demostró que se pueden realizar acciones desde un nivel superior usando esa ref.

#### Valores retornados:

1. **inputRef**: la referencia expuesta con la que se puede trabajar desde una instancia madre

#### Funcionalidades Implementadas:

- **MiEntrada**: funcion con ref expuesta usando `useImperativeHandle` para su manipulacion desde un nivel superior
- **Enfocar entrada**: se aplica foco a la entrada de texto usando `inputRef`
- **Limpiar entrada**: se limpia la entrada de texto usando `inputRef`

---

## Ejercicio 16: useInsertionEffect

### Descripción del Hook
`useInsertionEffect` permite insertar elementos en el DOM antes de que se dispare cualquier Efecto de diseño (layout).

```javascript
useInsertionEffect(setup, dependencies?);
```

Donde:
- `setup`: función conteniendo la lógica de los efectos
- `dependencies`: opcional, lista de los valores reactivos referenciados en el código de `setup`

### Ejercicio Desarrollado: Cambio de tema / inserción de CSS antes de carga del DOM

Un ejemplo de carga de CSS previo al resto del DOM, manteniendo en su medida el rendimiento y evitando posibles problemas de parpadeo.

#### Valores retornados:

1. **setup**: función encargarda de insertar el CSS dependiendo del estado

#### Funcionalidades Implementadas:

- **Cambiar a Tema**: cambia el estado de `tema` para que sea aplicado al elemento de demostración

---

## Ejercicio 17: useOptimistic

### Descripción del Hook
`useOptimistic` permite actualizar la interfaz de usuario / UI de manera optimista.

```javascript
const [optimisticState, setOptimistic] = useOptimistic(value, reducer?);
```

Donde:
- **value**: valor devuelto inicialmente y mientras no haya acciones pendientes
- **reducer**: opcional, función que especifica como el estado optimista es actualizado, debe ser una función pura y devuelve el estado optimista resultante

### Ejercicio Desarrollado: Actualización optimista de lista en formulario

Se realiza un listado de elementos de texto al que se le pueden agregar otros adicionales, el hook se encarga de mostrar los valores agregados en la UI al instante
mientras son almacenados indicando esta acción

#### Valores retornados:

1. **optimistiState**: el estado optimista actual
2. **setOptimistic**: es la función a llamar para actualizar el estado optimista a un valor diferente dentro de una Acción

#### Funcionalidades Implementadas:

- **Entregar Mensaje**: simula el envio del texto con una pausa y muestra un mensaje de espera.
- **Thread**: se encarga de recibir el texto y construir la lista a medida que se agregan elementos, mostrando el mensaje de forma optimista al presionar enviar
-**Enviar Mensaje**: realiza la operacion de enviar los datos, esparando a EntregarMensaje

---

## Ejercicio 18: useSyncExternalStore

### Descripción del Hook
`useSyncExternalStore` permite suscribirte a una fuente de almacenamiento de datos (store) externa.

```javascript
const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?);
```

Donde:
- **subscribe**: función de un argumento (`callback`) que lo toma y lo suscribe a la fuente de almacenamiento de datos
- **getSnapshot**: función que devuelve una instantánea de los datos de la fuente de almacenamiento
- **getServerSnapshot**: opcional, función que devuelve una instantánea inicial de los datos de la fuente de almacenamiento, solo para usarse durante el renderizado en el servidor

### Ejercicio Desarrollado: Listado dinámico almacenado en fuente de datos externa

Se creo una lista sincronizada con una fuente de almacenmiento externa simulada en **todoStore.js**, `useSyncExternalStore` se encarga de asegurase que sea posible usarla y manteniene una imagen del listado.

#### Valores retornados:

1. **snaphot**: instantánea actual de la fuente de almacenamiento para uso en la lógica de renderizado
2. **subscribe return**: `subscribe` debe devolver una función para limpiar la suscripción

#### Funcionalidades Implementadas:

- **Almacenamiento externo**: se almacenaron los datos en una fuente externa de almacenamiento
- **Verificación**: se aseguro que la conexión con la fuente externa fuera valida y usable
- **Visualización**: se visualiza el listado tomado de la fuente externa de forma dinamica

---
## Estructura del Proyecto

```
src/
  playground/
    ├── HomeHooks.jsx                    # Componente principal con tabla de hooks
    ├── UseStateExample.jsx               # Ejercicio de useState
    ├── UseEffectExample.jsx              # Ejercicio de useEffect
    ├── UseContextExample.jsx             # Ejercicio de useContext
    ├── UseReducerExample.jsx             # Ejercicio de useReducer
    ├── UseRefExample.jsx                 # Ejercicio de useRef
    ├── UseMemoExample.jsx                # Ejercicio de useMemo
    ├── UseCallbackExample.jsx            # Ejercicio de useCallback
    ├── UseDebugValueExample.jsx          # Ejercicio de useDebugValue
    ├── UseIdExample.jsx                  # Ejercicio de useId
    ├── UseDeferredValueExample.jsx       # Ejercicio de useDeferredValue
    ├── UseLayoutEffectExample.jsx        # Ejercicio de useLayoutEffect
    ├── UseTransitionExample.jsx          # Ejercicio de useTransition
    ├── UseActionStateExample.jsx         # Ejercicio de useActionState
    ├── UseEffectEventExample.jsx         # Ejercicio de useEffectEvent
    ├── UseImperativeHandleExample.jsx    # Ejercicio de useImperativeHandle
    ├── UseInsertioneffectExample.jsx     # Ejercicio de useInsertioneffect
    ├── UseOptimisticExample.jsx          # Ejercicio de useOptimistic
    └── UseSyncExternalStoreExample.jsx   # Ejercicio de useSyncExternalStore
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
- **useId**: `/playground/useid` - Formularios con IDs únicos sin colisión
- **useDeferredValue**: `/playground/usedeferredvalue` - Buscador de productos con lista diferida
- **useLayoutEffect**: `/playground/uselayouteffect` - Catálogo con indicador de pestaña animado
- **useTransition**: `/playground/usetransition` - Panel de datos por módulo con transición no urgente
- **useActionState**: `/playgrond/useactionstate` - Carrito de compra con actualización de valor al final
- **useEffectEvent**: `/playground/useeffectevent` - Temporizador con los valores de intervalo mas recientes dados
- **useImperativeHandle**: `/playground/useimperativehandle` - Realizar acciones en una casilla de texto desde un nivel superior
- **useInsertionEffect**: `/playground/useinsertioneffect` - Cambio de tema / inserción de CSS antes de carga del DOM
- **useOptimistic**: `/playground/useoptimistic` - Actualización optimista de lista en formulario
- **useSyncExternalStore**: `/playground/usesyncexternalstore` - Listado dinámico almacenado en fuente de datos externa

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