import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sidebar from './components/sidebar/sidebar.jsx'
import Searchbar from './components/searchbar/searchbar.jsx'
import Maincontent from './components/maincontent/maincontent.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div className="part-1">
    <Sidebar />
    <div className='part-2'>
    <Searchbar />
    <Maincontent />
    </div>
    </div>
  </StrictMode>,
)
