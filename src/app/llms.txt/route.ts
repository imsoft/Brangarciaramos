import { content, profile } from "@/content";

// Plain-Markdown summary of the site for LLM crawlers (https://llmstxt.org).
// Generated from content.ts so it never drifts from the page.
export const dynamic = "force-static";

export function GET() {
  const c = content.en;
  const lines = [
    `# ${profile.name}`,
    "",
    `> ${c.hero.title} — ${c.hero.location}. ${c.hero.summary}`,
    "",
    `- Website: ${profile.siteUrl}/en (Spanish: ${profile.siteUrl}/es)`,
    `- CV (PDF): ${profile.siteUrl}${profile.cv.href}`,
    `- Email: ${profile.email}`,
    `- LinkedIn: ${profile.linkedin.href}`,
    `- GitHub: ${profile.github.href}`,
    "",
    `## ${c.ui.nav.experience}`,
    "",
    ...c.experience.flatMap((job) => [
      `### ${job.role} — ${job.company}${job.companyNote ? ` (${job.companyNote})` : ""} · ${job.period}`,
      "",
      ...job.bullets.map((b) => `- ${b}`),
      ...(job.clients ? [`- ${c.ui.clients}: ${job.clients.join("; ")}`] : []),
      "",
    ]),
    `## ${c.ui.nav.products}`,
    "",
    ...c.products.map(
      (p) => `- [${p.name}](${p.url}): ${p.description} Stack: ${p.stack}`,
    ),
    "",
    `## ${c.ui.nav.skills}`,
    "",
    ...c.skills.map((s) => `- ${s.group}: ${s.items}`),
    "",
    `## ${c.ui.nav.education}`,
    "",
    ...c.education.map((e) => `- ${e.degree} · ${e.school} · ${e.period}`),
    "",
    `## ${c.additional.title}`,
    "",
    ...c.additional.items.map((i) => `- ${i}`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
