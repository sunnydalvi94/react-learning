import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
console.log(container);
const root = createRoot(container);
root.render(<App />);
  