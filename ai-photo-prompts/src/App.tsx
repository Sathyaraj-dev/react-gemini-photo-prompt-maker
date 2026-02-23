import React, { useMemo, useState } from 'react'
import './App.css'
import PromptCard from './components/PromptCard'
import { PROMPTS } from './data/prompts'
import type { Prompt } from './data/prompts'

function App() {
  const [provider, setProvider] = useState<'gemini' | 'chatgpt'>('gemini')
  const [query, setQuery] = useState('')

  const list: Prompt[] = useMemo(() => PROMPTS[provider].filter(p => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return p.title.toLowerCase().includes(q) || p.prompt.toLowerCase().includes(q)
  }), [provider, query])

  return (
    <div id="root">
      <header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16}}>
        <h1>AI Photo Prompts</h1>
        <div style={{display:'flex', gap:8}}>
          <button className={provider==='gemini'? 'tab active':'tab'} onClick={() => setProvider('gemini')}>Gemini</button>
          <button className={provider==='chatgpt'? 'tab active':'tab'} onClick={() => setProvider('chatgpt')}>ChatGPT</button>
        </div>
      </header>

      <div style={{marginTop:12, display:'flex', gap:12, alignItems:'center'}}>
        <input
          aria-label="Search prompts"
          placeholder="Search prompts..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="search"
        />
        <div style={{marginLeft:'auto', color:'#666'}}>{list.length} result{list.length!==1?'s':''}</div>
      </div>

      <main style={{marginTop:16}}>
        <div className="grid">
          {list.map(p => (
            <PromptCard key={p.id} prompt={p} />
          ))}
        </div>
      </main>

      <footer style={{marginTop:24, color:'#888'}}>
        <small>Copy & paste these prompts into Gemini or ChatGPT. Images are for inspiration.</small>
      </footer>
    </div>
  )
}

export default App
