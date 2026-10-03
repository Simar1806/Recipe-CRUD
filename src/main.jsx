import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyStoreProvider } from './MyContext/MyWebContext.jsx'
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MyStoreProvider>
    <App />
  </MyStoreProvider>
  </BrowserRouter>

  
)
