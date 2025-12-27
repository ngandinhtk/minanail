"use client"

const collections = [
    {
      icon: '✦',
      title: 'Korean Nude',
      description: 'Sang nhẹ như hơi thở'
    },
    {
      icon: '✦',
      title: 'French White',
      description: 'Thanh lịch chuẩn timeless'
    },
    {
      icon: '✦',
      title: 'Krystal Minimal',
      description: 'Lấp lánh một cách tinh tế'
    },
    {   
        icon: '✦', 
        title: 'Glow Natural Tone',
        description: 'Tự nhiên, khoẻ đẹp'
    }
  ]

// import { Sparkles } from "lucide-react";

export default function SignatureSection() {
    return (
      <section className="bg-gradient-to-b from-[#FFFFFF] to-[#FCEEF3]">
        <div className="text-center  w-7xl mx-auto py-8  px-8 py-6 rounded-lg mt-12 mb-16">
            <div>
               <div className="flex justify-center items-center gap-2 border border-[#C9A39A] text-[#C9A39A] p-2 mx-auto rounded-full w-64 mb-4"> <span> ✦ Mina Signature</span></div>
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">Bộ Sưu Tập Độc Quyền</h2>
              <p className=" text-gray-500 mb-12">30+ mẫu do chính Mina thiết kế – chỉ dành cho khách tại studio – không chia sẻ online</p>
            </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6  hover:shadow-xl transition text-left"
              >
                <div className="w-12 h-12 bg-[#F7EBEE] rounded-full flex items-center justify-center mb-4 text-rose-400">
                  <span className="text-[#111111] w-8 h-8 flex items-center justify-center"> {feature.icon}</span>
                </div>
                <h3 className="font-serif font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          </div>
            <div className="mt-8 mx-auto  w-7xl  text-center bg-white border border-[#C9A39A] p-6 rounded-2xl">
                <div className="text-center text-md text-[#C9A39A] font-serif italic">Mẫu riêng – Đẳng cấp riêng – Chỉ dành cho khách Mina.</div>
            </div>
      </section>
    );
  }
