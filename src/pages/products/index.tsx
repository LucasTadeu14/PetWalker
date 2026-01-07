import { useEffect, useState, useContext } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import BackGround from "/images/BackGround_Page.jpg"

import { api } from '../../services/firebaseConnection'
import { CartContext } from '../../contexts/CartContext';

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Products() {
  const { addItemCart } = useContext(CartContext)

  const [products, setProducts] = useState<ProductProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getProducts() {
          try {
            const response = await api.get("/products")
            setProducts(response.data)
          }
          catch(error){
            console.log("Erro ao buscar produtos", error)
          } finally {
            setIsLoading(false)
          }
      }

      getProducts();
    }, []) 
    

  function handleAddCartItem(product: ProductProps){
      addItemCart(product);
  }


  return (
    <div
      className="min-h-dvh select-none"
      style={{ backgroundImage: `url(${BackGround})`, backgroundSize: "cover" }}
    >
      <main className="w-full max-w-7xl px-4 mx-auto py-10">
        <h1 className="font-bold text-3xl mb-4 mt-10 text-center text-white">
          Produtos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 2xl:grind-cols-1">
           {isLoading ? Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="
                      w-full
                      h-[380px]
                      rounded-2xl
                      bg-linear-to-r
                      from-white/10
                      via-white/30
                      to-white/10
                      bg-size-[200%_100%]
                      animate-shimmer
                    "
              />
           )) 
           : products.map((product) => (
                <section
                  key={product.id}
                  className="w-full rounded-2xl p-4 flex flex-col shadow-lg bg-products backdrop-blur-md"
                >
                  <img
                    className="rounded-xl max-h-60 object-cover mb-3"
                    src={product.cover}
                    alt={product.title}
                  />

                  <h2 className="font-semibold text-lg text-white mb-2">
                    {product.title}
                  </h2>

                  <p className="text-white/90 text-sm mb-4">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center mt-auto">
                    <strong className="text-white text-lg">
                      {product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </strong>

                    <button
                      onClick={() => handleAddCartItem(product)}
                      className="bg-emerald-800 hover:scale-110 duration-150 cursor-pointer p-2 rounded-md transition"
                    >
                      <BsCartPlus size={20} color="#FFF" />
                    </button>
                  </div>
                </section>
           ))
          } 

        </div>
      </main>
    </div>
  )
}
