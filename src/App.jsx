import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ItemListContainer } from "./components/ItemListContainer"
import { NavBar } from "./components/NavBar"
import { ItemDetailsContainer } from './components/ItemDetailsContainer'


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailsContainer />} />
      <Route path="*" element={404} />
    </Routes>
     </BrowserRouter>
  )
}

export default App
