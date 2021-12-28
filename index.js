import { Select } from './select/select'
import './select/style.scss'

const select = new Select('#select', {
  placeholder: 'Please select technology',
  data: [
    { id: '1', value: 'React' },
    { id: '2', value: 'React Native' },
    { id: '3', value: 'Angular' },
    { id: '4', value: 'Vue' },
    { id: '5', value: 'Electron' },
    { id: '6', value: 'Node.js' },
  ],
  onSelect(item) {
    console.log('Selected Item', item)
  }
})

// for writing in console, e.g. "s.close()"
window.s = select