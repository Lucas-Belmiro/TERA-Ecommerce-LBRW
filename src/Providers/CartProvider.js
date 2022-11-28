import React, { useState } from 'react'

export const CartContext = React.createContext({})

export const CartProvider = (props) => {
    const [numeroDeitems, setNumeroDeitems] = useState(0)
    const [nomeLog, setNomeLog] = useState('')

    return (
        <CartContext.Provider
            value={{ numeroDeitems, setNumeroDeitems, nomeLog, setNomeLog }}
        >
            {props.children}
        </CartContext.Provider>
    )
}
