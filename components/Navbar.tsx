"use client"
import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import logo from "@/public/logo.png"
import Image from "next/image"


export default function Navbar() {
    
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('VN');
    return (
        <>
         <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
         {/* <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50"> */}
                <div className="max-w-7xl mx-auto px-6 py-4">
                  <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                      <Image src={logo} width={200} height={200} alt="logo" /> 
          
                    </div>
        
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                      <a href="#services" className="text-gray-700 hover:text-rose-400 transition">Dịch vụ</a>
                      <a href="#gallery" className="text-gray-700 hover:text-rose-400 transition">Gallery</a>
                      <div className="flex items-center shadow-lg p-2 rounded-full justify-between items-center space-x-2">
                        <button 
                          onClick={() => setLanguage('VN')}
                          className={`px-3 py-1 rounded-full flex ${language === 'VN' ? 'bg-[#C9A39A] text-white' : 'text-gray-600'}`}
                        >
      
                        <Globe className='pr-2'/>
                        <span> VN</span>
                        </button>
                        <button 
                          onClick={() => setLanguage('EN')}
                          className={`px-3 py-1 rounded-full flex ${language === 'EN' ? 'bg-[#C9A39A] text-white' : 'text-gray-600'}`}
                        >
                        <Globe  className='pr-2' />
                                                  <span> EN</span>

                        </button>
                      </div>
                      <button className="bg-gradient-to-b from-[#C9A39A] to-[#f0e4e0] p-3.5  text-white px-6 py-2 rounded-full hover:shadow-lg transition transform hover:scale-105">
                        Đặt Lịch Ngay
                      </button>
                    </div>
        
                    {/* Mobile Menu Button */}
                    <button 
                      className="md:hidden"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      {isMenuOpen ? <X /> : <Menu />}
                    </button>
                  </div>
        
                  {/* Mobile Menu */}
                  {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-3">
                      <a href="#services" className="block text-gray-700 hover:text-rose-400">Dịch vụ</a>
                      <a href="#gallery" className="block text-gray-700 hover:text-rose-400">Gallery</a>
                      <button className="w-full bg-gradient-to-b from-rose-300 to-pink-400 text-white px-6 py-2 rounded-full">
                        Đặt Lịch Ngay
                      </button>
                    </div>
                  )}
                </div>
              </nav>
        </>
    )
}