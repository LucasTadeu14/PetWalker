import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Link } from "react-router-dom";

import BackGround from "/images/BackGround_Page.jpg"

export function Cart(){
    const { cart, total, addItemCart, removeItemCart} = useContext(CartContext);


    return(
        <div className="h-screen bg-cover select-none"
            style={{ backgroundImage: `url(${BackGround})` }}>

            <div className="w-full max-w-7xl mx-auto py-10">
                    <h1 className="font-medium text-white text-2xl text-center my-4">Meu carrinho</h1>

                    {cart.length === 0 &&(
                        <div className=" flex flex-col items-center justify-center">
                            <p className="text-white font-medium mt-50 text-2xl duration-100 md:text-4xl">Ops seu carrinho esta vazio...</p>
                            <Link to="/products" className="mt-10 bg-emerald-800 rounded-[7px] py-3 px-6 flex items-center justify-center cursor-pointer hover:scale-105 duration-200 text-white text-[20px] font-extralight">Acessar Produtos</Link>
                        </div>
                    )}

                    {cart.map( (item) => (
                        <section key={item.id}  className="flex items-center justify-between border-b-2 border-gray-300 mx-5">
                            <img
                            src={item.cover}
                            alt={item.title} 
                            className="w-28 rounded-xl my-2"
                            />

                            <strong className="text-white">Preço: {item.price}</strong>

                            <div className="flex items-center justify-center gap-3">
                            <button 
                            onClick={ () => removeItemCart(item)}
                            className="bg-emerald-800 px-2 rounded text-white font-medium flex items-center justify-center hover:scale-105 duration-300 cursor-pointer"
                            >
                                -
                            </button>

                            <p className="text-white">{item.amount}</p>

                            <button 
                            onClick={ () => addItemCart(item)}
                            className="bg-emerald-800 px-2 rounded text-white font-medium flex items-center justify-center hover:scale-105 duration-300 cursor-pointer"
                            >
                                +
                            </button>
                            </div>


                            <strong className="text-white float-right">
                            SubTotal: <br />
                            {item.total.toLocaleString("pt-BR", {
                                style:"currency",
                                currency: "BRL"
                            })}
                            </strong>  
                        </section>
                    ))}

                    {cart.length !== 0 && (
                        <p className="font-bold mt-4 pl-5 text-white">Total: {total}</p>
                    )}
            </div>
        </div>
    )
}