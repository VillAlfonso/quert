import FadeIn from "./FadeIn";
import { OrnamentFull, OrnamentSimple, OrnamentSmall, ScrollIndicator } from "./Ornament";
import ProjectCard from "./ProjectCard";
import ProfileFrame from "./ProfileFrame";
import {
  CustomerIntelligenceIcon,
  DueDiligenceIcon,
  MVPBuilderIcon,
} from "./ProjectIcons";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative z-10 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Profile Picture - Left Side */}
          <FadeIn delay={100} className="flex-shrink-0">
            <ProfileFrame />
          </FadeIn>

          {/* Text Content - Right Side */}
          <div className="text-center lg:text-left">
            {/* Top Ornament */}
            <FadeIn className="flex justify-center lg:justify-start mb-8">
              <OrnamentFull />
            </FadeIn>

            {/* Name */}
            <FadeIn delay={200}>
              <h1 className="main-title text-3xl md:text-5xl lg:text-6xl mb-4">
                Quert Alfonso
              </h1>
            </FadeIn>
            <FadeIn delay={400}>
              <h2 className="main-title text-2xl md:text-4xl lg:text-5xl mb-8">
                M. Villafuerte
              </h2>
            </FadeIn>

            {/* Bottom Ornament */}
            <FadeIn delay={600} className="flex justify-center lg:justify-start mb-12">
              <OrnamentFull flipped />
            </FadeIn>

            {/* Subtitle */}
            <FadeIn delay={800}>
              <p className="font-cormorant text-xl md:text-2xl text-hollow-accent tracking-wide mb-4">
                Full Stack AI Engineer
              </p>
            </FadeIn>
            <FadeIn delay={1000}>
              <p className="font-cormorant text-lg text-hollow-mist italic">
                Magna Cum Laude · BS Information Technology
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Scroll Indicator */}
        <FadeIn
          delay={1500}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ScrollIndicator />
        </FadeIn>
      </div>
    </section>
  );
}

export function AboutSection() {
  const skills = [
    "Python",
    "TypeScript",
    "React",
    "Node.js",
    "PyTorch",
    "TensorFlow",
    "LangChain",
    "Vector DBs",
    "AWS",
    "Docker",
  ];

  return (
    <section id="about" className="min-h-screen section-content py-32 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <FadeIn className="text-center mb-16">
          <div className="flex flex-col items-center">
            <OrnamentSimple className="mb-4" />
            <h2 className="main-title text-2xl md:text-3xl mb-4">About</h2>
            <OrnamentSimple flipped className="mt-4" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <p className="font-cormorant text-xl leading-relaxed text-hollow-light mb-6">
              A passionate technologist who bridges the gap between cutting-edge
              AI research and practical engineering solutions. With a foundation
              in full-stack development and a specialization in artificial
              intelligence, I craft intelligent systems that solve real-world
              problems.
            </p>
            <p className="font-cormorant text-lg leading-relaxed text-hollow-mist mb-8">
              My journey through academia, graduating with honors, has equipped
              me with both theoretical depth and hands-on expertise. I thrive in
              the dynamic environment of early-stage startups where innovation
              moves fast and impact is immediate.
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag font-cinzel text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-hollow-accent/20 to-transparent rounded-lg blur-xl" />
              <div className="relative bg-hollow-void/80 border border-hollow-mist/20 rounded-lg p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-cinzel text-hollow-glow text-sm tracking-widest mb-2">
                      EDUCATION
                    </h3>
                    <p className="font-cormorant text-lg text-hollow-light">
                      BS Information Technology
                    </p>
                    <p className="font-cormorant text-hollow-mist italic">
                      Magna Cum Laude
                    </p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-hollow-mist/30 to-transparent" />
                  <div>
                    <h3 className="font-cinzel text-hollow-glow text-sm tracking-widest mb-2">
                      FOCUS
                    </h3>
                    <p className="font-cormorant text-lg text-hollow-light">
                      AI/ML Engineering
                    </p>
                    <p className="font-cormorant text-hollow-mist italic">
                      Full Stack Development
                    </p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-hollow-mist/30 to-transparent" />
                  <div>
                    <h3 className="font-cinzel text-hollow-glow text-sm tracking-widest mb-2">
                      SEEKING
                    </h3>
                    <p className="font-cormorant text-lg text-hollow-light">
                      Seed to Series A Startups
                    </p>
                    <p className="font-cormorant text-hollow-mist italic">
                      US-based Opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      title: "AI-Powered Customer Intelligence Platform",
      subtitle: "Startup-Ready · Product-Market Fit Accelerator",
      description:
        "An intelligent system that transforms raw customer interactions into actionable insights. Built for startups seeking PMF, it uses LLMs to analyze support tickets, user feedback, and behavioral data to surface patterns that inform product decisions. Features real-time sentiment tracking, churn prediction, and automated feature request categorization.",
      technologies: [
        "OpenAI API",
        "LangChain",
        "Pinecone",
        "Next.js",
        "PostgreSQL",
        "Vercel",
      ],
      icon: <CustomerIntelligenceIcon />,
    },
    {
      title: "Automated Due Diligence Assistant",
      subtitle: "Investor-Grade · Document Intelligence",
      description:
        "A RAG-powered system designed for seed-stage investors and accelerators. Processes pitch decks, financial statements, and market reports to generate comprehensive due diligence summaries. Uses multi-modal embeddings to understand charts and graphs, with chain-of-thought reasoning to flag inconsistencies and highlight risks.",
      technologies: [
        "Claude API",
        "GPT-4V",
        "Weaviate",
        "FastAPI",
        "React",
        "AWS Lambda",
      ],
      icon: <DueDiligenceIcon />,
    },
    {
      title: "AI-Augmented MVP Builder Framework",
      subtitle: "Developer Tooling · Ship Faster",
      description:
        "A full-stack boilerplate and CLI tool that lets founders go from idea to deployed MVP in days, not weeks. Integrates AI copilot capabilities for code generation, includes pre-built authentication, payment processing, and analytics. Built-in AI features like smart search, content generation, and automated testing reduce time-to-market dramatically.",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Prisma",
        "Stripe",
        "Vercel AI SDK",
        "Turborepo",
      ],
      icon: <MVPBuilderIcon />,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen section-content py-32 relative z-10"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <FadeIn className="text-center mb-16">
          <div className="flex flex-col items-center">
            <OrnamentSimple className="mb-4" />
            <h2 className="main-title text-2xl md:text-3xl mb-4">
              Featured Projects
            </h2>
            <OrnamentSimple flipped className="mt-4" />
          </div>
          <p className="font-cormorant text-lg text-hollow-mist mt-6 max-w-2xl mx-auto">
            Solutions crafted for the challenges faced by early-stage startups
          </p>
        </FadeIn>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 200}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen section-content py-32 relative z-10"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="flex justify-center mb-8">
            <OrnamentFull />
          </div>

          <h2 className="main-title text-2xl md:text-4xl mb-6">
            Begin the Journey
          </h2>

          <div className="flex justify-center mb-12">
            <OrnamentFull flipped />
          </div>

          <p className="font-cormorant text-xl text-hollow-light leading-relaxed mb-12">
            Seeking to join a seed to Series A startup where I can architect
            intelligent systems and help build products that matter. If
            you&apos;re looking for a technical co-founder or early engineer who
            can wear multiple hats, let&apos;s connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:quert@example.com"
              className="cta-button font-cinzel text-sm"
            >
              <span className="relative z-10">Get in Touch</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button font-cinzel text-sm"
            >
              <span className="relative z-10">LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button font-cinzel text-sm"
            >
              <span className="relative z-10">GitHub</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-hollow-mist/10 relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <OrnamentSmall />
        </div>
        <p className="font-cormorant text-hollow-mist text-sm">
          © 2025 Quert Alfonso M. Villafuerte · Crafted with purpose
        </p>
      </div>
    </footer>
  );
}
