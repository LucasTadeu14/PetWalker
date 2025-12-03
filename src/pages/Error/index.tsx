import ErrorDog from "/images/Dog_Error_Page.png" 

export function Error(){
    return(
        <div className="bg-emerald-400 h-screen  items-center select-none flex justify-center flex-col ">
            <p className="text-white text-[150px] font-extralight">404</p>
            <p className="text-white text-5xl font-extralight">O link que você tentou acessar não está disponível.</p>
            <a href="/"><button className="mt-10 bg-defaultGray rounded-[7px] py-3 px-6 flex items-center justify-center cursor-pointer hover:scale-105 duration-200 text-white text-[20px]  font-extralight">voltar para Home</button></a>
            <img src={ErrorDog} className="max-h-[400px] mt-10" alt="dog-error-page"/>
        
        </div>
    )
}