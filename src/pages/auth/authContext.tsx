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

    const login = ({ username, password }: User): Promise<boolean> => {
        return new Promise((resolve) => {
            const users:User[] = JSON.parse(window.localStorage.getItem('users') ?? '[]')
            const user = users.find((obj) => username === obj.username && password === obj.password)
            if (user) {
                setAuthValues({
                    authenticated: true,
                    user
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