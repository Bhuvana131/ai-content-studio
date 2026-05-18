
import ToolPage from '../components/ToolPage'
export default function Caption() {
  return <ToolPage
    title="Caption Generator" icon="📸" endpoint="caption"
    fields={[
      { name: 'topic', label: 'What is the photo/reel about?', type: 'textarea', placeholder: 'e.g. Sunset at the beach...' },
      { name: 'tone', label: 'Tone', type: 'select', options: ['Casual & fun', 'Professional', 'Inspirational', 'Witty & humorous', 'Minimalist'] },
      { name: 'platform', label: 'Platform', type: 'select', options: ['Instagram', 'Facebook', 'Twitter / X', 'TikTok'] },
    ]}
  />
}