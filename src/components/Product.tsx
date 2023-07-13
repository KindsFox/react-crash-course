import React, { useState } from 'react'
import { IProduct } from '../models'

interface ProductProps{
    product: IProduct
}

//props - объект, содержащий в себе все параметры, которые мы передаем в product
export function Product({product}: ProductProps){
    //описание локального State
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'

    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    return(
        <div
        className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
        <img src={product.image} className="w-1/6" alt={product.title}></img>
        <p>{product.title}</p>
        <p className="font-bold">{product.price}</p>
        {/*prev => !prev - ф-ция колбек(позволяет точечно изменять состояние), принимает в себя предыдущее состояние и мы отталкиваемся от предыдущего состония */}
        <button className={btnClasses.join(' ')}        
        onClick={() => setDetails(prev => !prev)}
        >
            {/*вывод динамического текста */}
            {details ? 'Hide Details' : 'Show Details'}
        </button>
              {/*details && - условный оператор, если details то показываем описание */}
           {details && <div>
                <p>{product.description}</p>
                {/*Инлайн стили - описываются в рамках объекта*/}
                <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p>
            </div>}
        </div>        
    )
}