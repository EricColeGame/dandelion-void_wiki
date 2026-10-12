import { BookOpen, Cog, MessageSquare, Monitor, Rocket, ScrollText, Users } from "lucide-react";

export type NavItem = {
  key: string;
  path: `/${string}`;
  icon: unknown;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "release", path: "/release", icon: Rocket, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "multiplayer", path: "/multiplayer", icon: Users, isContentType: true },
  { key: "lore", path: "/lore", icon: ScrollText, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Monitor, isContentType: true },
  { key: "community", path: "/community", icon: MessageSquare, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
