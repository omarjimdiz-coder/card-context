import { useContext } from 'react'
import CounterContext from '../context/CounterContext'
import { AiOutlinePlus } from 'react-icons/ai'
import { GrFormSubtract } from 'react-icons/gr'
import { BsFillTrashFill } from 'react-icons/bs';

export const Product = ({item}) => {

    const { handleAdd, handleSubtract, handleDelete } = useContext(CounterContext);

  return (
    
    <div className='flex items-center flex-row p-3 ' key={item.id}>
        <div className='w-1/6'>
            <figure className='bg-gray-300 rounded-lg' style={{width: '100px', height: '100px'}}>
            </figure>
        </div>

        <div className='w-1/5'>
            <p>{item.item_name}</p>
            <small>{item.short_description}</small>
        </div>

        <div className='flex items-center gap-5 justify-end w-1/5'>
            <button 
                onClick={() => handleSubtract(item)}
                className='bg-gray-300 hover:bg-gray-400 p-1 rounded-xl'
            >
                <GrFormSubtract />
            </button>
            <p>{item.quantity}</p>
            <button 
                onClick={() => handleAdd(item)}
                className='bg-gray-300 hover:bg-gray-400 p-1 rounded-xl'
            >
                <AiOutlinePlus />
            </button>
        </div>

        <div className='w-1/5 text-end'>
            <p>${item.price_without_tax}</p>
        </div>

        <div className='w-1/5 flex justify-end'>
            <button onClick={() => handleDelete(item)}>
                <BsFillTrashFill
                    className='text-xl' 
                    style={{color: '#94a3b8'}}
                />
            </button>
        </div>
    </div>
  )
}
