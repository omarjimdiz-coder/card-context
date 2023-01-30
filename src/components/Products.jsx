
import { useContext } from 'react'
import { Product } from './Product'
import CounterContext from '../context/CounterContext'

export const Products = () => {

    const { data } = useContext(CounterContext)

    return (
        <div className='px-3'>
            {
                data.length ? (
                    data.map(item => (
                        <Product 
                            key={item.id}
                            item={item}
                        />
                    ))
                ) : (
                    <h2 
                        className='text-center text-lg p-3'
                    >
                        No hay productos en el carrito
                    </h2>
                )
            }
        </div>
  )
}
