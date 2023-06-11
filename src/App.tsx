import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateLabel from './pages/CreateLabel'
import Error from './pages/404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateLabel />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
