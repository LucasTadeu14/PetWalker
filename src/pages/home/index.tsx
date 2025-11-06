import BackGround  from "../../images/BackGround_Page.jpg"
import CatImage from "../../images/Cat_Home_Page.png"
 
export function Home() {
    
  return (
    <div
      className="bg-cover bg-center grid grid-cols-3 h-screen items-center select-none"
      style={{ backgroundImage: `url(${BackGround})` }}
    >
      <img
        src={CatImage}
        alt="gato do home"
        className="max-h-screen justify-self-start"
      />

      <div className="select-none flex flex-col justify-center items-center">
        <h1 className="text-center text-white font-medium font-luckiest uppercase text-7xl tracking-wide select-none my-5">
          Localize seu PET <br /> sempre que <br /> quiser.
        </h1>

        <p className="text-center font-medium text-white my-5 text-[22px]">
          Monitore, localize e fique tranquilo! Descubra como é fácil <br />
          saber onde seu melhor amigo está, a qualquer hora, em <br />
          qualquer lugar. Segurança, diversão e liberdade para você e <br />
          seu pet curtirem juntos.
        </p>

        <button
          className="inline-flex items-center justify-center border-2 border-button rounded-full bg-button px-12 py-2.5 text-center text-white outline-0 transition-all duration-200 ease-in-out no-underline hover:bg-transparent hover:text-white cursor-pointer my-6"
        >
          Começar
        </button>
      </div>
    </div>
  );
}
