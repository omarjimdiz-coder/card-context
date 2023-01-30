import { useContext } from 'react';
import CounterContext from '../context/CounterContext';
import { BsCart3 } from 'react-icons/bs';

export const Header = () => {

  const { removeAll } = useContext(CounterContext);  

  return (
    <header className='flex justify-between items-center flex-wrap py-4 px-6'>
        <div className='flex justify-between items-center gap-2' >
            <BsCart3 className='text-2xl'/>
            <p className='text-lg text-gray-800'>Order summary</p>
        </div>
        <button 
          className='text-gray-600'
          onClick={removeAll}
        >Remove all</button>
    </header>
  )
}
