import type { ProjectContent } from "../../types";

export default {
  title: "Asset Management QR System",
  theme: "dark",
  tags: ["node", "javascript", "html", "postgresql"],
  videoBorder: false,
  description:
    "Asynchronous data pipeline bridging Odoo ERP to isolated industrial servers with dynamic QR code generation for physical asset tracking.<br/><br/>Manages asset lifecycle from enterprise database to field operations with real-time QR updates, offline-first design, and secure isolated network deployment.",
  components: [
    {
      type: "text",
      props: {
        title: "Tech Stack",
        text: "Python (Async), Odoo ERP API, QR Code Generation, REST APIs, Isolated Network Architecture",
      },
    },
    {
      type: "text",
      props: {
        title: "Key Features",
        text: "Dynamic QR generation, async data sync, isolated server operation, asset tracking, lifecycle management",
      },
    },
    {
      type: "text",
      props: {
        title: "Business Impact",
        text: "Enables physical asset tracking across 5+ warehouse locations with zero internet dependency",
      },
    },
  ],
} as const satisfies ProjectContent;
