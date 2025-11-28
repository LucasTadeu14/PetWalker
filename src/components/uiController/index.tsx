import { useUiController } from "../../contexts/uiControllerContext";
import { auth } from "../../services/firebaseConnection";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const linkStyle = "py-5 text-white hover:mx-5 border-b px-5 flex hover:scale-110 duration-300 cursor-pointer"

export function RightPanel() {
  const { open, closePanel } = useUiController();
  const { signed, loadingAuth} = useContext(AuthContext);

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
          fixed top-0 right-0 h-full w-full bg-defaultGray z-50 shadow-xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
          `}>

        <div className="p-5 flex flex-col">
          <button
            onClick={closePanel}
            className="px-5 mb-15 pt-15 pb-3 w-24 bg-emerald-800 text-white font-medium rounded-3xl cursor-pointer"
          >
            Fechar
          </button>

          <a href="/" className={linkStyle}>Home</a>
          <a href="/products" className={linkStyle}>Produtos</a>
          <a href="/about" className={linkStyle}>Sobre</a>

          {!loadingAuth && signed && (
            <a onClick={logOut} href="/" className={linkStyle}>Sair</a>
          )}

          {!loadingAuth && !signed && (
            <a href="/login" className={linkStyle}>Logar</a>
          )}

        </div>
      </div>
    </>
  );
}