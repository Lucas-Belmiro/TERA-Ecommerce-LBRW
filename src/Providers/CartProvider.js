import React, { useState } from 'react'

export const CartContext = React.createContext({})

export const CartProvider = (props) => {
    const [numeroDeitems, setNumeroDeitems] = useState(0)
    const [nomeLog, setNomeLog] = useState('')
    const [idUser, setIdUser] = useState('')

    return (
        <CartContext.Provider
            value={{
                numeroDeitems,
                setNumeroDeitems,
                nomeLog,
                setNomeLog,
                idUser,
                setIdUser,
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}
