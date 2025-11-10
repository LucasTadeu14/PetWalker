import BackGround from "../../images/BackGround_Page.jpg"

export function Cart(){


    return(
        <div className="h-screen select-none"
            style={{ backgroundImage: `url(${BackGround})` }}>

        <div className="w-full max-w-7xl mx-auto mt-11">
            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>
                <section className="flex items-center justify-between border-b-2 border-gray-300 mx-5">
                <img
                src=""
                alt="Logo produto" 
                className="w-28"
                />

                <strong>`Preço: R$`</strong>

                <div className="flex items-center justify-center gap-3">
                <button
                className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
                >
                    -
                </button>

                1

                <button
                className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
                >
                    +
                </button>
                </div>


                <strong className="float-right">
                SubTotal: R$1.000
                </strong>  
            </section>
            

            <p className="font-bold mt-4 pl-5">Total: R$1.000</p>
            </div>
        </div>
    )
}