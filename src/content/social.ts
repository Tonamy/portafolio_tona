export const social = [
  { url: "mailto:tonahina@live.com", name: "mail" },
  { url: "https://github.com/Tonamy", name: "github" },
  { url: "https://www.linkedin.com/in/tonatiuh-garza-martinez-9b46a114b/", name: "linkedin" },
  { url: "https://w.app/ldtcvu", name: "x" },
  //{ url: "https://www.instagram.com/tonahina/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
