import { useState } from 'react'

export const useCounter = (inicial,min,max) => {
    const [cantidad, setCantidad] = useState(inicial)

    const decrementar = () => {
        cantidad > min && setCantidad(prev=>prev-1)
    }
    const incrementar = () => {
        cantidad < max && setCantidad(prev=>prev+1)
    }

    return {decrementar, incrementar, cantidad}
}