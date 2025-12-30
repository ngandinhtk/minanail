"use client"
import { Phone, Calendar ,  UserRound, Clock  } from "lucide-react";
const priceRanges = [
  { label: 'Thứ 2-6', range: '1-2 slot còn trống' },
  { label: 'Thứ 7', range: 'Gần full' },
  { label: 'Chủ Nhật', range: 'Liên hệ' },
];
export default function BookingSection() {
  return (
    <section id="booking" className="py-20 px-6 bg-gradient-to-b from-white to-[#FCEEF3]">
      <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Đặt Lịch Private</h2>
            <p className="text-[#C9A39A] my-4">Chỉ còn 1-2 slot mỗi ngày – Lịch luôn full 80%</p>
            <p className="text-gray-600">Vui lòng đặt trước để được phục vụ tốt nhất</p>
          </div>
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        
          <div className="md:col-span-3 p-10 bg-white">
            <form className="space-y-5">
                <div className="flex items-center gap-2 mb-2">
                    <UserRound  className="w-5 h-5 text-[#C9A39A]" />
                    <label className="block text-sm font-medium text-gray-700">Họ và Tên</label>
                </div>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A39A] focus:ring-2 focus:ring-[#C9A39A]/20 outline-none transition bg-gray-50" placeholder="Tên của bạn" />

               <div className="flex items-center gap-2 mb-2"> 
                <Phone className="w-5 h-5 text-[#C9A39A]" />
                <label className="block text-sm font-medium text-gray-700">Số Điện Thoại</label>
                </div>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A39A] focus:ring-2 focus:ring-[#C9A39A]/20 outline-none transition bg-gray-50" placeholder="0xxx xxx xxx" />
              
              <div className="grid md:grid-cols-2 gap-5">
                <div className="grid grid-col">
                     <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-[#C9A39A]" />
                    <label className="block text-sm font-medium text-gray-700">Ngày</label>
                </div>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A39A] focus:ring-2 focus:ring-[#C9A39A]/20 outline-none transition bg-gray-50" placeholder="Tên của bạn" />

                </div>
                <div className="grid grid-col">
                     <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-[#C9A39A]" />
                    <label className="block text-sm font-medium text-gray-700">Giờ</label>
                    </div>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A39A] focus:ring-2 focus:ring-[#C9A39A]/20 outline-none transition bg-gray-50" placeholder="09xx xxx xxx" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ghi chú (không bắt buộc)</label>
                <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A39A] focus:ring-2 focus:ring-[#C9A39A]/20 outline-none transition bg-gray-50" placeholder="Bạn có yêu cầu đặc biệt gì không? (VD: Ngày giờ mong muốn...)"></textarea>
              </div>

              <button type="button" className="w-full bg-gradient-to-b from-[#C9A39A] to-[#E7D3CC] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5">
                Đặt Lịch Ngay
              </button>
              <p className="text-center">Giờ làm việc: 9:00 - 22:00 | Chỉ nhận khách đặt trước</p>
            </form>
          </div>
        </div>
         <div className="mt-12 grid md:grid-cols-3  gap-6 rounded-2xl">
            {priceRanges.map((price, idx) => (
              <div key={idx} className="rounded-xl p-6 bg-[#F7EBEE] text-center hover:border-[#F7EBEE] ">
                <p className="text-md font-semibold text-[#C9A39A] mb-2">{price.label}</p>
                <p className="text-md  text-gray-800">{price.range}</p>
              </div>
            ))}
          </div>
      {/* </div> */}
    </section>
  )
}