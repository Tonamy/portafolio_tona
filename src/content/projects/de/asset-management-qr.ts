import type { ProjectContent } from "../../types";

export default {
  title: "Asset Management QR System",
  theme: "dark",
  tags: ["node", "javascript", "html", "postgresql"],
  videoBorder: false,
  description:
    "Asynchrone Datenpipeline, die Odoo ERP mit isolierten Industrieservern verbindet und dynamische QR-Code-Generierung für die physische Asset-Verfolgung ermöglicht.<br/><br/>Verwaltet den Asset-Lebenszyklus von der Unternehmens­datenbank bis zum Feldeinsatz mit Echtzeit-QR-Updates, Offline-First-Design und sicherer isolierter Netzwerkbereitstellung.",
  components: [
    {
      type: "text",
      props: {
        title: "Tech Stack",
        text: "Python (Async), Odoo ERP API, QR-Code-Generierung, REST APIs, isolierte Netzwerk-Architektur",
      },
    },
    {
      type: "text",
      props: {
        title: "Hauptfunktionen",
        text: "Dynamische QR-Generierung, asynchrone Datensync, isolierter Serverbetrieb, Asset-Tracking, Lebenszyklus-Management",
      },
    },
    {
      type: "text",
      props: {
        title: "Geschäftliche Auswirkung",
        text: "Ermöglicht Asset-Verfolgung über 5+ Lagerstandorte ohne Internetabhängigkeit",
      },
    },
  ],
} as const satisfies ProjectContent;
