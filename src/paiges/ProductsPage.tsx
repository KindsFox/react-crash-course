import React, { useContext } from 'react'
import { useProducts } from '../hooks/products'
import { IProduct } from '../models'
import { ModalContext } from '../context/ModalContext'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'
import { Product } from '../components/Product'
import { Modal } from '../components/Modal'
import { CreateProduct } from '../components/CreateProduct'

export function ProductsPage() {
     /*close: closeModal - переименование */
  const {loading, error, products, addProduct} = useProducts()
  const {modal, open, close: closeModal} = useContext(ModalContext)
  const createHandler = (product: IProduct) => {
    closeModal()
    addProduct(product)
  }


  //нормальный синтаксис для react
  return(
    //название классов - точечный css
    //если хотим что-то передать как строку, то исп "", если как JS, то {}
    <div className="container mx-auto max-w-2xl pt-5">
      { loading && <Loader /> }
      { error && <ErrorMessage error={error} /> }
      {/*Циклы*/}
      {/*Статические данные */}
      { products.map(product => <Product product={product} key={product.id} />) }


      {/*Модальное окно */}
      {modal && <Modal title="Create new Product" onClose={closeModal}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button className="fixed bottom-5 right-5 rounded-full bg-yellow-700 text-white text-2xl px-4 py-2"
      onClick={() => open()}>
        +
      </button>
            
      {/*<Product product={products[0]}/>*/}
      {/*<Product product={products[1]}/>*/}
    </div>
  )
}