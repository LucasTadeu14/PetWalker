import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import logo from "../../images/logo.png"
import { FiMenu, FiShoppingCart, FiLogOut, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { CartContext } from "../../contexts/CartContext";
import uiController from "../uiController";
 
const linkStyle = "mx-4 text-white hover:scale-105 hover:text-emerald-300 duration-100 select-none cursor-pointer"

export function Header(){
    const { signed, loadingAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const { cartAmount } = useContext(CartContext);

    async function logOut(){
        await signOut(auth)
    }


    return(
        <header className="w-full bg-header fixed z-50">
            <nav className="w-full flex h-17 items-center justify-between 2xl:max-w-7xl mx-auto select-none">
                
                <button onClick={() => navigate("/")}>
                <img src={logo} alt="logo PetWalker" className="h-10 ml-5 hover:scale-105 duration-200 cursor-pointer" />
                </button>

                <div className="hidden sm:flex justify-center gap-6">
                <button onClick={() => navigate("/")} className={linkStyle}>Home</button>
                <button onClick={() => navigate("/products")} className={linkStyle}>Produtos</button>
                <button onClick={() => navigate("/about")} className={linkStyle}>Sobre</button>
                </div>

                <div className="flex items-center gap-4 mr-5">
                {!loadingAuth && signed && (
                    <Link onClick={logOut} to="/login">
                    <FiLogOut size={24} color="#FFF" className="hidden sm:flex hover:scale-110 duration-150" />
                    </Link>
                )}

                {!loadingAuth && !signed && (
                    <Link to="/login">
                    <FiUser size={24} color="#FFF" className="hidden sm:flex hover:scale-110 duration-150" />
                    </Link>
                )}

                <Link className="relative" to="/cart">
                    <FiShoppingCart size={24} color="#FFF" className="flex hover:scale-110 duration-150 cursor-pointer" />
                    {cartAmount > 0 && (
                        <span className="absolute -top-3 -right-3 justify-center bg-emerald-400 rounded-full w-5 h-5 flex items-center">
                        {cartAmount}
                        </span>
                    )}
                </Link>

                <button onClick={uiController}>
                    <FiMenu size={24} color="#FFF" className="sm:hidden flex" />
                </button>

                </div>
            </nav>
        </header>
    )
}