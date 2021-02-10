import React from 'react';
import { render } from 'react-dom';
import App from './App';
import 'normalize.css/normalize.css';
import 'tailwindcss/tailwind.css';

window.COMMIT = process.env.COMMIT;
render(<App />, document.getElementById('root'));
