# Quiz de Perfumes con IA

Una herramienta interactiva que hace 10 preguntas sobre personalidad, estilo y preferencias del usuario, y usa inteligencia artificial para recomendar los perfumes más afines a su perfil del catálogo disponible.

---

## ¿Qué hace?

El usuario responde preguntas sobre cómo se describe a sí mismo, qué contextos tiene en mente (trabajo, salidas, ocasiones especiales), qué olores le atraen, cómo se viste, qué música escucha, entre otras. Al terminar, la IA analiza el conjunto de respuestas y devuelve los 5 perfumes más compatibles con su perfil, con una explicación personalizada para cada uno y un porcentaje de compatibilidad.

El catálogo de perfumes está integrado directamente en el componente y puede reemplazarse o ampliarse con el catálogo propio de cualquier tienda.

---

## Probarlo sin instalar nada

Está disponible en StackBlitz para abrirlo directamente en el navegador:

👉 [Abrir en StackBlitz](https://stackblitz.com/~/github.com/santiagovittor/quiz-perfumes)

---

## Estructura del proyecto

```
quiz-perfumes/
├── perfume-quiz.jsx   # Componente principal con el quiz y la lógica de recomendación
├── main.jsx           # Punto de entrada de React
├── index.html         # HTML base
├── vite.config.js     # Configuración de Vite
├── package.json       # Dependencias
└── README.md
```

---

## Para el equipo técnico

### Tecnología

- **React** (componente funcional con hooks)
- **Vite** como bundler
- **Anthropic API** (`claude-sonnet-4-20250514`) para el análisis de perfil
- Sin dependencias externas adicionales

### Requisitos

- Node.js 18 o superior
- Una API key de Anthropic ([obtenerla acá](https://console.anthropic.com/))

### Instalación

```bash
git clone https://github.com/santiagovittor/quiz-perfumes
cd quiz-perfumes
npm install
```

Creá un archivo `.env` en la raíz con tu API key:

```
VITE_ANTHROPIC_API_KEY=sk-ant-...
```

Luego:

```bash
npm run dev
```

### Sobre la API

El proyecto usa específicamente la API de Anthropic. La función `analyzeProfile` dentro de `perfume-quiz.jsx` es la única que hace la llamada externa, está aislada y es relativamente sencilla de adaptar a otro proveedor (OpenAI, Gemini, etc.) si se prefiere, pero requiere reescribir esa función con el endpoint y formato correspondiente, no es un cambio de key solamente.

> **Nota para producción:** la llamada a la API se hace desde el frontend. Para un entorno productivo se recomienda moverla a un endpoint propio en el backend para no exponer la API key al cliente.

### Personalizar el catálogo

El array `PERFUMES` al inicio de `perfume-quiz.jsx` contiene todos los perfumes disponibles. Cada entrada tiene esta estructura:

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

---

## Para quien evalúa si integrarlo

No requiere suscripción ni plataforma de terceros más allá de la API de Anthropic, que cobra por uso (centavos por consulta a escala normal). La herramienta corre completamente en el navegador del usuario, no almacena ningún dato y no requiere login.

El flujo completo toma entre 2 y 4 minutos por usuario, y el resultado es una recomendación personalizada con los perfumes más afines a su estilo, lo cual puede ser útil para reducir la fricción de compra en clientes que no saben bien por dónde empezar.

---

## Costos estimados a escala

El modelo usado es Claude Sonnet, que cotiza a $3 por millón de tokens de input y $15 por millón de tokens de output. Cada sesión del quiz consume aproximadamente 2.800 tokens de input y 800 de output, lo que da un costo de alrededor de **$0.02 por usuario**.

| Usuarios por mes | Costo estimado |
|-----------------|---------------|
| 10              | ~$0.20        |
| 100             | ~$2.00        |
| 1.000           | ~$20.00       |

Estos números son orientativos. El costo real puede variar según la longitud de las respuestas abiertas del usuario y el tamaño del catálogo de perfumes. Para consultar los precios actualizados: [anthropic.com/pricing](https://www.anthropic.com/pricing).

---

## Por qué este tipo de herramienta puede ser útil

Los quiz de personalidad y los configuradores interactivos son uno de los formatos de mayor retención en e-commerce, especialmente en categorías donde la decisión de compra es difícil sin poder oler o probar el producto. Algunas razones concretas:

**Reducción de fricción en la compra.** Un cliente que no sabe por dónde empezar suele abandonar el sitio. Un quiz que lo guía hacia dos o tres opciones concretas reduce esa indecisión y acorta el camino hacia la compra.

**Engagement y tiempo en sitio.** Los usuarios que completan un cuestionario interactivo pasan más tiempo en el sitio y tienen tasas de conversión significativamente más altas que los que navegan solos. Es una de las mecánicas más efectivas para mantener la atención.

**Personalización sin datos previos.** A diferencia de los sistemas de recomendación tradicionales que necesitan historial de compras o navegación, este quiz funciona desde el primer contacto con un usuario nuevo.

**Contenido compartible.** Los resultados personalizados ("tu perfume ideal según tu personalidad") tienen alto potencial de ser compartidos en redes, lo que genera tráfico orgánico sin costo adicional.

**Diferenciación frente a la competencia.** La mayoría de las tiendas de perfumes online ofrecen filtros por familia olfativa o precio. Una herramienta que habla el idioma del usuario (estilo de vida, personalidad, momentos) es una propuesta distinta y más memorable.

---

## Origen

Construido como ejercicio personal usando el catálogo de una perfumería. Compartido como gesto para quien quiera darle uso.
