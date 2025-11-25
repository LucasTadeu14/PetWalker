import { useUiController } from "../../contexts/uiControllerContext";
import { auth } from "../../services/firebaseConnection";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { FiUser, FiLogOut} from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


export function RightPanel() {
  const { open, closePanel } = useUiController();
  const { signed, loadingAuth} = useContext(AuthContext);

  const linkStyle = "py-5 hover:mx-5 border-b px-5 flex hover:scale-110 duration-300 cursor-pointer"

  async function logOut(){
        await signOut(auth)
    }

  return (
    <>
      {open && (
        <div
          onClick={closePanel}
          className="fixed inset-0 bg-black/40"
        />
      )}

      <div
        className={`
          fixed top-0 right-0 h-full w-full bg-header z-50 shadow-xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-5 flex flex-col">
          <button
            onClick={closePanel}
            className="px-5 mb-15 pt-15 pb-3 w-24 bg-emerald-800 text-white font-medium rounded-3xl cursor-pointer"
          >
            Fechar
          </button>

          <Link to="/" className={linkStyle}>Home</Link>
          <Link to="/products" className={linkStyle}>Produtos</Link>
          <Link to="/about" className={linkStyle}>Sobre</Link>


          {!loadingAuth && signed && (
            <Link onClick={logOut} to="/">
              <FiLogOut size={24} color="#FFF" className={linkStyle} />
            </Link>
          )}

          {!loadingAuth && !signed && (
            <Link to="/">
              <FiUser size={24} color="#FFF" className={linkStyle} />
            </Link>
          )}

        </div>
      </div>
    </>
  );
}
