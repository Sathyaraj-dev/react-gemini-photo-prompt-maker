import React, { useState } from 'react'
import type { Prompt } from '../data/prompts'

type Props = { prompt: Prompt }

export default function PromptCard({ prompt }: Props) {
  const [copied, setCopied] = useState(false)

  async function copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch (e) {
      // fallback
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    }
  }

  return (
    <article className="prompt-card">
      <img src={prompt.image} alt={prompt.title} />
      <div className="body">
        <h3>{prompt.title}</h3>
        <p>{prompt.prompt}</p>

        <div className="controls">
          <button className="btn" onClick={() => copyText(prompt.prompt)}>
            {copied ? 'Copied!' : 'Copy Prompt'}
          </button>
          <button className="btn primary" onClick={() => copyText(`${prompt.title}\n\n${prompt.prompt}`)}>
            Copy All
          </button>
        </div>
      </div>
    </article>
  )
}
