import { createRoot } from 'react-dom/client'
import "./assets/sass/main.scss"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <App />
)
