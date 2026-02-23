import { Link } from 'react-router-dom'
import { ArrowRight, Github, FileText, Layers, Code, BookOpen } from 'lucide-react'

interface Specification {
  name: string
  slug: string
  tagline: string
  description: string
  githubUrl: string
  docsUrl?: string
  components: {
    name: string
    description: string
    icon: typeof FileText
  }[]
  features: string[]
}

const specifications: Specification[] = [
  {
    name: 'Multi-Agent Spec',
    slug: 'multi-agent-spec',
    tagline: 'Platform-Agnostic Agent Definitions',
    description:
      'A specification format for defining AI agents, skills, and commands using Markdown with YAML frontmatter. Write once, deploy to Claude Code, Kiro CLI, and other platforms via assistantkit.',
    githubUrl: 'https://github.com/agentplexus/multi-agent-spec',
    docsUrl: 'https://github.com/agentplexus/multi-agent-spec/blob/main/README.md',
    components: [
      {
        name: 'Agents',
        description: 'Specialized AI assistants with custom prompts, tool access, and model preferences.',
        icon: Layers,
      },
      {
        name: 'Skills',
        description: 'Reusable knowledge blocks that can be attached to agents or invoked directly.',
        icon: Code,
      },
      {
        name: 'Commands',
        description: 'User-invokable actions with parameters and execution logic.',
        icon: FileText,
      },
    ],
    features: [
      'YAML frontmatter for configuration (name, description, tools, model)',
      'Markdown body for system prompts and instructions',
      'Platform-agnostic format with multi-target generation',
      'Support for tool restrictions and permission modes',
      'Agent memory and persistent storage definitions',
      'Lifecycle hooks for pre/post tool execution',
    ],
  },
]

export function SpecificationsPage() {
  return (
    <div className="min-h-screen bg-plexus-dark pt-28 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Specifications</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Open formats for defining AI agents and multi-agent systems.
          </p>
        </div>

        <div className="grid gap-8">
          {specifications.map((spec) => (
            <div
              key={spec.slug}
              className="rounded-xl border border-white/10 bg-plexus-slate/30 p-8"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">{spec.name}</h2>
                  <p className="text-xl text-plexus-cyan mb-4">{spec.tagline}</p>
                  <p className="text-gray-400 mb-6">{spec.description}</p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a
                      href={spec.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-plexus-cyan to-plexus-purple text-white font-medium hover:opacity-90 transition-opacity"
                    >
                      <Github size={18} />
                      View Specification
                    </a>
                    {spec.docsUrl && (
                      <a
                        href={spec.docsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-gray-300 hover:bg-white/5 transition-colors"
                      >
                        <BookOpen size={18} />
                        Documentation
                      </a>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-4">Components</h3>
                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    {spec.components.map((component) => (
                      <div
                        key={component.name}
                        className="rounded-lg border border-white/10 bg-plexus-dark/50 p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <component.icon size={18} className="text-plexus-purple" />
                          <h4 className="font-semibold text-white">{component.name}</h4>
                        </div>
                        <p className="text-sm text-gray-400">{component.description}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {spec.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-plexus-cyan shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:w-80 shrink-0">
                  <div className="rounded-lg border border-white/10 bg-plexus-dark/50 p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Example Agent</h3>
                    <pre className="text-sm text-gray-400 overflow-x-auto">
{`---
name: code-reviewer
description: Reviews code quality
tools: Read, Grep, Glob
model: sonnet
---

You are a senior code reviewer.

When invoked:
1. Run git diff to see changes
2. Review for quality issues
3. Report findings`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Use multi-agent-spec with assistantkit to generate plugins
          </p>
          <Link
            to="/products/assistantkit"
            className="inline-flex items-center gap-2 text-plexus-cyan hover:text-plexus-purple transition-colors"
          >
            Learn about AssistantKit
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
