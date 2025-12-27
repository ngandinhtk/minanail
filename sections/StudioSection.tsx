"use client"
import Image from 'next/image'
import studio1 from '@/public/studio1.jpg'
import studio2 from '@/public/studio2.jpg'
import studio3 from '@/public/studio3.jpg'

export default function StudioSection() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">

      {/* Quote Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 bg-[#C9A39A] mx-auto mb-8"></div>
          <blockquote className="text-3xl md:text-4xl font-serif italic text-gray-800 leading-relaxed">
           &quot;Nail đẹp không chỉ là màu – đó là cảm xúc.&quot;
          </blockquote>
          <div className="w-16 h-1 bg-[#C9A39A] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6">
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
  );
}