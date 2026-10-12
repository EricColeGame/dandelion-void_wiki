export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Dandelion Void Wiki",
  shortName: "Dandelion Void",
  logoText: "D",
  tagline: "Survival Guides, Crafting & Ship Exploration",
  description: "Your ultimate guide to Dandelion Void! Explore the overgrown corridors of a ruined generation ship, gather resources, craft equipment, build shelters, and survive the void with our guides and progression walkthroughs.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dandelion-void.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dandelion-void.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3582810/Dandelion_Void/",
  heroVideoId: "XhxY1HuTEMs", // Dandelion Void - Teaser Trailer (official channel)
  social: {
    discord: "https://www.dandelionvoid.com/discord",
    youtube: "https://www.youtube.com/@DandelionVoid",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
