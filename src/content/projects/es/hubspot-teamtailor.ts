import type { ProjectContent } from "../../types";

export default {
  // Quitamos el <br/> para evitar que se renderice como texto plano en la UI
  title: "Sincronización HubSpot ➔ Teamtailor",
  theme: "dark",
  
  // Lista ordenada de tecnologías reales mapeadas con tu nuevo catálogo
  tags: ["python", "hubspot", "teamtailor", "apps-script"],
  videoBorder: false,
  
  description:
    "Diseño y desarrollo de una infraestructura ETL y sincronización de datos de manera bidireccional mediante microservicios en Python y receptores asíncronos en Google Apps Script, automatizando la gestión de expedientes en Google Drive API y procesando payloads JSON para flujos de alta prioridad.<br/><br/>Reducción de la estructura operativa en un 33% mediante un sistema resiliente con tolerancia a fallas, mecanismos de recuperación automática ante errores y monitoreo continuo de logs críticos notificados en tiempo real vía Telegram API.",
  components: [
    {
      type: "text",
      props: {
        title: "Stack Tecnológico",
        text: "Python (Scripts de Automatización), HubSpot API, Teamtailor API, Google Apps Script, Google Drive API, Webhooks nativos, Telegram API (Logs/Alertas)",
      },
    },
    {
      type: "text",
      props: {
        title: "Características Clave",
        text: "Sincronización bidireccional en tiempo real, arquitectura tolerante a fallas, persistencia y recuperación automática de errores, receptor de eventos basado en Apps Script, alertas asíncronas de infraestructura",
      },
    },
    {
      type: "text",
      props: {
        title: "Impacto Empresarial",
        text: "Eliminó por completo la carga manual de datos, automatizó el resguardo seguro de expedientes digitales en Drive y centralizó el control de excepciones operativas reduciendo tiempos muertos.",
      },
    },
  ],
} as const satisfies ProjectContent;