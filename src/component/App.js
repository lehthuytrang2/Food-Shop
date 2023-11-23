
import '../App.css';
import CreateContainer from './CreateContainer';
import Header from './Header';
import MainContainer from './MainContainer';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'


function App() {
  return (
    <AnimatePresence mode="wait">
      <div className='w-full h-auto flex bg-primary'>
        <Header />
        <main className="mt-16 md:mt-24 p-8 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
      
      
    </AnimatePresence>
    
  );
}

export default App;
