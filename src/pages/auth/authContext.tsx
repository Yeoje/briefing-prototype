import React from "react";
import { useHistory } from "react-router";

export const AuthContext = React.createContext<AuthState>({
    authValues: {
        authenticated: false,
        user: null,
    },
    login: () => Promise.resolve(false),
    logout: () => Promise.resolve(false)
});

interface AuthContextProps {
    user: User | null
    authenticated: boolean
}

export interface User {
    username: string
    password: string
}

interface AuthState {
    authValues: AuthContextProps
    login: (user: User) => Promise<boolean>
    logout: () => Promise<boolean>
}
export const AuthProvider: React.FC = ({ children }) => {
    const history = useHistory();
    const [authValues, setAuthValues] = React.useState<AuthContextProps>({
        authenticated: false,
        user: null,
    });

    const login = ({ username: user, password }: User): Promise<boolean> => {
        return new Promise((resolve) => {
            if (user === window.localStorage.getItem("username") && password === window.localStorage.getItem("password")) {
                setAuthValues({
                    authenticated: true,
                    user: {username: user, password}
                });
                resolve(true);
            } else {
                resolve(false);
            }
        });
    };

    const logout = () => {
        setAuthValues({
            authenticated: false,
            user: null
        })
        history.replace("/login");
        return Promise.resolve(true);
    };

    let state: AuthState = {
        authValues,
        login,
        logout,
    };

    return <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
};

export default AuthProvider;