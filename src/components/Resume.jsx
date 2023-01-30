import { useContext } from "react"
import CounterContext from "../context/CounterContext"

export const Resume = () => {

    const { subTotal, fees } = useContext(CounterContext);

    const getTax = () => {
        const tax = subTotal * .10;
        return tax
    }

    const getTotal = () => {
        const total = subTotal + fees + getTax();
        return(total);
    }

  return (
    <div className="p-3 border-t-2 border-gray-300">
        <div className="flex items-center justify-between flex-wrap">
            <p>Subtotal</p>
            <p>$ {subTotal.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between flex-wrap">
            <p>Shipping fees</p>
            <p>$ {fees.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between flex-wrap">
            <p>Taxes</p>
            <p>$ {getTax().toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between flex-wrap">
            <p><strong>Total (including tax)</strong></p>
            <p><strong>$ {getTotal().toFixed(2)}</strong></p>
        </div>
    </div>
  )
}
