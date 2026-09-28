import { ArrowDown, ArrowUpRight, Mail, User } from "lucide-react"

const projects = [
  {
    title: "Portfolio website",
    description:
      "TODO: Add description of this website, including the tech stack used.",
    tech: ["React", "TypeScript", "PHP", "MariaDB"],
  },
  {
    title: "TODO: Add project title",
    description:
      "TODO: Add description of this project, including the tech stack used.",
    tech: ["React", "TypeScript"],
  },
  {
    title: "TODO: Add project title",
    description:
      "TODO: Add description of this project, including the tech stack used.",
    tech: ["SEO", "Google Ads"],
  },
]

function ProfileImage() {
  return (
    <div className="aspect-[4/5] w-full max-w-sm rounded-2xl bg-muted flex items-center justify-center">
      <User className="h-24 w-24 text-muted-foreground" strokeWidth={1} />
    </div>
  )
}

const skills = [
  "TODO",
  "React",
  "TypeScript",
  "PHP",
  "MariaDB / MySQL",
  "Git",
  "HTML & CSS",
  "REST APIs",
  "Linux",
]

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="font-semibold tracking-tight">
            Adam Verner
          </a>

          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition hover:text-foreground">
              About
            </a>
            <a href="#projects" className="transition hover:text-foreground">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-foreground">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-foreground">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border px-4 py-2 text-sm font-medium transition hover:bg-muted"
          >
            Let's talk
          </a>
        </nav>
      </header>

      <main>
        <section className="flex min-h-screen items-center">
          <div className="mx-auto w-full max-w-6xl px-6 py-32">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Fullstack Developer
                </p>

                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                  I build web applications
                  <span className="text-muted-foreground"> that work.</span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
                  I'm Adam, a fullstack developer from Czechia with 3 years of
                  experience building web applications with React, TypeScript,
                  PHP and SQL.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-80"
                  >
                    View my work
                    <ArrowDown className="h-4 w-4" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition hover:bg-muted"
                  >
                    Get in touch
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <ProfileImage />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t">
          <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                About me
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                A developer who likes understanding how things work.
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <p>
                I work across the frontend and backend, with most of my
                experience in React and PHP applications.
              </p>

              <p>
                I enjoy turning ideas into practical software, working with
                databases, and solving problems that require understanding the
                whole system rather than just one part of it.
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border px-3 py-1.5 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-t">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="mb-16">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Selected work
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Projects
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group flex min-h-[360px] flex-col justify-between rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div>
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-sm font-semibold">
                      {project.title.charAt(0)}
                    </div>

                    <h3 className="text-xl font-semibold">{project.title}</h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="text-xs text-muted-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="border-t">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="mb-16">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Background
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Experience
              </h2>
            </div>

            <div className="border-t">
              <div className="grid gap-4 border-b py-8 md:grid-cols-[180px_1fr]">
                <p className="text-sm text-muted-foreground">TODO</p>

                <div>
                  <h3 className="text-lg font-semibold">Fullstack Developer</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    React · TypeScript · PHP · MariaDB
                  </p>
                  <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nisl vel tincidunt lacinia, nunc nisl aliquam
                    mauris, eget aliquam nisl nunc vel nisl. Sed euismod, nisl
                    vel tincidunt lacinia, nunc nisl aliquam mauris, eget
                    aliquam nisl nunc vel nisl.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 border-b py-8 md:grid-cols-[180px_1fr]">
                <p className="text-sm text-muted-foreground">TODO</p>

                <div>
                  <h3 className="text-lg font-semibold">
                    Junior Fullstack Developer
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    React · PHP · SQL
                  </p>
                  <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nisl vel tincidunt lacinia, nunc nisl aliquam
                    mauris, eget aliquam nisl nunc vel nisl. Sed euismod, nisl
                    vel tincidunt lacinia, nunc nisl aliquam mauris, eget
                    aliquam nisl nunc vel nisl.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Contact
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Have a project in mind?
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I'm open to discussing new opportunities, interesting projects,
                and collaborations.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:your@email.com"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-80"
                >
                  <Mail className="h-4 w-4" />
                  Email me
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition hover:bg-muted"
                >
                  TODO: Add Github icon GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Adam Verner</span>
          <span>Built with React & TypeScript</span>
        </div>
      </footer>
    </div>
  )
}

export default App
