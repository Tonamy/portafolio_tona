import type { ProjectContent } from "../../types";

export default {
  title: "HubSpot ➔ Teamtailor Sync",
  theme: "dark",
  tags: ["node", "postgresql", "javascript", "html"],
  videoBorder: false,
  description:
    "Event-driven data pipeline synchronizing HubSpot CRM records to Teamtailor recruiting platform using Python, REST APIs, and webhook integrations.<br/><br/>Handles massive data volumes with async processing, real-time webhooks, and automatic error recovery for seamless candidate and company data flow.",
  components: [
    {
      type: "text",
      props: {
        title: "Tech Stack",
        text: "Python (Asyncio, Requests), HubSpot API, Teamtailor API, Event Webhooks, JSON Processing",
      },
    },
    {
      type: "text",
      props: {
        title: "Key Features",
        text: "Real-time data sync, massive volume handling, async event processing, automatic retries, webhook verification",
      },
    },
    {
      type: "text",
      props: {
        title: "Business Impact",
        text: "Eliminated manual data entry, reduced sync time from hours to real-time, supports 10K+ records",
      },
    },
  ],
} as const satisfies ProjectContent;
