"use client"
import logo from "@/public/logo_ft.png"
import { Phone, Instagram  } from "lucide-react"
import Image from "next/image"

export default function Footer(){
    return(
        <div>
              <footer className="bg-gradient-to-r from-[#FCEEF3] to-[#F7EBEE] border-t border-gray-200 py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src={logo} width={200} height={200} alt="logo" />
                <div>
                
                </div>
              </div>
              <p className="text-sm mb-8 text-gray-600">
                Không gian nail private sang trọng<br/>
                dành riêng cho bạn
              </p>
              <span className=" text-[#C9A39A]">
                &quot;Private. Quiet. Beautiful.&quot;
              </span>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Liên kết</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-pink-400">Trang Chủ</a></li>
                <li><a href="#" className="hover:text-pink-400">Dịch vụ</a></li>
                <li><a href="#" className="hover:text-pink-400">Gallery</a></li>
                <li><a href="#" className="hover:text-pink-400">Đặt lịch</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Liên hệ</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-start">
                   <a href="#" className="w-8 h-8  flex items-center justify-start transition">
                  <Phone/>
                </a>
                  <p>0xxx xxx xxx</p>
                </div>
                 <div className="flex items-center justify-start">
                   <a href="#" className="w-8 h-8  flex items-center justify-self-start transition">
                  <Instagram />
                </a>
                  <p>@minanalprivate</p>
                </div>
                <div className="w-[300px]">
                   <button className="group bg-gradient-to-r from-[#C9A39A] to-[#E7D3CC] text-white px-8 py-4 rounded-lg shadow-lg text-lg font-medium hover:shadow-2xl transition transform hover:scale-105 flex items-center space-x-2">
                <span>Đặt Lịch Ngay</span>
                {/* <ChevronRight className="group-hover:translate-x-1 transition" /> */}
              </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t flex items-center justify-between border-gray-200 pt-8 p-1 text-center">
            <p className="text-sm text-gray-500">
              © 2025 Mina Nail Private Studio. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Powered by <span className="text-[#C9A39A]">AIHUB OS</span>
            </p>
          </div>
          <p className="text-sm text-[#C9A39A] text-center mt-4 italic">minanail-private.aihubos.com</p>
        </div>
      </footer>
        </div>
    )
}