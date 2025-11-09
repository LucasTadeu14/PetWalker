import { useEffect, useState } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import BackGround from "../../images/BackGround_Page.jpg"

import { api } from '../../services/firebaseConnection'

interface ProductProps{
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Products(){
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    async function getProducts(){
      const response = await api.get("/products")
      setProducts(response.data)
    }

    getProducts();
  }, [])


  return(
    <div className="min-h-dvh select-none"
         style={{ backgroundImage: `url(${BackGround})` }}>

      <main className="w-full max-w-7xl px-4 mx-auto p-5">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>

        <div className="grid grid-cols-1 ms:grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {products.map( (product) => (
            <section key={product.id} className="w-full">
              <img
                className="w-full rounded-lg max-h-70 mb-2"
                src={product.cover}
                alt={product.title}
              />
            <p className="font-medium mt-1 mb-2">{product.title}</p>
  
            <div className="flex gap-3 items-center">
              <strong className="text-zinc-700/90">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })}
              </strong>

              <button className="bg-zinc-900 p-1 rounded">
                <BsCartPlus size={20} color="#FFF"/>
              </button>
            </div>
  
            </section>
          ))}

        </div>

      </main>
    </div>
  )
}