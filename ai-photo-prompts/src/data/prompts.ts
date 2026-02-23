import g1 from '../assets/g1.svg'
import g2 from '../assets/g2.svg'
import g3 from '../assets/g3.svg'
import g4 from '../assets/g4.svg'
import c1 from '../assets/c1.svg'
import c2 from '../assets/c2.svg'
import c3 from '../assets/c3.svg'
import c4 from '../assets/c4.svg'

export type Prompt = {
  id: string
  title: string
  prompt: string
  image: string
}

const gemini: Prompt[] = [
  {
    id: 'g-1',
    title: 'Cinematic golden hour portrait',
    prompt: 'A cinematic golden hour portrait of a woman on a hill, warm backlight, shallow depth of field, 85mm, film grain, dramatic contrast.',
    image: g1
  },
  {
    id: 'g-2',
    title: 'Futuristic neon cityscape',
    prompt: 'Ultra-detailed futuristic neon cityscape at night, rain reflections, volumetric lighting, cinematic, wide-angle, high dynamic range.',
    image: g2
  },
  {
    id: 'g-3',
    title: 'Macro dew on spiderweb',
    prompt: 'Macro photograph of dew on a spiderweb at dawn, extreme detail, soft bokeh background, 100mm macro.',
    image: g3
  },
  {
    id: 'g-4',
    title: 'Aerial autumn forest',
    prompt: 'Aerial drone shot of an autumn forest with a meandering river, vibrant colors, high resolution, crisp details.',
    image: g4
  }
]

const chatgpt: Prompt[] = [
  {
    id: 'c-1',
    title: 'Recipe for spicy tomato pasta',
    prompt: 'Write a concise, step-by-step recipe for a spicy tomato pasta using pantry ingredients, include cook times and serving suggestions.',
    image: c1
  },
  {
    id: 'c-2',
    title: 'Blog outline: Minimalist travel tips',
    prompt: 'Create a 7-section blog outline about minimalist travel with headings, short descriptions, and a suggested title.',
    image: c2
  },
  {
    id: 'c-3',
    title: 'Cold email to a product manager',
    prompt: 'Draft a polite cold email to a product manager introducing a new analytics tool, include value props and a one-line CTA.',
    image: c3
  },
  {
    id: 'c-4',
    title: 'Prompt for product feature brainstorming',
    prompt: 'Help me brainstorm 10 feature ideas for a mobile notes app focused on productivity and privacy.',
    image: c4
  }
]

export const PROMPTS: { gemini: Prompt[]; chatgpt: Prompt[] } = {
  gemini,
  chatgpt,
}
