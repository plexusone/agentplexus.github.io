# Multi-Agent-Spec and AssistantKit: A Growing Ecosystem for Subagents

Subagents are becoming a core pattern in AI-assisted development. Claude Code has the Task tool for spawning specialized agents, and Kiro CLI has its own plugin system. But defining subagents that work across these platforms has been fragmented—until now.

We've been building [multi-agent-spec](https://github.com/agentplexus/multi-agent-spec) and [AssistantKit](https://github.com/agentplexus/assistantkit) to solve this problem. As the ecosystem matures, we're seeing multiple implementations emerge, including support for Claude Code Agent Teams.

## The Problem: Platform-Specific Agent Definitions

When you build a custom subagent, you typically write it for one platform:

- **Claude Code**: CLAUDE.md rules, skill files, or Task tool configurations
- **Kiro CLI**: Plugin definitions with their own format
- **Other tools**: Each with their own conventions

This means duplicating work across platforms, or choosing one and losing portability.

## The Solution: multi-agent-spec

[multi-agent-spec](https://github.com/agentplexus/multi-agent-spec) is a platform-agnostic specification format for defining AI agents, skills, and commands. It uses YAML frontmatter with Markdown content:

```yaml
---
name: code-reviewer
description: Reviews code changes for quality issues
tools: Read, Grep, Glob, Bash(git diff*)
model: sonnet
---

You are a senior code reviewer. When invoked:

1. Run git diff to see staged and unstaged changes
2. Review for common issues:
   - Security vulnerabilities
   - Performance problems
   - Code style violations
3. Report findings with specific file:line references
```

The specification supports:

- **Agents**: Specialized assistants with custom prompts and tool access
- **Skills**: Reusable knowledge blocks for specific domains
- **Commands**: User-invokable actions with parameters

## The Tooling: AssistantKit

[AssistantKit](https://github.com/agentplexus/assistantkit) transforms multi-agent-spec definitions into platform-specific plugins. Write your agent once, generate for multiple targets:

```bash
# Generate Claude Code subagent
assistantkit generate --target claude-code --input agents/code-reviewer.md

# Generate Kiro CLI plugin
assistantkit generate --target kiro-cli --input agents/code-reviewer.md
```

This solves the portability problem. Your agent definitions live in version control, and you generate platform-specific implementations as needed.

## New Implementation: Claude Code Agent Teams

The ecosystem is growing beyond custom subagents. We've just released [agent-team-release](https://github.com/grokify/agent-team-release), which adds support for Claude Code Agent Teams.

Claude Code's Agent Teams differ from subagents in important ways:

| Aspect | Subagents (Task tool) | Agent Teams (TeammateTool) |
|--------|----------------------|---------------------------|
| Execution | Hierarchical - parent spawns child | Collaborative - peers work together |
| Communication | One-way (parent → child → result) | Bidirectional (agents can message each other) |
| Use case | Focused, independent tasks | Complex problems requiring coordination |
| Operations | spawn, wait for result | 13 operations including messaging, blocking, task assignment |

The agent-team-release implementation brings multi-agent-spec definitions to the Agent Teams model, enabling collaborative multi-agent workflows alongside hierarchical subagent patterns.

## Learning Resources: Academy Courses

To help developers get started with these tools, we've launched two Academy courses:

### Building Subagents with Claude Code & Kiro CLI

A 45-minute intermediate course covering:

- Custom subagent definitions using multi-agent-spec
- YAML frontmatter configuration options
- Plugin generation workflow with AssistantKit
- Multi-platform deployment strategies

[Start the course →](/academy/building-subagents)

### Claude Code: Agent Teams vs Subagents

A 60-minute deep dive into multi-agent orchestration:

- Built-in subagents vs custom subagents
- All 13 TeammateTool operations
- When to use hierarchical vs collaborative patterns
- Real-world use cases and examples

[Start the course →](/academy/agent-teams-subagents)

## What's Next

The multi-agent-spec ecosystem continues to evolve. Current focus areas:

- **More platform targets**: Support for additional AI coding assistants
- **Agent composition**: Defining agents that orchestrate other agents
- **Shared agent libraries**: Community-contributed agent definitions
- **Testing framework**: Validate agent behavior before deployment

If you're building custom subagents or exploring multi-agent systems, check out the specifications and tooling. The goal is simple: define your agents once, deploy them everywhere.

## Resources

- [multi-agent-spec specification](https://github.com/agentplexus/multi-agent-spec)
- [AssistantKit CLI](https://github.com/agentplexus/assistantkit)
- [agent-team-release for Claude Code Agent Teams](https://github.com/grokify/agent-team-release)
- [Academy: Building Subagents](/academy/building-subagents)
- [Academy: Agent Teams vs Subagents](/academy/agent-teams-subagents)
