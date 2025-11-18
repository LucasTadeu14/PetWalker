import { type ReactNode, createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConnection";

interface AuthProviderProps {
    children: ReactNode
}

interface UserProps {
    uid: string;
    name: string | null;
    email: string | null;
}

type AuthContextData = {
    signed: boolean;
    loadingAuth: boolean;
    user: UserProps | null; 
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps | null>(null);
    const [loadingAuth, setLoadingAuth] = useState(true);
 
    useEffect(() => {

        const unsub = onAuthStateChanged(auth, (firebaseUser) => {

            if (firebaseUser) {
                setUser({
                    uid: firebaseUser.uid,
                    name: firebaseUser.displayName,
                    email: firebaseUser.email
                });
            } else {
                setUser(null);
            }

            setLoadingAuth(false);
        });

        return () => unsub();

    }, []);

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                loadingAuth,
                user
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
