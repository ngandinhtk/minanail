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
      <section>
             <div className="text-center bg-gradient-to-r from-[#FCEEF3] to-[#F7EBEE] px-8 py-6 rounded-lg mt-12 mb-16">
            <div>
               <div className="flex justify-center items-center gap-2 border border-[#C9A39A] text-[#C9A39A] p-2 mx-auto rounded-full w-64 mb-4"> <span> ✦ Mina Signature</span></div>
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">Bộ Sưu Tập Độc Quyền</h2>
              <p className=" text-gray-500">30+ mẫu do chính Mina thiết kế – chỉ dành cho khách tại studio – không chia sẻ online</p>
            </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition text-center border border-rose-50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 text-rose-400">
                  {feature.icon}
                </div>
                <h3 className="font-serif font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          </div>
            <div className="mt-8 mx-auto max-w-2xl text-center border border-[#C9A39A] bg-gradient-to-r from-[#FCEEF3] to-[#F7EBEE] p-6 rounded-2xl">
                <div className="text-center text-gray-700 font-serif italic">Mẫu riêng – Đẳng cấp riêng – Chỉ dành cho khách Mina.</div>
            </div>
      </section>
    );
  }
