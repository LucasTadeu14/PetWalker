import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import logo from "../../images/logo.png"
import { FiLogIn, FiUser, FiMenu, FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
 
const linkStyle = "mx-4 text-white hover:scale-105 hover:text-emerald-300 duration-100 select-none cursor-pointer"

export function Header(){
    const { signed, loadingAuth} = useContext(AuthContext);
    const navigate = useNavigate();


    return(
        <header className="w-full bg-header fixed z-50">
            <nav className="w-full flex h-17 items-center justify-between 2xl:max-w-7xl mx-auto select-none">
                
                <button onClick={() => navigate("/home")}>
                <img src={logo} alt="logo PetWalker" className="h-10 ml-5 hover:scale-105 duration-200 cursor-pointer" />
                </button>

                <div className="hidden sm:flex justify-center gap-6">
                <button onClick={() => navigate("/home")} className={linkStyle}>Home</button>
                <button onClick={() => navigate("/products")} className={linkStyle}>Produtos</button>
                <button onClick={() => navigate("/about")} className={linkStyle}>Sobre</button>
                <button onClick={() => navigate("#")} className={linkStyle}>Dicas</button>
                </div>

                <div className="flex items-center gap-4 mr-5">
                {!loadingAuth && signed && (
                    <Link to="/home">
                    <FiUser size={24} color="#FFF" className="hidden sm:flex hover:scale-110 duration-150" />
                    </Link>
                )}

                {!loadingAuth && !signed && (
                    <Link to="/">
                    <FiLogIn size={24} color="#FFF" className="hidden sm:flex hover:scale-110 duration-150" />
                    </Link>
                )}

                <Link to="/cart">
                    <FiShoppingCart size={24} color="#FFF" className="flex hover:scale-110 duration-150 cursor-pointer" />
                </Link>

                <Link to="#">
                    <FiMenu size={24} color="#FFF" className="sm:hidden flex" />
                </Link>

                </div>
            </nav>
        </header>
    )
}