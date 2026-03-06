export type Prompt = {
  id: string
  title: string
  prompt: string
  image: string
}

const gemini: Prompt[] = [
  {
    id: 'g-1',
    title: 'Remove background from portrait',
    prompt: 'Remove the background from this portrait photo and make it transparent. Keep the subject sharp and natural.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 'g-2',
    title: 'Enhance colors and contrast',
    prompt: 'Enhance the colors, increase contrast, and brighten this photo while maintaining natural skin tones.',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop'
  },
  {
    id: 'g-3',
    title: 'Remove unwanted objects',
    prompt: 'Remove the distracting objects in the background and fill the space naturally with appropriate content.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
  },
  {
    id: 'g-4',
    title: 'Convert to black and white',
    prompt: 'Convert this color photo to a high-quality black and white image with good contrast and tonal range.',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300&fit=crop'
  }
]

const chatgpt: Prompt[] = [
  {
    id: 'c-1',
    title: 'Change background to beach',
    prompt: 'Change the background of this person to a beautiful tropical beach with palm trees and ocean waves.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
  },
  {
    id: 'c-2',
    title: 'Add dramatic lighting',
    prompt: 'Add dramatic cinematic lighting to this photo, with golden hour sunlight and long shadows.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
  },
  {
    id: 'c-3',
    title: 'Replace object with something else',
    prompt: 'Replace the car in this photo with a vintage red sports car, keeping the same lighting and perspective.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop'
  },
  {
    id: 'c-4',
    title: 'Apply artistic filter',
    prompt: 'Apply a professional photography filter that makes this image look like it was taken with a vintage film camera.',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=300&fit=crop'
  }
]

export const PROMPTS: { gemini: Prompt[]; chatgpt: Prompt[] } = {
  gemini,
  chatgpt,
}
