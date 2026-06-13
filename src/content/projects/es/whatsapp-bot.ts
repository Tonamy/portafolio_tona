import type { ProjectContent } from "../../types";

export default {
  title: "Web & Omnichannel AI Bot",
  theme: "dark",
  
  // Ponemos las tecnologías web y tiempo real al frente del diseño
  tags: ["javascript", "websockets", "python", "html"],
  videoBorder: false,
  
  description:
    "Diseño y desarrollo End-to-End de un agente inteligente interactivo embebido directamente en entornos web, con arquitectura modular capaz de escalar hacia flujos omnicanal como WhatsApp Business API de forma transparente.<br/><br/>El sistema implementa lógica avanzada en JavaScript y WebSockets para mantener una comunicación en tiempo real, integrando Inteligencia Artificial para el procesamiento de lenguaje natural (NLP), comprensión de intenciones y generación de respuestas fluidas. El agente limpia y parsea datos estructurados (JSON/RegEx), evaluando perfiles bajo criterios complejos de negocio para realizar procesos de auto-calendarización autónoma e integración con entornos CRM sin intervención humana.<br/>",
  components: [
    {
      type: "text",
      props: {
        title: "Stack Tecnológico",
        text: "Modelos de Inteligencia Artificial & Procesamiento de Lenguaje Natural (NLP), JavaScript (Cliente/Servidor), WebSockets (Tiempo Real), Python (Automatización Backend), Motores de Parseo (JSON / RegEx Avanzado), APIs REST Multi-CRM, Integración de Agendas Colectivas",
      },
    },
    {
      type: "text",
      props: {
        title: "Características Clave",
        text: "Widget interactivo nativo para páginas web, procesamiento y comprensión de lenguaje natural, arquitectura desacoplada con capacidad de despliegue omnicanal (WhatsApp/Web), calificación automatizada basada en reglas de negocio, auto-calendarización en tiempo real",
      },
    },
    {
      type: "text",
      props: {
        title: "Impacto Empresarial",
        text: "Procesamiento masivo de consultas mensuales con tiempos de respuesta reducidos a <2 minutos directamente desde el portal web. Eliminó el trabajo manual repetitivo en la fase de contacto inicial, disminuyó los tiempos muertos de agendamiento y contribuyó directamente a la reducción del 33% en costos operativos de la estructura del equipo.",
      },
    },
  ],
} as const satisfies ProjectContent;