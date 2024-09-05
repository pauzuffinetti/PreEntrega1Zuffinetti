import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailsContainer } from './components/ItemDetailsContainer'
import { NavBar } from "./components/NavBar"
import { Provider } from './contexts/ItemsContext';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';



function App() {

  // useEffect(() => {
  //   const db = getFirestore();
  
  //   const refCollection = collection(db, "items");

  //   getDocs(refCollections).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       setProducts({ id: snapshot.id, ...snapshot.data()});
  //     }
  //   });
  // }, []);

  return (
    <Provider>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailsContainer />} />
      <Route path="*" element={404} />
    </Routes>
     </BrowserRouter>
     </Provider>
  )
}

export default App
