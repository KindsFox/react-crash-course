import React, { useState } from 'react'
import { IProduct } from '../models'
import axios from 'axios'
import { ErrorMessage } from './ErrorMessage'

const productData: IProduct =  {
                    title: '',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic',
                    rating: {
                        rate: 42,
                        count: 10
                    }
                }

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}                

export function CreateProduct({ onCreate }: CreateProductProps) {
    /*Работа с input */
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        /*Базовая валидация 
        trim - удаление пробелов справа и слева*/
        if (value.trim().length == 0 ){
            setError('Pleace value enter title.')
            return
        }

        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
    }

    /*В <> прописываем специальный тип от какого конкретно элемента идет наше событие */
    const submmitHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return(
        <form onSubmit={submitHandler}>
            <input 
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product title..."
                value={value}
                onChange={event => setValue(event.target.value)} 
                />

                {error && <ErrorMessage error={error} />}
            <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
        </form>
    )
}