import thumbnailHubSpot from "../../../assets/thumbnails/particles.webp";
import thumbnailAsset from "../../../assets/thumbnails/quibbo.webp";
import thumbnailWhatsApp from "../../../assets/thumbnails/sharkie.webp";
import thumbnailTAMI from "../../../assets/thumbnails/cubewar.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Sincronización HubSpot ➔ Teamtailor",
    slug: "hubspot-teamtailor",
    thumbnail: thumbnailHubSpot,
    description: "Sincronización ETL bidireccional de datos",
  },
  {
    title: "Asset Management QR",
    slug: "asset-management-qr",
    thumbnail: thumbnailAsset,
    description: "Gestión de Activos Físico-Digital con QR",
  },
  {
    title: "Web & Omnichannel AI",
    slug: "whatsapp-bot",
    thumbnail: thumbnailWhatsApp,
    description: "Bot conversacional con auto-calendarización",
  },
  {
    title: "Proyecto T.A.M.I.",
    slug: "tami-project",
    thumbnail: thumbnailTAMI,
    description: "Inteligencia de Mercado con IA & Tendencias",
  },
] as const satisfies ProjectPreview[];
