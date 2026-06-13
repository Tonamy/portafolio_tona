import thumbnailHubSpot from "../../../assets/thumbnails/particles.webp";
import thumbnailAsset from "../../../assets/thumbnails/quibbo.webp";
import thumbnailWhatsApp from "../../../assets/thumbnails/sharkie.webp";
import thumbnailTAMI from "../../../assets/thumbnails/cubewar.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "HubSpot ➔ Teamtailor Sync",
    slug: "hubspot-teamtailor",
    thumbnail: thumbnailHubSpot,
    description: "Data Pipelines & ETL",
  },
  {
    title: "Asset Management QR",
    slug: "asset-management-qr",
    thumbnail: thumbnailAsset,
    description: "Gestión de Activos Físico-Digital",
  },
  {
    title: "Web & Omnichannel AI",
    slug: "whatsapp-bot",
    thumbnail: thumbnailWhatsApp,
    description: "Automatización Conversacional",
  },
  {
    title: "T.A.M.I. Project",
    slug: "tami-project",
    thumbnail: thumbnailTAMI,
    description: "AI Engineering & Trend Analytics",
  },
] as const satisfies ProjectPreview[];
