import { useEffect, useState } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import BackGround from "../../images/BackGround_Page.jpg"

import { api } from '../../services/firebaseConnection'

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Products() {
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products")
      setProducts(response.data)
    }

    getProducts();
  }, [])

  const colors = ["rgba(255,255,255,0.1)", "rgba(0,0,0,0.3)"];

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
          {products.map((product, index) => (
            <section
              key={product.id}
              style={{ backgroundColor: colors[index % colors.length] }}
              className="w-full rounded-2xl p-4 flex flex-col shadow-lg backdrop-blur-md"
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

                <button className="bg-zinc-900 hover:bg-zinc-800 p-2 rounded transition">
                  <BsCartPlus size={20} color="#FFF" />
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}
