import { BookOpen, Code2, Flame, Map, Swords, Trophy, Users, Zap } from "lucide-react";

interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "home", path: "/", isContentType: false },
  { key: "codes", path: "/codes", isContentType: true },
  { key: "tier", path: "/tier", isContentType: true },
  { key: "guide", path: "/guide", isContentType: true },
  { key: "units", path: "/units", isContentType: true },
  { key: "traits", path: "/traits", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
  { key: "release", path: "/release", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
