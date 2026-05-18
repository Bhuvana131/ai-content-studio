
import ToolPage from '../components/ToolPage'
export default function Calendar() {
  return <ToolPage
    title="Content Calendar" icon="📅" endpoint="calendar"
    fields={[
      { name: 'niche', label: 'Your niche / content topic', type: 'text', placeholder: 'e.g. Tech student, ML developer' },
      { name: 'frequency', label: 'Posts per week', type: 'select', options: ['3 posts/week', '5 posts/week', '7 posts/week'] },
      { name: 'platforms', label: 'Platforms', type: 'select', options: ['Instagram', 'LinkedIn', 'Instagram + LinkedIn', 'All platforms'] },
    ]}
  />
}