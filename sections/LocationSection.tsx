"use client"

import { Clock, Instagram, MapPin, Phone } from "lucide-react"

export default function LocationSection() {
    return (
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-2">Địa Điểm & Liên Hệ</h2>
            <p className="text-gray-600">Quận 2 – Thủ Đức – Khu an ninh – dễ đậu xe</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white rounded-2xl p-6   border border-rose-50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F7EBEE] rounded-full flex items-center justify-center flex-shrink-0">
                   <MapPin className="w-6 h-6 text-[#C9A39A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">Địa chỉ</h3>
                    <p className="text-gray-700 mb-1">Quận 2, Thủ Đức, TP. Hồ Chí Minh</p>
                    <p className="text-sm text-gray-500">(Địa chỉ chi tiết sẽ được gửi khi xác nhận lịch)</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white rounded-2xl p-6   border border-rose-50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F7EBEE] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#C9A39A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">Giờ làm việc</h3>
                    <p className="text-gray-700 mb-2">Thứ 2 - Chủ Nhật: 9:00 - 22:00</p>
                    <div className="flex items-center space-x-2 text-rose-400 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>Chỉ nhận khách đặt trước</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hotline */}
              <div className="bg-white rounded-2xl p-6   border border-rose-50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F7EBEE] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#C9A39A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">Hotline</h3>
                    <p className="text-gray-700">0xxx xxx xxx</p>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="bg-white rounded-2xl p-6   border border-rose-50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F7EBEE] rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-[#C9A39A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">Instagram</h3>
                    <p className="text-gray-700">@minanailprivate</p>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100">
                <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">Lưu ý quan trọng</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className='text-[#C9A39A]'>✦ </span> <p className="text-gray-700 text-sm">Chỉ phục vụ 5-6 khách/ngày</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className='text-[#C9A39A]'>✦</span>
                    <p className="text-gray-700 text-sm">Vui lòng đặt lịch trước ít nhất 1 ngày</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className='text-[#C9A39A]'>✦</span>
                    <p className="text-gray-700 text-sm">Không nhận khách walk-in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Map */}
            <div className="bg-white rounded-2xl p-8   border border-rose-50">
              <div className="bg-[#F7EBEE] rounded-xl h-full min-h-[500px] flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-[#F7EBEE] rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-10 h-10 text-[#C9A39A]" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3">Google Maps</h3>
                <p className="text-gray-600 text-center max-w-xs">
                  Bản đồ chi tiết sẽ được gửi qua tin nhắn sau khi xác nhận lịch hẹn
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  } 
