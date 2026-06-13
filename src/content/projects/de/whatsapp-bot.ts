import type { ProjectContent } from "../../types";

export default {
  title: "Web & Omnichannel AI Bot",
  theme: "dark",
  tags: ["node", "javascript", "websockets", "html"],
  videoBorder: false,
  description:
    "Intelligenter Konversationsagent, der mit WhatsApp Business API verbunden ist, mit Verarbeitung natürlicher Sprache, strukturierter JSON-Extraktion und automatischer Kalenderplanung.<br/><br/>Bearbeitet Kundenanfragen in natürlicher Sprache, extrahiert Intent und Entitäten und plant automatisch Termine mit nahtloser CRM-Integration.",
  components: [
    {
      type: "text",
      props: {
        title: "Tech Stack",
        text: "WhatsApp Business API, NLP-Verarbeitung, JSON-Parsing, Kalender-APIs, Nachrichtenbearbeitung",
      },
    },
    {
      type: "text",
      props: {
        title: "Hauptfunktionen",
        text: "Verständnis natürlicher Sprache, strukturierte Datenextraktion, Auto-Scheduling, Mehrsprachigkeit, Verlaufspeicherung",
      },
    },
    {
      type: "text",
      props: {
        title: "Geschäftliche Auswirkung",
        text: "Verarbeitet 1K+ Anfragen/Monat, reduziert Planungszeit um 80%, verbessert Kundenresponse-Zeit auf <2min",
      },
    },
  ],
} as const satisfies ProjectContent;
