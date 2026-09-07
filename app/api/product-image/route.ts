import { NextRequest, NextResponse } from "next/server";

const palettes: Record<string, { bg: string; fg: string; accent: string }> = {
  tops: { bg: "#E8EFE9", fg: "#2F4A3A", accent: "#6B8F71" },
  bottoms: { bg: "#E8ECF1", fg: "#2C3A4A", accent: "#5B7A9A" },
  dresses: { bg: "#F3E8EE", fg: "#5A3048", accent: "#B06A8B" },
  outerwear: { bg: "#ECEAE6", fg: "#3A3530", accent: "#8A7E6E" },
  shoes: { bg: "#F0EBE3", fg: "#4A3B2A", accent: "#C4A574" },
  accessories: { bg: "#EDE8E4", fg: "#4A3530", accent: "#A67C6D" },
  category: { bg: "#E9EEEA", fg: "#2F4A3A", accent: "#6B8F71" },
  brand: { bg: "#EAE8F0", fg: "#35304A", accent: "#7A6B9A" },
  blog: { bg: "#E8EEF2", fg: "#2F3F4A", accent: "#6B8FA0" },
  default: { bg: "#EDEAE6", fg: "#3A3530", accent: "#8A7E6E" },
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapTitle(title: string, maxLen = 18) {
  const words = title.trim().split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxLen && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3);
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") || "Fashion Corner";
  const variant = (searchParams.get("variant") || "default").toLowerCase();
  const label = searchParams.get("label") || variant;
  const palette = palettes[variant] || palettes.default;

  const lines = wrapTitle(title);
  const lineNodes = lines
    .map(
      (line, i) =>
        `<text x="400" y="${410 + i * 42}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="34" fill="${palette.fg}">${escapeXml(line)}</text>`
    )
    .join("");

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000" fill="none">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="800" y2="1000" gradientUnits="userSpaceOnUse">
      <stop stop-color="${palette.bg}"/>
      <stop offset="1" stop-color="${palette.accent}" stop-opacity="0.35"/>
    </linearGradient>
  </defs>
  <rect width="800" height="1000" fill="url(#g)"/>
  <circle cx="640" cy="180" r="120" fill="${palette.accent}" fill-opacity="0.18"/>
  <circle cx="140" cy="820" r="160" fill="${palette.fg}" fill-opacity="0.06"/>
  <rect x="60" y="60" width="680" height="880" rx="28" stroke="${palette.fg}" stroke-opacity="0.12" stroke-width="2"/>
  <text x="400" y="220" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" letter-spacing="4" fill="${palette.accent}" text-transform="uppercase">${escapeXml(label.toUpperCase())}</text>
  <text x="400" y="320" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="22" fill="${palette.fg}" fill-opacity="0.55">Fashion Corner</text>
  ${lineNodes}
  <path d="M300 560h200" stroke="${palette.accent}" stroke-width="2" stroke-linecap="round"/>
  <text x="400" y="620" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="13" letter-spacing="2" fill="${palette.fg}" fill-opacity="0.45">LOCAL DEMO LOOK</text>
</svg>`;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, immutable",
    },
  });
}
