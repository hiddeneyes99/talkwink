import React, { createContext, useContext, useEffect, useState } from 'react';
import { signUp as authSignUp, signIn as authSignIn, getCurrentUser, setCurrentUser, AuthUser } from '../lib/auth';

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  signUp: (username: string, password: string) => Promise<{ error?: string }>;
  signIn: (username: string, password: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const signUp = async (username: string, password: string) => {
    try {
      const response = await authSignUp(username, password);
      
      if (response.success && response.user) {
        setUser(response.user);
        setCurrentUser(response.user);
        return {};
      } else {
        return { error: response.error || 'Sign up failed' };
      }
    } catch (error: any) {
      return { error: error.message || 'Sign up failed' };
    }
  };

  const signIn = async (username: string, password: string) => {
    try {
      const response = await authSignIn(username, password);
      
      if (response.success && response.user) {
        setUser(response.user);
        setCurrentUser(response.user);
        return {};
      } else {
        return { error: response.error || 'Login failed' };
      }
    } catch (error: any) {
      return { error: error.message || 'Login failed' };
    }
  };

  const signOut = async () => {
    setUser(null);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}