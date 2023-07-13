import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));

root.render(<App />);
