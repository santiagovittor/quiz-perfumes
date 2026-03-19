import { useState, useEffect, useRef } from "react";

const PERFUMES = [
  { nombre: "212 Men", tipo: "Hombre", uso: "Uso diario", olor: "Cítrico-verde, limpio, urbano, con especias suaves y fondo amaderado.", año: 1999 },
  { nombre: "212 Sexy Men", tipo: "Hombre", uso: "Uso nocturno", olor: "Dulce-especiado con vainilla, ámbar y un perfil seductor.", año: 2006 },
  { nombre: "212 VIP Men", tipo: "Hombre", uso: "Uso nocturno", olor: "Dulce-fresco, fiestero, con vibra licorosa y juvenil.", año: 2011 },
  { nombre: "212 VIP Black", tipo: "Hombre", uso: "Uso nocturno", olor: "Aromático-dulce con absenta, lavanda y vainilla oscura.", año: 2017 },
  { nombre: "A*Men", tipo: "Hombre", uso: "Uso nocturno", olor: "Gourmand potente: café, patchouli, caramelo y vainilla con humo.", año: 1996 },
  { nombre: "A*Men Pure Coffee", tipo: "Hombre", uso: "Uso nocturno", olor: "Café tostado, patchouli y maderas; más seco y adulto.", año: 2008 },
  { nombre: "A*Men Pure Malt", tipo: "Hombre", uso: "Ocasiones especiales", olor: "Boozy-gourmand: whisky, maltas, vainilla y madera ahumada.", año: 2009 },
  { nombre: "A*Men Pure Havane", tipo: "Hombre", uso: "Ocasiones especiales", olor: "Miel, tabaco y cacao; cálido, envolvente y muy adictivo.", año: 2011 },
  { nombre: "Acqua di Giò pour Homme", tipo: "Hombre", uso: "Uso diario", olor: "Acuático-cítrico, limpio, marino y muy fácil de llevar.", año: 1996 },
  { nombre: "Acqua di Giò Profumo", tipo: "Hombre", uso: "Ocasiones especiales", olor: "Acuático-incienso, más elegante, oscuro y sofisticado.", año: 2015 },
  { nombre: "Allure Homme", tipo: "Hombre", uso: "Uso diario", olor: "Amaderado-especiado con cítricos, vainilla y un fondo elegante.", año: 1999 },
  { nombre: "Allure Homme Sport", tipo: "Hombre", uso: "Uso diario", olor: "Fresco-cítrico con toque acuático y limpio, tipo lujo deportivo.", año: 2004 },
  { nombre: "Bad Boy", tipo: "Hombre", uso: "Uso nocturno", olor: "Especiado-amaderado con cacao, haba tonka y una vibra moderna.", año: 2019 },
  { nombre: "Bad Boy Cobalt", tipo: "Hombre", uso: "Ocasiones especiales", olor: "Aromático-mineral con pimienta, geranio, trufa y maderas.", año: 2022 },
  { nombre: "Black XS", tipo: "Hombre", uso: "Uso nocturno", olor: "Dulce-frutal oscuro con toque rockero, especias y madera.", año: 2005 },
  { nombre: "Black XS L'Exces", tipo: "Hombre", uso: "Uso nocturno", olor: "Más intenso, dulce y nocturno; canela, vainilla y maderas.", año: 2012 },
  { nombre: "Bleu de Chanel", tipo: "Hombre", uso: "Ocasiones especiales", olor: "Amaderado-aromático limpio, incienso suave, cítrico y elegante.", año: 2010 },
  { nombre: "By the Fireplace", tipo: "Unisex", uso: "Ocasiones especiales", olor: "Ahumado-dulce: castañas, vainilla y fuego de chimenea.", año: 2015 },
  { nombre: "CH Men", tipo: "Hombre", uso: "Uso nocturno", olor: "Dulce-cuero con azúcar, madera y un aire elegante-casual.", año: 2009 },
  { nombre: "CK Be", tipo: "Unisex", uso: "Uso diario", olor: "Amaderado-limpio, suave, jabonoso y cercano a la piel.", año: 1996 },
  { nombre: "Eternity for Men", tipo: "Hombre", uso: "Uso diario", olor: "Verde-aromático, limpio, clásico y formal-casual.", año: 1989 },
  { nombre: "CK IN2U for Him", tipo: "Hombre", uso: "Uso diario", olor: "Fresco-aromático con cítrico, cacao suave y madera limpia.", año: 2007 },
  { nombre: "CK One", tipo: "Unisex", uso: "Uso diario", olor: "Cítrico limpio, té y almizcles; minimalista y noventero.", año: 1994 },
  { nombre: "Cool Water", tipo: "Hombre", uso: "Uso diario", olor: "Acuático-aromático, mentolado, verde y muy fresco.", año: 1988 },
  { nombre: "Dior Homme", tipo: "Hombre", uso: "Ocasiones especiales", olor: "Amaderado limpio con cacao/iris, elegante y serio.", año: 2005 },
  { nombre: "Dior Homme Intense", tipo: "Hombre", uso: "Ocasiones especiales", olor: "Iris, cacao y maderas; aterciopelado, elegante y seductor.", año: 2007 },
  { nombre: "Dolce & Gabbana Pour Homme", tipo: "Hombre", uso: "Uso diario", olor: "Aromático-cítrico, limpio, con tabaco suave y lavanda.", año: 1994 },
  { nombre: "Erba Pura", tipo: "Unisex", uso: "Ocasiones especiales", olor: "Frutal-musgoso muy potente, dulce, brillante y expansivo.", año: 2019 },
  { nombre: "Eros", tipo: "Hombre", uso: "Uso nocturno", olor: "Dulce-aromático con menta, vainilla y tonka; muy llamativo.", año: 2012 },
  { nombre: "Eros Flame", tipo: "Hombre", uso: "Uso nocturno", olor: "Más especiado y cálido que Eros; cítricos rojos, vainilla y maderas.", año: 2018 },
  { nombre: "Esencia Loewe", tipo: "Hombre", uso: "Uso diario", olor: "Aromático-herbal clásico, verde, serio y muy masculino.", año: 1988 },
  { nombre: "Fucking Fabulous", tipo: "Unisex", uso: "Ocasiones especiales", olor: "Cuero, almendra amarga, tonka y salvia; lujoso y provocador.", año: 2017 },
  { nombre: "Gucci Guilty Pour Homme", tipo: "Hombre", uso: "Uso nocturno", olor: "Aromático-lavanda con limón y un fondo amaderado moderno.", año: 2011 },
  { nombre: "Hugo Man", tipo: "Hombre", uso: "Uso diario", olor: "Verde-frutal fresco, manzana y hojas, casual y noventero.", año: 1995 },
  { nombre: "Boss Bottled", tipo: "Hombre", uso: "Uso diario", olor: "Manzana, canela y maderas; masculino comercial muy pulido.", año: 1998 },
  { nombre: "Invictus", tipo: "Hombre", uso: "Uso diario", olor: "Marino-dulce con pomelo y ámbar gris moderno.", año: 2013 },
  { nombre: "Invictus Legend", tipo: "Hombre", uso: "Uso nocturno", olor: "Más salado, especiado y denso que el original.", año: 2019 },
  { nombre: "Invictus Victory", tipo: "Hombre", uso: "Uso nocturno", olor: "Vainilla, ámbar y lavanda sobre un fondo muy dulce y potente.", año: 2021 },
  { nombre: "Kirkè", tipo: "Unisex", uso: "Ocasiones especiales", olor: "Frutal tropical y almizclado, muy dulce y expansivo.", año: 2015 },
  { nombre: "Le Beau", tipo: "Hombre", uso: "Ocasiones especiales", olor: "Coco, tonka y maderas; tropical dulce y sensual.", año: 2019 },
  { nombre: "Le Male", tipo: "Hombre", uso: "Uso nocturno", olor: "Lavanda, vainilla y menta; dulce-barbershop, icónico.", año: 1995 },
  { nombre: "Le Male Elixir", tipo: "Hombre", uso: "Uso nocturno", olor: "Miel, vainilla, tabaco y lavanda; muy dulce y denso.", año: 2023 },
  { nombre: "Le Male Elixir Absolu", tipo: "Hombre", uso: "Ocasiones especiales", olor: "Lavanda, ciruela y tonka; más rico, cremoso y dorado.", año: 2025 },
  { nombre: "L'Eau d'Issey Pour Homme", tipo: "Hombre", uso: "Uso diario", olor: "Yuzu, cítricos y maderas limpias; fresco serio y elegante.", año: 1994 },
  { nombre: "Light Blue Pour Homme", tipo: "Hombre", uso: "Uso diario", olor: "Cítrico marino, verano puro, limpio y salino.", año: 2007 },
  { nombre: "Lost Cherry", tipo: "Unisex", uso: "Ocasiones especiales", olor: "Cereza licorosa, almendra y vainilla; sensual y gourmand.", año: 2018 },
  { nombre: "Prada Luna Rossa", tipo: "Hombre", uso: "Uso diario", olor: "Aromático limpio, lavanda y frescura jabonosa moderna.", año: 2012 },
  { nombre: "L'Homme Prada", tipo: "Hombre", uso: "Uso diario", olor: "Jabonoso-premium, iris limpio, neroli y madera suave.", año: 2016 },
  { nombre: "Montblanc Legend", tipo: "Hombre", uso: "Uso diario", olor: "Aromático-frutal limpio, muy versátil y amistoso.", año: 2011 },
  { nombre: "Montblanc Explorer", tipo: "Hombre", uso: "Uso diario", olor: "Amaderado-ambarado, bergamota y ambroxan; aventurero y moderno.", año: 2019 },
  { nombre: "Neroli Portofino", tipo: "Unisex", uso: "Uso diario", olor: "Neroli, cítricos y almizcles; limpio, mediterráneo y lujoso.", año: 2011 },
  { nombre: "Noir Extreme", tipo: "Hombre", uso: "Ocasiones especiales", olor: "Ámbar especiado con kulfi, vainilla y maderas; muy elegante.", año: 2015 },
  { nombre: "Nuit d'Issey", tipo: "Hombre", uso: "Uso nocturno", olor: "Incienso, especias y maderas oscuras; serio y masculino.", año: 2014 },
  { nombre: "Ombre Leather", tipo: "Unisex", uso: "Ocasiones especiales", olor: "Cuero limpio, violeta y ámbar; moderno y lujoso.", año: 2018 },
  { nombre: "One Million", tipo: "Hombre", uso: "Uso nocturno", olor: "Dulce-especiado con canela, cuero y ámbar; muy llamativo.", año: 2008 },
  { nombre: "One Million Lucky", tipo: "Hombre", uso: "Uso nocturno", olor: "Avellana, miel y maderas; dulce, juguetón y juvenil.", año: 2018 },
  { nombre: "One Million Elixir", tipo: "Hombre", uso: "Uso nocturno", olor: "Frutal-dulce con vainilla y madera cremosa; intenso.", año: 2022 },
  { nombre: "Givenchy Play", tipo: "Hombre", uso: "Uso diario", olor: "Cítrico-amaderado con toque de café; relajado y moderno.", año: 2008 },
  { nombre: "Pure XS", tipo: "Hombre", uso: "Uso nocturno", olor: "Vainilla, mirra y especias; dulce-sexual y atrevido.", año: 2017 },
  { nombre: "Rose Prick", tipo: "Unisex", uso: "Ocasiones especiales", olor: "Rosa especiada, pachulí y almizcles; floral punzante y elegante.", año: 2020 },
  { nombre: "Sauvage", tipo: "Hombre", uso: "Uso diario", olor: "Cítrico-ambarado con pimienta y ambroxan; muy versátil.", año: 2015 },
  { nombre: "Sauvage Elixir", tipo: "Hombre", uso: "Uso nocturno", olor: "Especiado, licoroso, lavanda y maderas; muy intenso.", año: 2021 },
  { nombre: "Scandal Pour Homme", tipo: "Hombre", uso: "Uso nocturno", olor: "Caramelo, salvia y tonka; dulce y provocador.", año: 2021 },
  { nombre: "Spicebomb", tipo: "Hombre", uso: "Uso nocturno", olor: "Explosión de especias, tabaco y cuero suave.", año: 2012 },
  { nombre: "Spicebomb Extreme", tipo: "Hombre", uso: "Uso nocturno", olor: "Vainilla, tabaco y especias cálidas; más oscuro y denso.", año: 2015 },
  { nombre: "Stronger With You", tipo: "Hombre", uso: "Uso nocturno", olor: "Dulce-cálido con castaña, vainilla y especias.", año: 2017 },
  { nombre: "Stronger With You Intensely", tipo: "Hombre", uso: "Uso nocturno", olor: "Versión más densa, ambarada y vainillosa del original.", año: 2019 },
  { nombre: "Tobacco Vanille", tipo: "Unisex", uso: "Ocasiones especiales", olor: "Tabaco, vainilla y especias; opulento y lujoso.", año: 2007 },
  { nombre: "Tommy", tipo: "Hombre", uso: "Uso diario", olor: "Cítrico-aromático jovial, limpio y muy noventero.", año: 1995 },
  { nombre: "Tuscan Leather", tipo: "Unisex", uso: "Ocasiones especiales", olor: "Cuero oscuro, frambuesa y azafrán; potente y lujoso.", año: 2007 },
  { nombre: "Ultra Male", tipo: "Hombre", uso: "Uso nocturno", olor: "Pera, vainilla y canela; dulce sexy y muy proyectivo.", año: 2015 },
  { nombre: "Valentino Uomo", tipo: "Hombre", uso: "Ocasiones especiales", olor: "Avellana, cacao y cuero suave; elegante y seductor.", año: 2014 },
  { nombre: "Versace Pour Homme", tipo: "Hombre", uso: "Uso diario", olor: "Cítrico limpio, acuático y muy fácil de usar.", año: 2008 },
  { nombre: "Wanted", tipo: "Hombre", uso: "Uso nocturno", olor: "Jengibre, cardamomo y madera dulce; carismático y moderno.", año: 2016 },
  { nombre: "Y", tipo: "Hombre", uso: "Uso diario", olor: "Manzana, bergamota, salvia y ambroxan; fresco moderno de oficina.", año: 2017 },
  { nombre: "Erba Gold", tipo: "Unisex", uso: "Ocasiones especiales", olor: "Cítricos brillantes, frutas y vainilla cremosa; lujoso y radiante.", año: 2023 },
  { nombre: "Santal 33", tipo: "Unisex", uso: "Ocasiones especiales", olor: "Sándalo, cuero, violeta y humo; seco, artístico y reconocible.", año: 2011 },
  { nombre: "Toy Boy", tipo: "Hombre", uso: "Uso nocturno", olor: "Rosa, pimienta y pera con fondo amaderado; raro y moderno.", año: 2019 },
];

const QUESTIONS = [
  {
    id: 1,
    pregunta: "¿Cómo describirías tu personalidad en una frase?",
    tipo: "texto",
    placeholder: "Ej: soy introvertido pero intenso cuando me conocen...",
  },
  {
    id: 2,
    pregunta: "¿En qué momento del día o contexto usarías más el perfume?",
    tipo: "opciones",
    opciones: [
      "Todos los días, en el trabajo o la facultad",
      "Salidas nocturnas, boliches o citas",
      "Ocasiones especiales: cenas, eventos, viajes",
      "Un poco de todo, quiero algo versátil",
    ],
  },
  {
    id: 3,
    pregunta: "¿Qué tipo de olores te generan más atracción?",
    tipo: "opciones",
    opciones: [
      "Frescos, marinos, cítricos y limpios",
      "Dulces, cálidos, vainillosos o gourmand",
      "Amaderados, cuero, especiados y oscuros",
      "Aromáticos clásicos: lavanda, hierbas, polvos",
    ],
  },
  {
    id: 4,
    pregunta: "¿Qué tan importante es para vos la proyección (que te huelan desde lejos)?",
    tipo: "opciones",
    opciones: [
      "Prefiero algo discreto, que solo lo perciba quien se acerque",
      "Algo moderado está bien",
      "Me gusta dejar rastro, que se note cuando entro a un lugar",
      "No me importa, lo que me importa es el aroma en sí",
    ],
  },
  {
    id: 5,
    pregunta: "¿Cómo te vestís habitualmente?",
    tipo: "opciones",
    opciones: [
      "Casual: jean, remera, zapatillas",
      "Formal o business: camisa, pantalón, ropa de trabajo",
      "Elegante o arreglado cuando salgo de noche",
      "Me gusta mezclar estilos según el momento",
    ],
  },
  {
    id: 6,
    pregunta: "¿Qué tipo de música escuchás más?",
    tipo: "opciones",
    opciones: [
      "Electrónica, reggaeton, trap o música de fiesta",
      "Rock, metal, indie o música alternativa",
      "Jazz, soul, clásica o música más sofisticada",
      "Pop, tropical, cumbia o música alegre",
    ],
  },
  {
    id: 7,
    pregunta: "Si tuvieras que elegir un paisaje que te representa, ¿cuál sería?",
    tipo: "opciones",
    opciones: [
      "La costa del mar en verano, sol y sal",
      "Un bosque o montaña: frescura, naturaleza y silencio",
      "Una ciudad de noche: luces, movimiento y misterio",
      "Un interior acogedor: chimenea, madera y calidez",
    ],
  },
  {
    id: 8,
    pregunta: "¿Cómo reaccionás ante el riesgo o lo desconocido?",
    tipo: "opciones",
    opciones: [
      "Me atrae, busco experiencias intensas y únicas",
      "Lo acepto si tiene sentido, no me freno por miedo",
      "Prefiero lo conocido, la estabilidad me da seguridad",
      "Depende del momento, soy selectivo",
    ],
  },
  {
    id: 9,
    pregunta: "¿Qué palabra te define mejor en lo social?",
    tipo: "opciones",
    opciones: [
      "Magnético / Seductor",
      "Confiable / Tranquilo",
      "Creativo / Original",
      "Intenso / Apasionado",
    ],
  },
  {
    id: 10,
    pregunta: "¿Hay algún perfume que hayas usado y amado, o algún olor que te marque especialmente?",
    tipo: "texto",
    placeholder: "Ej: siempre me gustó el olor a madera mojada, o usé Invictus y me encantó...",
  },
];

const USAGE_ICONS = {
  "Uso diario": "☀️",
  "Uso nocturno": "🌙",
  "Ocasiones especiales": "✨",
};

export default function App() {
  const [step, setStep] = useState("intro"); // intro | quiz | loading | results
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [animating, setAnimating] = useState(false);
  const textRef = useRef(null);

  const goNext = (answer) => {
    const newAnswers = { ...answers, [QUESTIONS[currentQ].id]: answer };
    setAnswers(newAnswers);

    setAnimating(true);
    setTimeout(() => {
      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ(currentQ + 1);
        setAnimating(false);
      } else {
        setStep("loading");
        analyzeProfile(newAnswers);
      }
    }, 350);
  };

  const analyzeProfile = async (finalAnswers) => {
    const answersText = QUESTIONS.map((q) => {
      const ans = finalAnswers[q.id];
      return `Pregunta ${q.id}: ${q.pregunta}\nRespuesta: ${ans || "(sin respuesta)"}`;
    }).join("\n\n");

    const perfumesText = PERFUMES.map(
      (p) => `- ${p.nombre} (${p.tipo}, ${p.uso}, ${p.año}): ${p.olor}`
    ).join("\n");

    const prompt = `Eres un experto en perfumería masculina y psicología del consumidor. Un usuario respondió el siguiente cuestionario de personalidad:

${answersText}

A continuación está la lista completa de perfumes disponibles:
${perfumesText}

TAREA: Analiza profundamente la personalidad del usuario basándote en sus respuestas y selecciona los 5 perfumes más apropiados para él de la lista. Para cada uno, explica por qué se alinea con su perfil.

Responde EXCLUSIVAMENTE en formato JSON válido, sin ningún texto antes ni después:
{
  "perfil": "descripción del perfil de personalidad del usuario en 3-4 oraciones, de forma directa y personal (hablale de vos a vos)",
  "recomendaciones": [
    {
      "nombre": "nombre exacto del perfume (debe coincidir exactamente con la lista)",
      "fit_score": número del 1 al 100 indicando el nivel de match,
      "razon": "explicación personal de por qué este perfume encaja con su personalidad (2-3 oraciones)",
      "momento": "cuándo/cómo llevarlo según su perfil"
    }
  ]
}`;

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1500,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      if (!response.ok) {
        const errBody = await response.text();
        throw new Error(`HTTP ${response.status}: ${errBody}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message || JSON.stringify(data.error));
      }

      const text = data.content?.map((b) => b.text || "").join("") || "";
      // Extract JSON robustly: find first { and last }
      const start = text.indexOf("{");
      const end = text.lastIndexOf("}");
      if (start === -1 || end === -1) throw new Error("No se encontró JSON en la respuesta.");
      const jsonStr = text.slice(start, end + 1);
      const parsed = JSON.parse(jsonStr);
      setResults(parsed);
      setStep("results");
    } catch (err) {
      setError(`Error: ${err.message}`);
      setStep("quiz");
    }
  };

  const reset = () => {
    setStep("intro");
    setCurrentQ(0);
    setAnswers({});
    setResults(null);
    setError(null);
    setAnimating(false);
  };

  const q = QUESTIONS[currentQ];
  const progress = ((currentQ) / QUESTIONS.length) * 100;

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0a0f 0%, #12111a 50%, #0d0c15 100%)",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#e8e0d4",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        background: "radial-gradient(ellipse at 20% 20%, rgba(180,140,90,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(120,80,160,0.05) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "fixed", top: "-200px", right: "-200px", width: "500px", height: "500px",
        border: "1px solid rgba(180,140,90,0.08)", borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "fixed", bottom: "-150px", left: "-150px", width: "400px", height: "400px",
        border: "1px solid rgba(180,140,90,0.06)", borderRadius: "50%", pointerEvents: "none",
      }} />

      <div style={{ width: "100%", maxWidth: "620px", position: "relative", zIndex: 1 }}>

        {/* INTRO */}
        {step === "intro" && (
          <div style={{ textAlign: "center", animation: "fadeIn 0.8s ease" }}>
            <div style={{
              fontSize: "48px", marginBottom: "8px",
              filter: "drop-shadow(0 0 20px rgba(180,140,90,0.4))"
            }}>◈</div>
            <h1 style={{
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: "normal",
              letterSpacing: "0.12em",
              color: "#c9a96e",
              marginBottom: "6px",
              textTransform: "uppercase",
            }}>
              Tu Aroma
            </h1>
            <p style={{
              fontSize: "13px", letterSpacing: "0.3em", color: "#7a6e5e",
              textTransform: "uppercase", marginBottom: "32px",
            }}>
              Análisis de Perfil · Perfumería
            </p>
            <div style={{
              width: "40px", height: "1px", background: "linear-gradient(90deg, transparent, #c9a96e, transparent)",
              margin: "0 auto 32px",
            }} />
            <p style={{
              fontSize: "16px", lineHeight: "1.8", color: "#b8aa9a",
              marginBottom: "40px", maxWidth: "460px", margin: "0 auto 40px",
            }}>
              Respondé 10 preguntas y la inteligencia artificial analizará tu personalidad para recomendarte los perfumes más afines a vos de nuestra lista.
            </p>
            <button onClick={() => setStep("quiz")} style={{
              background: "transparent",
              border: "1px solid #c9a96e",
              color: "#c9a96e",
              padding: "14px 48px",
              fontSize: "13px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: "inherit",
            }}
              onMouseEnter={e => {
                e.target.style.background = "rgba(201,169,110,0.1)";
                e.target.style.boxShadow = "0 0 30px rgba(201,169,110,0.2)";
              }}
              onMouseLeave={e => {
                e.target.style.background = "transparent";
                e.target.style.boxShadow = "none";
              }}
            >
              Comenzar
            </button>
          </div>
        )}

        {/* QUIZ */}
        {step === "quiz" && (
          <div>
            {/* Progress */}
            <div style={{ marginBottom: "40px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#7a6e5e", textTransform: "uppercase" }}>
                  Pregunta {currentQ + 1} de {QUESTIONS.length}
                </span>
                <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#c9a96e" }}>
                  {Math.round(progress)}%
                </span>
              </div>
              <div style={{
                height: "1px", background: "rgba(255,255,255,0.08)", position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", left: 0, top: 0, height: "100%",
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #c9a96e, #e8cc9a)",
                  transition: "width 0.5s ease",
                  boxShadow: "0 0 8px rgba(201,169,110,0.6)",
                }} />
              </div>
            </div>

            {/* Question */}
            <div style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(10px)" : "translateY(0)",
              transition: "all 0.3s ease",
            }}>
              <p style={{
                fontSize: "11px", letterSpacing: "0.25em", color: "#c9a96e",
                textTransform: "uppercase", marginBottom: "16px",
              }}>
                ◈ &nbsp;{String(currentQ + 1).padStart(2, "0")}
              </p>
              <h2 style={{
                fontSize: "clamp(18px, 3.5vw, 24px)",
                fontWeight: "normal",
                lineHeight: "1.5",
                color: "#e8e0d4",
                marginBottom: "32px",
                letterSpacing: "0.02em",
              }}>
                {q.pregunta}
              </h2>

              {q.tipo === "opciones" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {q.opciones.map((op, i) => (
                    <button key={i} onClick={() => goNext(op)} style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(201,169,110,0.2)",
                      color: "#c8bba8",
                      padding: "16px 22px",
                      textAlign: "left",
                      fontSize: "15px",
                      lineHeight: "1.5",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      fontFamily: "inherit",
                      letterSpacing: "0.01em",
                    }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = "rgba(201,169,110,0.08)";
                        e.currentTarget.style.borderColor = "rgba(201,169,110,0.6)";
                        e.currentTarget.style.color = "#e8d5b0";
                        e.currentTarget.style.paddingLeft = "28px";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                        e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)";
                        e.currentTarget.style.color = "#c8bba8";
                        e.currentTarget.style.paddingLeft = "22px";
                      }}
                    >
                      <span style={{ color: "#c9a96e", marginRight: "12px", fontSize: "12px" }}>
                        {String.fromCharCode(65 + i)}.
                      </span>
                      {op}
                    </button>
                  ))}
                </div>
              )}

              {q.tipo === "texto" && (
                <div>
                  <textarea ref={textRef} placeholder={q.placeholder} style={{
                    width: "100%", minHeight: "120px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(201,169,110,0.2)",
                    color: "#e8e0d4",
                    padding: "16px",
                    fontSize: "15px",
                    lineHeight: "1.6",
                    fontFamily: "inherit",
                    resize: "vertical",
                    outline: "none",
                    boxSizing: "border-box",
                    letterSpacing: "0.01em",
                  }}
                    onFocus={e => e.target.style.borderColor = "rgba(201,169,110,0.6)"}
                    onBlur={e => e.target.style.borderColor = "rgba(201,169,110,0.2)"}
                  />
                  <button onClick={() => goNext(textRef.current?.value || "")} style={{
                    marginTop: "16px",
                    background: "transparent",
                    border: "1px solid #c9a96e",
                    color: "#c9a96e",
                    padding: "12px 36px",
                    fontSize: "12px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "all 0.25s ease",
                  }}
                    onMouseEnter={e => e.target.style.background = "rgba(201,169,110,0.1)"}
                    onMouseLeave={e => e.target.style.background = "transparent"}
                  >
                    {currentQ < QUESTIONS.length - 1 ? "Siguiente →" : "Analizar mi perfil →"}
                  </button>
                </div>
              )}
            </div>

        {error && (
          <div style={{
            marginTop: "20px", padding: "14px 18px",
            border: "1px solid rgba(220,80,80,0.3)",
            background: "rgba(220,80,80,0.05)",
            color: "#e07070", fontSize: "13px", lineHeight: "1.6",
            wordBreak: "break-word",
          }}>
            ⚠ {error}
          </div>
        )}
          </div>
        )}

        {/* LOADING */}
        {step === "loading" && (
          <div style={{ textAlign: "center" }}>
            <div style={{
              width: "60px", height: "60px", margin: "0 auto 32px",
              border: "1px solid rgba(201,169,110,0.3)",
              borderTop: "1px solid #c9a96e",
              borderRadius: "50%",
              animation: "spin 1.5s linear infinite",
            }} />
            <p style={{
              fontSize: "13px", letterSpacing: "0.25em", color: "#7a6e5e",
              textTransform: "uppercase",
            }}>
              Analizando tu perfil...
            </p>
            <p style={{ fontSize: "14px", color: "#5a4e3e", marginTop: "12px" }}>
              La IA está estudiando tus respuestas y seleccionando los perfumes ideales
            </p>
          </div>
        )}

        {/* RESULTS */}
        {step === "results" && results && (
          <div style={{ animation: "fadeIn 0.8s ease" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>◈</div>
              <h2 style={{
                fontSize: "clamp(22px, 4vw, 32px)", fontWeight: "normal",
                color: "#c9a96e", letterSpacing: "0.1em", textTransform: "uppercase",
                marginBottom: "24px",
              }}>
                Tu Perfil Olfativo
              </h2>
              <div style={{
                background: "rgba(201,169,110,0.05)",
                border: "1px solid rgba(201,169,110,0.15)",
                padding: "24px 28px",
                marginBottom: "40px",
              }}>
                <p style={{
                  fontSize: "16px", lineHeight: "1.8", color: "#c8bba8",
                  fontStyle: "italic", letterSpacing: "0.02em",
                }}>
                  {results.perfil}
                </p>
              </div>
            </div>

            <div style={{
              fontSize: "11px", letterSpacing: "0.25em", color: "#7a6e5e",
              textTransform: "uppercase", textAlign: "center", marginBottom: "24px",
            }}>
              — Perfumes recomendados para vos —
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {results.recomendaciones?.map((rec, i) => {
                const perfume = PERFUMES.find(p => p.nombre === rec.nombre);
                return (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(201,169,110,0.15)",
                    padding: "24px",
                    position: "relative",
                    overflow: "hidden",
                    animation: `fadeIn 0.6s ease ${i * 0.15}s both`,
                  }}>
                    {/* Rank */}
                    <div style={{
                      position: "absolute", top: "16px", right: "20px",
                      fontSize: "32px", fontWeight: "bold",
                      color: "rgba(201,169,110,0.08)",
                      lineHeight: 1, userSelect: "none",
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "14px" }}>
                      <div>
                        <h3 style={{
                          fontSize: "18px", fontWeight: "normal",
                          color: "#e8d5b0", letterSpacing: "0.04em",
                          marginBottom: "6px",
                        }}>
                          {rec.nombre}
                        </h3>
                        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                          {perfume && (
                            <>
                              <span style={{
                                fontSize: "11px", color: "#7a6e5e",
                                letterSpacing: "0.15em", textTransform: "uppercase",
                              }}>
                                {perfume.tipo}
                              </span>
                              <span style={{ fontSize: "11px", color: "#5a4e3e" }}>·</span>
                              <span style={{
                                fontSize: "11px", color: "#7a6e5e",
                                letterSpacing: "0.1em",
                              }}>
                                {USAGE_ICONS[perfume.uso]} {perfume.uso}
                              </span>
                              <span style={{ fontSize: "11px", color: "#5a4e3e" }}>·</span>
                              <span style={{ fontSize: "11px", color: "#5a4e3e" }}>
                                {perfume.año}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Match score */}
                    <div style={{ marginBottom: "14px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                        <span style={{ fontSize: "10px", color: "#7a6e5e", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                          Compatibilidad
                        </span>
                        <span style={{ fontSize: "12px", color: "#c9a96e" }}>
                          {rec.fit_score}%
                        </span>
                      </div>
                      <div style={{ height: "2px", background: "rgba(255,255,255,0.06)" }}>
                        <div style={{
                          height: "100%",
                          width: `${rec.fit_score}%`,
                          background: "linear-gradient(90deg, #8a6a30, #c9a96e)",
                          boxShadow: "0 0 6px rgba(201,169,110,0.4)",
                        }} />
                      </div>
                    </div>

                    {perfume && (
                      <p style={{
                        fontSize: "13px", color: "#6a5e4e", fontStyle: "italic",
                        marginBottom: "12px", letterSpacing: "0.01em",
                      }}>
                        "{perfume.olor}"
                      </p>
                    )}

                    <p style={{
                      fontSize: "14px", lineHeight: "1.7", color: "#a89a88",
                      marginBottom: "10px",
                    }}>
                      {rec.razon}
                    </p>

                    <p style={{
                      fontSize: "12px", color: "#c9a96e", letterSpacing: "0.05em",
                      borderTop: "1px solid rgba(201,169,110,0.1)", paddingTop: "10px",
                    }}>
                      🕐 {rec.momento}
                    </p>
                  </div>
                );
              })}
            </div>

            <div style={{ textAlign: "center", marginTop: "48px" }}>
              <button onClick={reset} style={{
                background: "transparent",
                border: "1px solid rgba(201,169,110,0.4)",
                color: "#7a6e5e",
                padding: "12px 36px",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.25s ease",
              }}
                onMouseEnter={e => {
                  e.target.style.borderColor = "#c9a96e";
                  e.target.style.color = "#c9a96e";
                }}
                onMouseLeave={e => {
                  e.target.style.borderColor = "rgba(201,169,110,0.4)";
                  e.target.style.color = "#7a6e5e";
                }}
              >
                ↺ Volver a empezar
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::placeholder { color: #4a3e2e; }
        textarea { background: rgba(255,255,255,0.02) !important; }
      `}</style>
    </div>
  );
}
