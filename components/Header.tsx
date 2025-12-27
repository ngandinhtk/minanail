"use client"
import logo from "@/public/logo.png"
import Image from "next/image"


export default function Header(){
    return(
        <div>
         <header className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#C9A39A] flex items-center justify-center">
            <Image src={logo} width={100} height={100} alt="logo"> </Image>
          </div>
          <div>
            <h1 className="font-bold text-gray-800">Mina Nail</h1>
            <p className="text-xs text-gray-500">Private Studio</p>
          </div>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Dịch vụ</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Gallery</a>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#C9A39A] rounded-full text-sm text-gray-700">
            <span>VN</span>
            <span>EN</span>
          </button>
          <button className="px-6 py-2 bg-pink-300 hover:bg-pink-400 text-white rounded-full text-sm transition">
            Đặt Lịch Ngay
          </button>
        </nav>
      </header>
        </div>
    )
}