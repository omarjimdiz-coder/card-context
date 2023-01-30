import { items } from '../json/data.json';
import { createContext, useEffect, useState } from 'react';

const CounterContext = createContext();

const CounterProvider = ({children}) => {
    
    const [data, setData] = useState(items);
    const [subTotal, setSubTotal] = useState(0);
    const fees = data.reduce((acc, actual) => acc + actual.shipping_fee, 0);

    useEffect(() => {
        setSubTotal(data.reduce((acc, actual) => acc + actual.price_without_tax, 0));
    }, []);
    
    
    const handleAdd = (item) => {
        if(data.find(product => product.id === item.id)){
            const products = data.map(product => 
                product.id === item.id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            );

            setSubTotal(subTotal + item.price_without_tax);
            return setData([...products]);
        }
        
        setData([...data, product]);
    } 
    
    const handleSubtract = (item) => {
        if(data.find(product => product.id === item.id)){
            const products = data.map(product => 
                product.id === item.id && item.quantity !== 0
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            );

            if(subTotal !== 0 && item.quantity !== 0){
                setSubTotal(subTotal - item.price_without_tax);
            }
            
            return setData([...products]);
        }

        setData([...data, product]);
    }

    const handleDelete = (item) => {
        setData(oldData => {
            return oldData.filter(product => product.id !== item.id)
        });

        if(subTotal !== 0){
            setSubTotal(subTotal - item.price_without_tax * item.quantity);
        }
    } 

    const removeAll = () => {
        setData([]);
        setSubTotal(0)
    }

    const datas = {
        handleAdd, 
        handleSubtract, 
        data, 
        subTotal, 
        handleDelete, 
        fees,
        removeAll
    }

    return(
        <CounterContext.Provider
            value={datas}
        >
            {children}
        </CounterContext.Provider>
    )
}

export {CounterProvider};
export default CounterContext;