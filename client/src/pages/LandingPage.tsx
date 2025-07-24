import React from 'react';
import { Link } from 'wouter';
import { ScrollingPhotos } from '../components/ScrollingPhotos';
import { Video, Shield, Heart, Star } from 'lucide-react';

import logo from "@assets/logo.jpeg";

export function LandingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ScrollingPhotos />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/75 via-purple-800/70 to-indigo-900/75" />
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-4 md:p-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center">
              <div className="mr-2 md:mr-3">
                <img 
                  src={logo} 
                  alt="Talkwink Logo" 
                  className="h-8 w-8 md:h-12 md:w-12 rounded-full object-cover"
                />
              </div>
              <h1 className="text-xl md:text-3xl font-bold text-white">Talkwink</h1>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Link
                to="/login"
                className="text-white hover:text-purple-300 transition-colors font-medium text-sm md:text-base px-3 py-2 rounded-lg hover:bg-white/10"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 md:px-6 py-2 rounded-full transition-all transform hover:scale-105 font-medium text-sm md:text-base"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Connect with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                {' '}Beautiful Girls
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-100 mb-6 md:mb-8 leading-relaxed px-4">
              Experience premium video calls with verified profiles. 
              Safe, secure, and unforgettable conversations await you.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 px-4">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 md:p-4 mx-auto mb-2 w-fit">
                  <Video className="w-6 h-6 md:w-8 md:h-8 text-purple-300" />
                </div>
                <p className="text-purple-100 text-xs md:text-sm font-medium">HD Video Calls</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 md:p-4 mx-auto mb-2 w-fit">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-purple-300" />
                </div>
                <p className="text-purple-100 text-xs md:text-sm font-medium">100% Secure</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 md:p-4 mx-auto mb-2 w-fit">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-purple-300" />
                </div>
                <p className="text-purple-100 text-xs md:text-sm font-medium">Verified Profiles</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 md:p-4 mx-auto mb-2 w-fit">
                  <Star className="w-6 h-6 md:w-8 md:h-8 text-purple-300" />
                </div>
                <p className="text-purple-100 text-xs md:text-sm font-medium">Premium Experience</p>
              </div>
            </div>

            {/* Call to Action */}
            <Link
              to="/signup"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg md:text-xl font-bold px-8 md:px-12 py-3 md:py-4 rounded-full transition-all transform hover:scale-105 shadow-2xl mb-4"
            >
              Start Your Journey
            </Link>
            
            <p className="text-purple-200 text-sm md:text-base px-4">
              Already have an account? 
              <Link to="/login" className="text-purple-300 hover:text-white ml-1 underline">
                Login here
              </Link>
            </p>
            
            {/* Trust Indicators */}
            <div className="mt-8 md:mt-12 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-purple-200 text-xs md:text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span>1000+ Happy Users</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span>18+ Only</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-4 md:p-6 text-center text-purple-200 text-xs md:text-sm">
          <p>&copy; 2025 Talkwink. All rights reserved. | 18+ Only</p>
        </footer>
      </div>
    </div>
  );
}