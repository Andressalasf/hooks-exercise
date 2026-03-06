# Práctica de Hooks en React

## Integrantes del Grupo

| Nombre Completo | Código | Hooks Asignados |
|----------------|--------|-----------------|
| Andrés Felipe Salas Niño | AFSN | useState, useEffect, useContext, useReducer |

---

## Tabla General de Hooks Implementados

| Hook | Descripción | Categoría |
|------|-------------|-----------|
| **useState** | Maneja el estado dentro de un componente funcional. | Estado |
| **useEffect** | Ejecuta efectos secundarios en componentes funcionales. | Efectos / ciclo de vida |
| **useContext** | Consume datos de contexto sin prop drilling. | Contexto y datos externos |
| **useReducer** | Maneja estado complejo mediante una función reductora. | Estado |

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

## Estructura del Proyecto

```
src/
  playground/
    ├── HomeHooks.jsx          # Componente principal con tabla de hooks
    ├── UseStateExample.jsx     # Ejercicio de useState
    ├── UseEffectExample.jsx    # Ejercicio de useEffect (pendiente)
    ├── UseContextExample.jsx   # Ejercicio de useContext (pendiente)
    └── UseReducerExample.jsx   # Ejercicio de useReducer (pendiente)
```

---

## Navegación

- **Home**: `/playground` - Muestra la tabla con todos los hooks disponibles
- **useState**: `/playground/usestate` - Gestor de tareas

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

