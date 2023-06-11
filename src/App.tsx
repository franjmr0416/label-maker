import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateLabel from './pages/CreateLabel'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateLabel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
