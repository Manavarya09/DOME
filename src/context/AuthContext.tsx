import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthService } from '../services/apiServices';

interface User {
    id: string;
    email: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (credentials: any) => Promise<void>;
    signup: (data: any) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedUser = AuthService.getCurrentUser();
        if (storedUser) {
            setUser(storedUser);
        }
        setIsLoading(false);
    }, []);

    const login = async (credentials: any) => {
        const data = await AuthService.login(credentials);
        if (data?.data?.user) {
            setUser(data.data.user);
        }
    };

    const signup = async (userData: any) => {
        const data = await AuthService.signup(userData);
        if (data?.data?.user) {
            setUser(data.data.user);
        }
    };

    const logout = () => {
        AuthService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
