import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps){
    return(
        <input className="border-verdeAgua border-2 max-w-[350px] w-full rounded-[15px] py-2 placeholder:gray placeholder:pl-2 focus:outline-none pl-3"
        {...props}
        />
    )
}