import { createFileRoute } from "@tanstack/react-router";
import { ConciergeApp } from "@/components/ConciergeApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Concierge — Smart Retail Shopping Assistant" },
      { name: "description", content: "Plan trips, generate gear kits, and shop in-store with AI-powered AR scanning and navigation." },
      { property: "og:title", content: "AI Concierge — Smart Retail Shopping Assistant" },
      { property: "og:description", content: "Your AI in-store shopping companion." },
    ],
  }),
  component: Index,
});

function Index() {
  return <ConciergeApp />;
}
