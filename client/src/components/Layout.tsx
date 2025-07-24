import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Video, User, LogOut } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
}

export function Layout({ children, showHeader = false }: LayoutProps) {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {showHeader && user && (
        <header className="bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="mr-2 md:mr-3">
                  <img 
                    src="/attached_assets/logo_1753365092179.jpeg" 
                    alt="Talkwink Logo" 
                    className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover"
                  />
                </div>
                <h1 className="text-lg md:text-2xl font-bold text-white">Talkwink</h1>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4">
                <div className="flex items-center text-white text-sm md:text-base">
                  <User className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">{user.username}</span>
                </div>
                <button
                  onClick={signOut}
                  className="flex items-center text-white hover:text-purple-300 transition-colors text-sm md:text-base"
                >
                  <LogOut className="w-5 h-5 mr-1" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </header>
      )}
      <main className={showHeader ? '' : 'min-h-screen'}>
        {children}
      </main>
    </div>
  );
}