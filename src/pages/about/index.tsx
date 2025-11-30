import BackGround from "../../images/BackGround_Page.jpg"
import AboutCat from "../../images/About_Cat_Page.png"

export function About(){
    return(
        <div className="flex flex-col bg-cover bg-center min-h-[928px] h-screen justify-center items-center  select-none"
            style={{backgroundImage: `url(${BackGround})`}}>

            <div className="bg-button max rounded-3xl flex items-center justify-center z-10 mb-60 mx-5">
                <p className="flex text-center  text-white font-bold text-[10px] sm:text-[20px] p-10">
                    🐾 A PetWalker nasceu da paixão por tecnologia e amor pelos animais. <br />
                    Nosso objetivo é tornar o cuidado com os pets mais prático, seguro e inteligente, unindo <br />
                    o melhor dos produtos tradicionais de pet shop com soluções tecnológicas inovadoras. <br />
                    Aqui você encontra desde os itens mais comuns como rações, brinquedos, camas e acessórios <br />
                    até produtos de última geração, desenvolvidos para facilitar o dia a dia de tutores modernos. <br />
                     Entre nossos diferenciais estão coleiras com GPS integrado, comedouros automáticos <br />
                     inteligentes e bebedouros com controle de hidratação, tudo pensado para garantir o bem-estar <br />
                    e a segurança dos seus companheiros. Acreditamos que a tecnologia pode ser uma grande aliada <br />
                    na relação entre humanos e animais, ajudando a monitorar, cuidar e até entender melhor cada <br />
                    comportamento. Por isso, buscamos sempre oferecer produtos de qualidade,com design funcional <br />
                    e preços justos. Na PetWalker, inovação e carinho andam lado a lado <br />
                    porque cuidar do seu pet é o que nos move.
                </p>
            </div>
            
            <img src={AboutCat} alt="Cat-image" className="max-h-50 [@media(max-height:940px)]:hidden lg:max-h-90 duration-700 ease-in-out transition-all absolute -bottom-8 lg:-bottom-10" />
            
        </div>
    )
}