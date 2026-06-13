import type { ProjectContent } from "../../types";

export default {
  title: "Web & Omnichannel AI Bot",
  theme: "dark",
  tags: ["node", "javascript", "websockets", "html"],
  videoBorder: false,
  description:
    "Intelligent conversational agent connected to WhatsApp Business API with natural language processing, structured JSON extraction, and automatic calendar scheduling.<br/><br/>Handles customer inquiries in natural language, extracts intent and entities, and automatically schedules appointments with seamless CRM integration.",
  components: [
    {
      type: "text",
      props: {
        title: "Tech Stack",
        text: "WhatsApp Business API, NLP Processing, JSON Parsing, Calendar APIs, Message Handling",
      },
    },
    {
      type: "text",
      props: {
        title: "Key Features",
        text: "Natural language understanding, structured data extraction, auto-scheduling, multi-language support, conversation history",
      },
    },
    {
      type: "text",
      props: {
        title: "Business Impact",
        text: "Processes 1K+ inquiries/month, reduces scheduling time by 80%, improves customer response time to <2min",
      },
    },
  ],
} as const satisfies ProjectContent;
