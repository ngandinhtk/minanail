"use client"
import { Shield, Sparkles, Gift, Heart, Clock, Star, Award } from 'lucide-react';

export default function MinaNailStudio() {
  const services = [
    {
      name: 'Manicure Luxury',
      price: '199,000đ',
      duration: '25-30 phút',
      description: 'Chăm sóc móng tay sạch – đẹp – dưỡng mềm',
      badge: null
    },
    {
      name: 'Pedicure Spa Private',
      price: '249,000đ',
      duration: '35-45 phút',
      description: 'Chăm da chân – tạo phom – massage nhẹ',
      badge: 'POPULAR'
    },
    {
      name: 'Combo Luxury',
      price: '359,000đ',
      duration: '60-70 phút',
      description: 'Mani + Pedi – 1:1 – yên tĩnh – sang',
      badge: null
    },
    {
      name: 'Gel Luxury',
      price: '250,000đ - 300,000đ',
      duration: '30-40 phút',
      description: 'Gel chuẩn quốc tế – bóng đẹp 2-3 tuần',
      badge: 'POPULAR'
    },
    {
      name: 'Mina Signature Design',
      price: '359,000đ - 650,000đ',
      duration: '90+ phút',
      description: 'Mẫu độc quyền – không đụng hàng',
      badge: null
    },
    {
      name: 'Combo Founder',
      price: '325,000đ',
      duration: '45 phút',
      description: '45 phút chăm nhanh – riêng tư – dành cho người bận rộn',
      badge: null
    }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Không gian riêng tư 100%',
      description: 'Mỗi dụng - một khách - không chia sẻ với khách khác'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Sản phẩm luxury',
      description: 'Chỉ - Đẹp - Chanel - Japan Nls'
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Dụng cụ khử khuẩn chuẩn',
      description: 'UV sterilization - cho từng dịch vụ'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Dịch vụ từ lòng chủ đạo',
      description: 'Tìm em linh gần - đành động chữ bạn'
    }
  ];

  const priceRanges = [
    { label: 'Vẽ móng', range: '20,000 - 90,000đ/móng' },
    { label: 'Buff Shine', range: '79,000đ' },
    { label: 'Tháo Gel an toàn', range: '40,000 - 80,000đ' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Navigation */}
      

      
      {/* Features Grid */}
      {/* <section className="py-16 px-6 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-rose-400 font-medium mb-2">WELCOME TO MINA NAIL</p>
            <h2 className="text-4xl font-serif font-bold text-gray-800">Trí tuệ AI ghi nhớ phong cách của bạn</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Hệ thống Arthil AI ghi nhớ lại mỗi lần trải nghiệm và gợi ý những mẫu họa phẩm nổi bật, và nhắc lịch khi bạn cần chăm sóc chính mình. Đây là điều chưa một lần nào có ở Việt Nam.
            </p>
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
        </div>
      </section> */}

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Dịch Vụ</h2>
            <p className="text-gray-600">Dịch vụ tinh gọn – chất lượng cao – không rườm rà</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-[#C9A39A] transition transform hover:-translate-y-2 border border-rose-50 "
              >
                {service.badge && ( 
                  <div className=" bg-[#C9A39A] text-white text-xs px-3 py-1 w-24 rounded-full my-5">
                   ✦ {service.badge}
                  </div>
                )}
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">{service.name}</h3>
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-2xl  text-[#C9A39A]">{service.price}</span>
                  <span className="text-sm text-gray-500">• {service.duration}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                {/* <button className="w-full bg-gradient-to-r from-rose-300 to-pink-400 text-white py-2 rounded-lg hover:shadow-lg transition">
                  Đặt lịch
                </button> */}
              </div>
            ))}
          </div>

          {/* Price Ranges */}
          <div className="mt-12 grid md:grid-cols-3 bg-[#F7EBEE] gap-6 rounded-2xl">
            {priceRanges.map((price, idx) => (
              <div key={idx} className="rounded-xl p-6 text-center border border-rose-100">
                <p className="text-md font-semibold text-[#C9A39A] mb-2">{price.label}</p>
                <p className="text-md  text-gray-800">{price.range}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-rose-100 via-pink-50 to-rose-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 bg-gradient-to-r from-rose-300 to-pink-400 mx-auto mb-8"></div>
          <blockquote className="text-3xl md:text-4xl font-serif italic text-gray-800 leading-relaxed">
            Nail đẹp không chỉ là màu – đó là cảm xúc.
          </blockquote>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-300 to-pink-400 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border border-rose-50">
              <Clock className="w-12 h-12 text-rose-400 mb-4" />
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">Linh Hoạt Thời Gian</h3>
              <p className="text-gray-600">Đặt lịch dễ dàng, phù hợp với lịch trình của bạn</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border border-rose-50">
              <Star className="w-12 h-12 text-rose-400 mb-4" />
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">Đội Ngũ Chuyên Nghiệp</h3>
              <p className="text-gray-600">Kỹ thuật viên giàu kinh nghiệm, tận tâm với công việc</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border border-rose-50">
              <Award className="w-12 h-12 text-rose-400 mb-4" />
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">Cam Kết Chất Lượng</h3>
              <p className="text-gray-600">Hài lòng 100% hoặc làm lại miễn phí</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-20 px-6 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Gallery</h2>
            <p className="text-gray-600">Những tác phẩm đẹp từ Mina Nail</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
                <img 
                  src={`https://images.unsplash.com/photo-${1600000000000 + i * 10000000}?w=400&q=80`}
                  alt={`Nail design ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-rose-400 to-pink-400">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-serif font-bold mb-4">Sẵn sàng trải nghiệm?</h2>
          <p className="text-xl mb-8 opacity-90">Đặt lịch ngay hôm nay và khám phá sự khác biệt</p>
          <button className="bg-white text-rose-400 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105">
            Đặt Lịch Ngay
          </button>
        </div>
      </section>

  
    </div>
  );
}