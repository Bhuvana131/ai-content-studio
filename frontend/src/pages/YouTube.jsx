
import ToolPage from '../components/ToolPage'
export default function YouTube() {
  return <ToolPage
    title="YouTube Script" icon="🎥" endpoint="youtube"
    fields={[
      { name: 'topic', label: 'Video topic', type: 'text', placeholder: 'e.g. How I built a FastAPI project in 7 days' },
      { name: 'audience', label: 'Target audience', type: 'text', placeholder: 'e.g. Beginner developers' },
      { name: 'length', label: 'Video length', type: 'select', options: ['Short (3-5 min)', 'Medium (8-12 min)', 'Long (15-20 min)'] },
    ]}
  />
}