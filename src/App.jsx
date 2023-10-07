import './App.css'
import Create from './components/Create'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Read from './components/Read'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Create />}></Route>
        <Route path='/read' element={<Read />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
