# Quiz de Perfumes con IA

Una herramienta interactiva que hace 10 preguntas sobre personalidad, estilo y preferencias del usuario, y usa inteligencia artificial para recomendar los perfumes más afines a su perfil del catálogo disponible.

---

## ¿Qué hace?

El usuario responde preguntas sobre cómo se describe a sí mismo, qué contextos tiene en mente (trabajo, salidas, ocasiones especiales), qué olores le atraen, cómo se viste, qué música escucha, entre otras. Al terminar, la IA analiza el conjunto de respuestas y devuelve los 5 perfumes más compatibles con su perfil, con una explicación personalizada para cada uno y un porcentaje de compatibilidad.

El catálogo de perfumes está integrado directamente en el componente y puede reemplazarse o ampliarse con el catálogo propio de cualquier tienda.

---

## Para el equipo técnico

### Tecnología

- **React** (componente funcional con hooks)
- **Anthropic API** (`claude-sonnet-4-20250514`) para el análisis de perfil
- Sin dependencias externas adicionales

### Requisitos

- Node.js 18 o superior
- Una API key de Anthropic ([obtenerla acá](https://console.anthropic.com/))

### Instalación en un proyecto existente

1. Copiá `perfume-quiz.jsx` dentro de tu proyecto React
2. Configurá la API key de Anthropic como variable de entorno:

```bash
VITE_ANTHROPIC_API_KEY=sk-ant-...
```

> **Nota importante:** la API key actualmente se usa desde el frontend. Para producción se recomienda mover la llamada a la API a un endpoint propio en el backend para no exponer la clave.

3. Importá el componente donde lo necesites:

```jsx
import PerfumeQuiz from './perfume-quiz'

export default function App() {
  return <PerfumeQuiz />
}
```

### Personalizar el catálogo

El array `PERFUMES` al inicio del archivo contiene todos los perfumes disponibles. Cada entrada tiene esta estructura:

```js
{
  nombre: "Nombre del perfume",
  tipo: "Hombre" | "Unisex",
  uso: "Uso diario" | "Uso nocturno" | "Ocasiones especiales",
  olor: "Descripción breve del aroma",
  año: 2015
}
```

Reemplazá o ampliá ese array con el catálogo propio y el sistema de recomendaciones se adapta automáticamente.

### Probar sin instalar nada

El componente se puede abrir directamente en [StackBlitz](https://stackblitz.com) arrastrando el archivo, o pegando el código en un nuevo proyecto React.

---

## Para quien evalúa si integrarlo

No requiere suscripción ni plataforma de terceros más allá de la API de Anthropic, que cobra por uso (centavos por consulta a escala normal). La herramienta corre completamente en el navegador del usuario, no almacena ningún dato y no requiere login.

El flujo completo toma entre 2 y 4 minutos por usuario, y el resultado es una recomendación personalizada con el perfume más afín a su estilo, lo cual puede ser útil para reducir la fricción de compra en clientes que no saben bien por dónde empezar.

---

## Origen

Construido como ejercicio personal usando el catálogo de una perfumería. Compartido como gesto para quien quiera darle uso.
