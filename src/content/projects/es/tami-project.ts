import type { ProjectContent } from "../../types";

export default {
  title: "Proyecto T.A.M.I.<br/>Trend Analysis & Market Intelligence",
  theme: "dark",
  tags: ["python", "ai", "meta", "tiktok"],
  videoBorder: false,
  description:
    "Conceptualización y arquitectura de un motor automatizado de inteligencia de mercado y Prop-Tech especializado en el sector inmobiliario.<br/><br/>La arquitectura implementa módulos avanzados de Web Scraping en Python y consumo de la API de Google Trends para escanear el entorno digital en tiempo real. Los datos recolectados se limpian y estructuran en payloads JSON optimizados que alimentan, mediante API, a Modelos de Lenguaje (LLMs); el pipeline incluye un flujo arquitectónico de filtrado estricto que alinea automáticamente los insights generados con las directrices comerciales e identidad corporativa de la marca.<br/><br/>Esta solución reduce drásticamente los ciclos de investigación y planeación estratégica, optimizando tiempos de procesamiento históricos de semanas a menos de 24 horas de forma autónoma.",
  components: [
    {
      type: "text",
      props: {
        title: "Stack Tecnológico",
        text: "Python (Scripts de Automatización), Orquestación de Modelos de Lenguaje (LLM APIs), Google Trends API, Web Scraping Avanzado (Meta & TikTok Data), Estructuración de Payloads (JSON)",
      },
    },
    {
      type: "text",
      props: {
        title: "Características Clave",
        text: "Escaneo automatizado de tendencias de mercado, pipeline de IA desacoplado, motor de limpieza y estructuración de datos masivos, filtro algorítmico de identidad de marca, optimización de flujos creativos",
      },
    },
    {
      type: "text",
      props: {
        title: "Impacto Empresarial",
        text: "Transforma datos crudos en inteligencia comercial aplicada directamente a desarrollos inmobiliarios. Mitiga retrasos operativos al automatizar la generación de paquetes de contenido estratégico basados en datos duros y reduce el tiempo de análisis de mercado a menos de 24 horas.",
      },
    },
  ],
} as const satisfies ProjectContent;