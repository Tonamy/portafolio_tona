export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "python"
  | "hubspot"
  | "teamtailor"
  | "apps-script"
  | "ai"
  | "meta"
  | "tiktok";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  python: "Python",
  hubspot: "HubSpot API",
  teamtailor: "Teamtailor",
  "apps-script": "Apps Script",
  ai: "Generative AI",
  meta: "Meta API",
  tiktok: "TikTok Trends",
} as const satisfies Record<TagVariant, string>;