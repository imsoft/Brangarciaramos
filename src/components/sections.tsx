import type { ReactNode } from "react";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { profile, type Content, type SectionId } from "@/content";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;
const textLink = "underline-offset-4 hover:text-primary hover:underline";
const button =
  "inline-flex h-10 items-center gap-2 rounded-md px-4 text-sm font-medium";

function Section({
  id,
  title,
  children,
}: {
  id: SectionId;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="reveal scroll-mt-28 border-t py-16"
    >
      <h2
        id={`${id}-title`}
        className="mb-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export function Hero({ c }: { c: Content }) {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="scroll-mt-28 py-20 sm:py-28"
    >
      <h1
        id="hero-title"
        className="text-4xl font-semibold tracking-tight sm:text-5xl"
      >
        {profile.name}
      </h1>
      <p className="mt-3 text-xl font-medium">{c.hero.title}</p>
      <p className="mt-1 text-muted-foreground">{c.hero.location}</p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed">
        {c.hero.summary}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={profile.cv.href}
          download={profile.cv.fileName}
          className={`${button} bg-primary text-primary-foreground hover:bg-primary/90`}
        >
          <Download aria-hidden className="size-4" />
          {c.hero.ctaCv}
        </a>
        <a
          href={`mailto:${profile.email}`}
          className={`${button} border hover:bg-muted`}
        >
          <Mail aria-hidden className="size-4" />
          {c.hero.ctaEmail}
        </a>
      </div>
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <li>
          <a href={profile.linkedin.href} {...external} className={textLink}>
            LinkedIn
          </a>
        </li>
        <li>
          <a href={profile.github.href} {...external} className={textLink}>
            GitHub
          </a>
        </li>
        <li>
          <a href={`mailto:${profile.email}`} className={textLink}>
            {profile.email}
          </a>
        </li>
      </ul>
    </section>
  );
}

export function Experience({ c }: { c: Content }) {
  return (
    <Section id="experience" title={c.ui.nav.experience}>
      <ol className="space-y-12">
        {c.experience.map((job) => (
          <li key={job.company}>
            <h3 className="font-semibold">
              {job.role} — {job.company}
              {job.companyNote && (
                <span className="font-normal text-muted-foreground">
                  {" "}
                  ({job.companyNote})
                </span>
              )}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{job.period}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed marker:text-muted-foreground">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            {job.clients && (
              <p className="mt-4 text-sm">
                <span className="font-medium">{c.ui.clients}:</span>{" "}
                {job.clients.join(", ")}
              </p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Products({ c }: { c: Content }) {
  return (
    <Section id="products" title={c.ui.nav.products}>
      <ul className="space-y-10">
        {c.products.map((product) => (
          <li key={product.url}>
            <h3 className="font-semibold">
              <a
                href={product.url}
                {...external}
                className={`inline-flex items-center gap-1 ${textLink}`}
              >
                {product.name}
                <ArrowUpRight aria-hidden className="size-4" />
              </a>
            </h3>
            <p className="text-sm text-muted-foreground">{product.domain}</p>
            <p className="mt-2 leading-relaxed">{product.description}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {product.stack}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Skills({ c }: { c: Content }) {
  return (
    <Section id="skills" title={c.ui.nav.skills}>
      <dl className="space-y-4">
        {c.skills.map((skill) => (
          <div
            key={skill.group}
            className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-6"
          >
            <dt className="font-medium">{skill.group}</dt>
            <dd className="leading-relaxed text-muted-foreground">
              {skill.items}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Education({ c }: { c: Content }) {
  return (
    <Section id="education" title={c.ui.nav.education}>
      <ul className="space-y-6">
        {c.education.map((item) => (
          <li key={item.degree}>
            <h3 className="font-semibold">{item.degree}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {item.school} · {item.period}
            </p>
          </li>
        ))}
      </ul>
      <h3 className="mt-12 font-semibold">{c.additional.title}</h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed marker:text-muted-foreground">
        {c.additional.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Section>
  );
}

export function Contact({ c }: { c: Content }) {
  const rows = [
    {
      label: c.contact.email,
      link: { label: profile.email, href: `mailto:${profile.email}` },
    },
    { label: c.contact.phone, link: profile.phone },
    { label: c.contact.linkedin, link: profile.linkedin, external: true },
    { label: c.contact.github, link: profile.github, external: true },
  ];

  return (
    <Section id="contact" title={c.ui.nav.contact}>
      <dl className="space-y-4">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-6"
          >
            <dt className="font-medium">{row.label}</dt>
            <dd>
              <a
                href={row.link.href}
                {...(row.external ? external : {})}
                className={textLink}
              >
                {row.link.label}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
