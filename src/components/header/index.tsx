import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import logo from "../../images/logo.png"
import { FiLogIn, FiUser, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
 
const linkStyle = "mx-4 text-white hover:scale-105 hover:text-emerald-300 duration-100 select-none cursor-pointer"

export function Header(){
    const { signed, loadingAuth} = useContext(AuthContext);


    return(
        <header className="w-full bg-header fixed z-50">
            <nav className=" w-full flex h-17 items-center justify-between 2xl:max-w-7xl  select-none mx-auto">

                <a href="/home"><img src={logo} alt="logo PetWalker" className="h-10 ml-5 hover:scale-105 duration-200 cursor-pointer"/></a>
                <nav className="hidden sm:flex justify-center">
                    <a href="/home" className={linkStyle}>Home</a>
                    <a href="#" className={linkStyle}>Produtos</a>
                    <a href="/about" className={linkStyle}>Sobre</a>
                    <a href="#" className={linkStyle}>Dicas</a>
                </nav>
                
                {!loadingAuth && signed && (
                    <Link to="/home">
                    <FiUser size={24} color="#FFF" className="hidden sm:flex me-5 hover:scale-110 duration-150" />
                    </Link>
                )}

                {!loadingAuth && !signed && (
                    <Link to="/">
                        <FiLogIn size={24} color="#FFF" className=" hidden sm:flex mr-5 hover:scale-110 duration-150" />
                    </Link>
                )}
                
                <button className="sm:hidden flex mr-5">
                    <FiMenu size={24} color="#FFF" className="sm:hidden flex"/>
                </button>

            </nav>
        </header>
    )
}