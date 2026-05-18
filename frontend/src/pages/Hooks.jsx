
import ToolPage from '../components/ToolPage'
export default function Hooks() {
  return <ToolPage
    title="Viral Hooks" icon="🔥" endpoint="hooks"
    fields={[
      { name: 'topic', label: 'Content topic', type: 'textarea', placeholder: 'e.g. How to get your first tech job...' },
      { name: 'platform', label: 'Platform', type: 'select', options: ['Instagram Reel / TikTok', 'YouTube', 'LinkedIn', 'Twitter / X thread'] },
    ]}
  />
}
