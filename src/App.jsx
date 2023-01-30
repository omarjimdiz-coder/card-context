
import { Header } from './components/Header';
import { Products } from './components/Products';
import { Resume } from './components/Resume';
import { CounterProvider } from './context/CounterContext';


function App() {
  return (
    <div className='bg-stone-200'> 
      <CounterProvider>
        <Header />
        <Products />
        <Resume />
      </CounterProvider>
      
    </div>
  )
}

export default App
