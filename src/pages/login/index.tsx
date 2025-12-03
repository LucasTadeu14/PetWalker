import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";

import { Input } from "../../components/input";
import { auth } from "../../services/firebaseConnection";

import CatLoginImage from "/images/Cat_Login_Page.png";
import FirstPageImage from "/images/BackGround_Login_And_Register_Page.jpg";
import Logo from "/images/Logo_In-line.png";
import LogoPata from "/images/Logo_Pata.png";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Preencha os campos!");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Swal.fire({
          title: "Logado com sucesso!",
          icon: "success",
          draggable: true,
          confirmButtonColor: "#09a934",
        });
        navigate("/", { replace: true });
      })

      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado :(",
          confirmButtonColor: "#09a934",
        });
      });
  }

  return (
    <div className="flex flex-row h-screen min-h-[800px] select-none">
      <section className="bg-emerald-400 flex-1 transition-all duration-700 flex flex-col items-center relative">
        <div className="flex w-full items-start">

          <a href="/">
            <img
              src={LogoPata}
              alt="Logo Pata"
              className="h-8 ml-13 mt-8"
            />
          </a>
          <a href="/">
            <img
              src={Logo}
              alt="Logo PetWalker"
              className="h-5 mt-10 ml-2"
            />
          </a>
        </div>

        <img
          src={CatLoginImage}
          alt="Imagem de cachorro ou gato"
          className="h-30 sm:h-45 top-41 absolute sm:top-27"
        />

        <nav className="flex-col mt-53 bg-white sm:h-[545px] sm:w-[379px] rounded-3xl flex justify-end shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col items-center px-6 py-8">
            <p className="font-luckiest text-verdeAgua font-light text-[30px] tracking-wide mb-10">
              LOGIN
            </p>

            <label className="pl-5 text-verdeAgua font-medium w-full" htmlFor="email">
              Email:
            </label>

            <Input
              placeholder="Escreva seu email aqui..."
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="pl-5 text-verdeAgua font-medium pt-8 w-full" htmlFor="password">
              Senha:
            </label>
            
            <Input
              placeholder="***********"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="flex justify-center pt-8">
              Não tem uma conta?
              <a className="font-medium pl-2 text-blue-700 hover:underline" href="/register">
                Registrar
              </a>
            </p>

            <div className="flex justify-center items-center mt-8 mb-15">
              <button
                type="submit"
                className="
                  flex justify-center border-2 border-verdeAgua
                  rounded-full bg-verdeAgua px-30 py-2.5 text-center text-white
                  outline-0 transition-all duration-200 ease-in-out
                  hover:bg-transparent hover:text-verdeAgua cursor-pointer
                  max-w-[170px]
                "
              >
                Acessar
              </button>
            </div>
          </form>
        </nav>
      </section>

      <section className="hidden 2xl:flex-3 2xl:flex items-center justify-center">
        <img
          src={FirstPageImage}
          alt="Imagem inicial PetWalker"
          className="w-full h-dvh object-cover"
        />
      </section>
    </div>
  );
}


