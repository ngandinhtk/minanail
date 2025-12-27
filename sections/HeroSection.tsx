"use client"
// import {ChevronRight} from "lucide-react"
import Image from 'next/image'
import studio1 from '@/public/studio1.jpg'
import studio2 from '@/public/studio2.jpg'
import studio3 from '@/public/studio3.jpg'

import hero_img from '@/public/hero-img.jpg'
export default function HeroSection() {
    return (
        <div>
        <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto bg-white">
          <div className="grid md:grid-cols-2  gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 leading-tight">
                Mina Nail<br />
                <span className="text-gradient">Private Studio</span>
              </h2>
              
              <p className="text-xl text-gray-600 font-light">
                Không gian riêng tư – Sang trọng – 1:1 dành cho bạn
              </p>

              <div className=" p-6 ">
                <h3 className="text-lg text-gray-800 mb-4">
                  Một trải nghiệm làm đẹp hoàn toàn khác biệt:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C9A39A] rounded-full mt-2"></div>
                    <p className="text-gray-700">Chỉ 1 khách trong không gian</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C9A39A] rounded-full mt-2"></div>
                    <p className="text-gray-700">Ánh sáng đẹp tự nhiên</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C9A39A] rounded-full mt-2"></div>
                    <p className="text-gray-700">Sạch tinh tế – im lặng – thư thái</p>
                  </div>
                </div>
              </div>

              <button className="group bg-gradient-to-r from-[#C9A39A] to-[#E7D3CC] text-white px-8 py-4 rounded-lg shadow-lg text-lg font-medium hover:shadow-2xl transition transform hover:scale-105 flex items-center space-x-2">
                <span>Đặt Lịch Ngay</span>
                {/* <ChevronRight className="group-hover:translate-x-1 transition" /> */}
              </button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative w-full max-w-[500px] h-[400px] md:h-[650px] mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500">
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                  <Image 
                    src={hero_img} 
                    alt="Mina Nail Studio Interior"
                    fill
                    className="object-cover object-center" 
                  />
                </div>
                <div className="absolute bottom-[-18] -right-6 z-50 bg-white/90 backdrop-blur-sm px-4 py-5 rounded-lg shadow-lg">
                  <p className="text-sm italic text-[#C9A39A]">Private. Quiet. Beautiful.</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-rose-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>
       {/* Quote Section */}
      <section className="py-20 px-6 bg-white/50 bg-gradient-to-b from-white to-[#FCEEF3]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 mx-auto mb-8"></div>
          <blockquote className="text-3xl md:text-4xl font-serif italic text-gray-800 leading-relaxed">
           &quot;Nail đẹp không chỉ là màu – đó là cảm xúc.&quot;
          </blockquote>
          <div className="w-16 h-1 bg-[#C9A39A] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 bg-[#FCEEF3]">
        <div className="text-center py-8 mx-auto mb-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold w-full text-gray mb-4">The Studio – Không gian Private</h2>
          <p className="w-3xl mx-auto">Không gian nhỏ – Trải nghiệm lớn. Mina Nail Private được thiết kế dành cho những người yêu sự riêng tư, thích sự tinh tế và muốn tận hưởng dịch vụ theo tiêu chuẩn cao nhất.</p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Không Gian Riêng Tư', desc: 'Không gian chỉ dành cho bạn, không chia sẻ với khách khác', image: studio2 },
              { title: 'Ánh sáng tự nhiên', desc: 'Sản phẩm chính hãng, công nghệ hiện đại nhất', image: studio3 },
              { title: 'Góc decor sang trọng', desc: 'Tư vấn 1:1, chăm sóc kỹ lưỡng từng chi tiết', image: studio1 }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="m-auto"
              >
                <div className='relative p-8 shadow-lg transition transform w-80 h-80 border rounded-lg border-rose-100'>
                <Image src={feature.image} alt={feature.title} fill   className=" object-cover"/>
                   
                </div>
                <h3 className="text-xl font-serif text-center text-gray-800 mt-6">{feature.title}</h3>
                {/* <p className="text-gray-600">{feature.desc}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>
        </div>
      )

}