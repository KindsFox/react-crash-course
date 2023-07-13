import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { IProduct } from "../models"

export function useProducts(){
    
  const [products, setProducts] = useState<IProduct[]>([])
  /*Индикация загрузки*/
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addProduct(product: IProduct) {
    /*Аппелирует к ф-ции  setProducts, к предыдущему его состоянию
    prev - предыдущее состояние 
    мы возвращаем новый массив, разворачиваем предыдущее состояние и в конец добавляем наш продукт */
    setProducts(prev => [...prev, product])
  }

  /*Ассинхронный запрос + загрузка данных из БД */
  async function fetchProducts() {
    try{
      setError('')
      setLoading(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
      setProducts(response.data)
      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError      
      setLoading(false)
      setError(error.message)
    }
    
  }

  /*Загрузка данных с помощью useEffect */
  useEffect(() => {
   fetchProducts()
  }, [])

  return {products, error, loading, addProduct}
}