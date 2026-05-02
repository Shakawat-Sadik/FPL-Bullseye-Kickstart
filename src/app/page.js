// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const skills = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "shadcn/ui",
  "JavaScript",
  "C",
  "Python",
  "UI Design",
  "Accessibility",
];

const projects = [
  {
    title: "FocusFlow",
    summary:
      "A minimalist Pomodoro and task planner that keeps focus sessions, notes, and daily goals in one place.",
    stack: "Next.js, Tailwind CSS, shadcn/ui, Local Storage",
    link: "https://github.com/Shakawat-Sadik/focusflow",
  },
  {
    title: "SafeRoute",
    summary:
      "A travel safety checklist and packing dashboard with smart reminders and a clean mobile-first layout.",
    stack: "React, Vite, Tailwind CSS, Framer Motion",
    link: "https://github.com/Shakawat-Sadik/saferoute",
  },
];

const certifications = [
  "Programming with JavaScript - Meta (Aug 2025)",
  "Foundations of Cybersecurity - Google (Jun 2025)",
  "Play It Safe: Manage Security Risks - Google (Jul 2025)",
];

const socialLinks = [
  {
    label: "Email",
    value: "sadik97x@gmail.com",
    href: "mailto:sadik97x@gmail.com",
  },
  {
    label: "Phone",
    value: "+8801890372178",
    href: "tel:+8801890372178",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shakawat-sadik",
    href: "https://www.linkedin.com/in/shakawat-sadik/",
  },
  {
    label: "GitHub",
    value: "github.com/Shakawat-Sadik",
    href: "https://github.com/Shakawat-Sadik",
  },
  {
    label: "Facebook",
    value: "facebook.com/TheSaadiq",
    href: "https://facebook.com/TheSaadiq",
  },
];

export default function Home() {
  return (
    <div className="relative flex-1 overflow-hidden bg-[radial-gradient(900px_circle_at_10%_10%,rgba(16,185,129,0.08),transparent_60%),radial-gradient(700px_circle_at_90%_0%,rgba(14,165,233,0.12),transparent_55%),linear-gradient(180deg,#f8fafc_0%,#ffffff_45%,#f8fafc_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.04)_0.5px,transparent_0.5px),linear-gradient(90deg,rgba(15,23,42,0.04)_0.5px,transparent_0.5px)] bg-size-[64px_64px]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-24 pt-10 sm:px-10">
        <header className="flex flex-wrap items-center justify-between gap-6 text-sm font-medium text-slate-600">
          <div className="flex items-center gap-3 text-slate-900">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
              SS
            </span>
            <span className="text-base">Shakawat Hossain Sadik</span>
          </div>
          <nav className="flex flex-wrap items-center gap-6">
            <a className="transition hover:text-slate-900" href="#about">
              About
            </a>
            <a className="transition hover:text-slate-900" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-slate-900" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-slate-900" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <main className="mt-16 flex flex-col gap-20">
          <section id="home" className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex items-center justify-center lg:justify-start">
              <Card className="w-full max-w-sm border-slate-200 bg-white/70 shadow-xl shadow-slate-200/70">
                <CardContent className="p-6">
                  <AspectRatio ratio={4 / 5} className="relative">
                    <Image
                      src="/Shakawat-Sadik.png"
                      alt="Shakawat Hossain Sadik"
                      fill
                      sizes="(min-width: 1024px) 320px, 70vw"
                      className="rounded-3xl object-cover"
                      priority
                    />
                  </AspectRatio>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                Frontend Developer
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Building clean, calm interfaces that feel effortless to use.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                I am Shakawat Hossain Sadik, a frontend developer focused on
                accessible, minimal UI that still feels bold. I combine design
                polish with solid engineering to ship fast, reliable web
                experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a href="#contact">Lets talk</a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href="/resume.pdf" title="Add resume.pdf to /public">
                    Resume PDF
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section id="about" className="grid gap-10 lg:grid-cols-[0.6fr_1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                About
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                A calm, professional web presence.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-7 text-slate-600">
              <p>
                I build frontend experiences with Next.js, Tailwind CSS, and
                shadcn/ui, focusing on clarity, spacing, and accessibility. My
                workflow blends rapid prototyping with tidy component systems so
                products stay consistent and easy to maintain.
              </p>
              <p>
                I enjoy crafting interfaces that feel confident without being
                loud. I am happiest when I can simplify complex information into
                crisp, readable screens.
              </p>
            </div>
          </section>

          <section id="skills" className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                  Skills
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                  Languages and tools I grasp
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          <section id="projects" className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                Projects
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                Selected work
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <Card key={project.title} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium text-slate-500">
                      {project.stack}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" size="sm">
                      <a href={project.link} target="_blank" rel="noreferrer">
                        View project
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          <section id="certifications" className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                Certifications
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                Recent credentials
              </h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {certifications.map((certification) => (
                <Card key={certification}>
                  <CardContent className="py-3 text-sm text-slate-600">
                    {certification}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="contact" className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                Lets build something great.
              </h2>
            </div>
            <Card className="border-slate-200">
              <CardContent className="grid gap-6 p-6 lg:grid-cols-[1fr_1.2fr]">
                <div className="space-y-4 text-slate-600">
                  <p className="text-base leading-7">
                    Open to freelance work, internships, and collaborative
                    projects. Share a quick brief and I will respond with a plan
                    and timeline.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="sm">
                      <a href="mailto:sadik97x@gmail.com">Email me</a>
                    </Button>
                    <Button asChild size="sm" variant="secondary">
                      <a
                        href="https://www.linkedin.com/in/shakawat-sadik/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="grid gap-4 text-sm text-slate-700">
                  {socialLinks.map((link) => (
                    <Card key={link.label} className="border-slate-200">
                      <CardContent className="flex items-center justify-between gap-4 py-3">
                        <span className="font-semibold text-slate-900">
                          {link.label}
                        </span>
                        <a
                          className="truncate text-slate-600 transition hover:text-slate-900"
                          href={link.href}
                          target={
                            link.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            link.href.startsWith("http") ? "noreferrer" : undefined
                          }
                        >
                          {link.value}
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
}
