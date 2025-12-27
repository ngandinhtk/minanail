"use client"
import Image from "next/image";
import gallery1 from '@/public/gallery1.jpg'
import gallery2 from '@/public/gallery2.png'
import gallery3 from '@/public/gallery3.png'

const galleries = [
    { image: gallery1, id: 1 },
    { image: gallery2, id: 2 },
    { image: gallery3, id: 3 },
    { image: gallery1, id: 4 },
    { image: gallery2, id: 5 },
    { image: gallery3, id: 6 }
    // { image: gallery4, id: 4 }
]

export default function GallerySection() {
    return (
      <div>
          {/* Gallery Preview */}
      <section id="gallery" className="py-20 px-6 bg-[#FCEEF3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Gallery</h2>
            <p className="text-gray-600">Những tác phẩm đẹp từ Mina Nail</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {...galleries.map((gallery) => (
              <div key={gallery.id} className="aspect-square rounded-xl overflow-hidden  hover:shadow-2xl transition transform hover:scale-105">
                <Image src={gallery.image} alt="Gallery" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div>
             <div 
                
                className="bg-white rounded-2xl p-6 w-7xl mx-auto  my-8 transition text-center"
              >
                <div className="w-12 h-12 bg-[#F7EBEE] rounded-full flex items-center justify-center mx-auto mb-4 text-rose-400">
                  <span className="text-[#111111] w-8 h-8 flex items-center justify-center">📸</span>
                </div>
                <div className="w-4xl mx-auto my-2">
                    <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">Photo Corner – Góc chụp ảnh móng đẹp như studio</h3>
                <p className="text-sm text-gray-600">Mina thiết kế riêng một góc ánh sáng tự nhiên để khách chụp ảnh bàn tay sau khi làm xong. <br/>Tấm ảnh của bạn sẽ đẹp y như hình Pinterest – nhưng là ảnh thật của chính bạn.</p>
                </div>
              </div>
          </div>
        </div>
      </section>
      </div>
    );
  } 
  