import React from "react";  

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

export interface Userextra extends User{
    email: string
    naam: string
}

interface AuthState {
    authValues: AuthContextProps
    login: (user: User) => Promise<boolean>
    logout: () => Promise<boolean>
}
export const AuthProvider: React.FC = ({ children }) => {
    const [authValues, setAuthValues] = React.useState<AuthContextProps>({
        authenticated: false,
        user: null,
    });

    const login = ({ username, password }: User): Promise<boolean> => {
        return new Promise((resolve) => {
            if(Response){
                try {
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
                } catch(e) {
                    resolve(false);
                }
            }
        });
    };

    const logout = () => {
        setAuthValues({
            authenticated: false,
            user: null
        })
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