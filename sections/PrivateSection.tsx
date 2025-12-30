"use client"
import { Heart,  Shield, Sparkles, Gift, Clock, Star, Award } from "lucide-react";


const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Không gian riêng tư 100%',
      description: 'Mỗi phòng - một khách - không ai làm phiền'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Sản phẩm luxury',
      description: 'IPO - Dior - Chanel - Japan Pro'
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Dụng cụ khử khuẩn chuẩn',
      description: 'UV sterilization - cho từng khách'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Dịch vụ 1:1 không chờ đợi',
      description: 'Trọn vẹn thời gian dành cho riêng bạn'
    }
  ];

export default function PrivateSection() {
    return (
      <div className="py-12 px-6 w-7xl mx-auto">
         <div className="text-center py-8 w-3xl mx-auto mb-4">
          <h2 className="text-4xl md:text-5xl w-full font-serif font-bold text-gray mb-4">Private Experience</h2>
          <p className="text-[#C9A39A]  w-3xl mx-auto text-md">Lý do chọn Mina</p>
        </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
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


        <div className="text-center bg-gradient-to-b from-[#FCEEF3] to-[#F7EBEE] px-8 py-6 rounded-lg mt-12 mb-16">
            <div>
               <div className="flex justify-center items-center gap-2 border border-[#C9A39A] text-[#C9A39A] p-2 mx-auto rounded-full w-64 mb-4"><span  className="text-yellow"><Sparkles/> </span> <span> Powered by AIHUB OS</span></div>
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">Trí tuệ AI ghi nhớ phong cách của bạn</h2>
              <p className=" text-gray-500">Hệ thống AIHUB OS giúp lưu lại màu bạn từng làm, gợi ý những mẫu phù hợp nhất, và <br/> nhắc lịch khi móng cần chăm lại. Đây là điều chưa một tiệm nail nào tại Việt Nam có.</p>
            </div>
          </div>
      </div>
    );
  }     