
import ToolPage from '../components/ToolPage'
export default function Hashtags() {
  return <ToolPage
    title="Hashtag Generator" icon="#️⃣" endpoint="hashtags"
    fields={[
      { name: 'topic', label: 'Post topic or niche', type: 'text', placeholder: 'e.g. AI tools for students' },
      { name: 'platform', label: 'Platform', type: 'select', options: ['Instagram', 'TikTok', 'LinkedIn', 'Twitter / X'] },
      { name: 'mix', label: 'Mix', type: 'select', options: ['Broad + niche (recommended)', 'All broad reach', 'All niche specific'] },
    ]}
  />
}