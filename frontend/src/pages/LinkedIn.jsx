
import ToolPage from '../components/ToolPage'
export default function LinkedIn() {
  return <ToolPage
    title="LinkedIn Post" icon="💼" endpoint="linkedin"
    fields={[
      { name: 'topic', label: 'Topic or achievement', type: 'textarea', placeholder: 'e.g. I just landed my first internship...' },
      { name: 'goal', label: 'Goal', type: 'select', options: ['Share a lesson', 'Announce news', 'Build personal brand', 'Drive engagement'] },
      { name: 'length', label: 'Length', type: 'select', options: ['Short (150 words)', 'Medium (300 words)', 'Long (500 words)'] },
    ]}
  />
}