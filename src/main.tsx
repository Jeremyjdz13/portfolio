import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { WindowContextProvider } from './context/WindowContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <WindowContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WindowContextProvider>
  </>,
)
