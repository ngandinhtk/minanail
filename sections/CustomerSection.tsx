"use client"

import Image from "next/image";

const customers = [
    {
        id: 1,
      starts: '★★★★★',
      name: 'Nguyễn Thị Hương',
      feedback: 'Dịch vụ tại Mina Nail Studio thực sự tuyệt vời! Mình cảm thấy rất thoải mái và hài lòng với kết quả cuối cùng. Sẽ quay lại lần nữa!',
      avatar: '/avatars/customer1.jpg'
    },
    {
        id: 2,
      starts: '★★★★★',
      name: 'Ngoc N',
      feedback: '"Không gian quá đẹp, cảm giác như spa cao cấp nhưng private hoàn toàn. Tôi rất thích sự yên tĩnh ở đây."',
      avatar: '/avatars/customer1.jpg'
    },
    {
        id: 3,
      starts: '★★★★★',
      name: 'Minh T',
      feedback: '"Tôi chọn Silent Mode và thật sự thư giãn, không ai làm phiền. Dịch vụ chuyên nghiệp, móng đẹp lâu."',
      avatar: '/avatars/customer1.jpg'
    },
    {
        id: 4,
      starts: '★★★★★',
      name: 'Huong L',
      feedback: '"Tôi đặt lịch lần đầu và giờ tuần nào cũng quay lại. Mina nhớ đúng màu tôi thích, rất tâm lý."',
      avatar: '/avatars/customer1.jpg'
    },
    {
        id: 5,
      starts: '★★★★★',
      name: 'Phuong A',
      feedback: '"Studio riêng tư tuyệt vời cho người hướng nội như tôi. Không gian sang, sạch, mùi hương dễ chịu."',
      avatar: '/avatars/customer1.jpg'
    },
    {
        id: 6,
      starts: '★★★★★',
      name: 'Linh K',
      feedback: '"Bộ mẫu Signature rất đẹp và độc đáo. Không đụng hàng ai, tôi rất hài lòng với dịch vụ ở đây."',
      avatar: '/avatars/customer1.jpg'
    },
];

export default function CustomerSection() {
    return (
       <section id="customer" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Khách Hàng Nói Gì</h2>
            <p className="text-gray-600">Những trải nghiệm được chia sẻ từ chính khách hàng</p>
          </div>
            <div className="grid md:grid-cols-3 gap-8">
                {customers.map((customer) => (
                    <div key={customer.id} className="bg-gradient-to-b from-[#FFFFFF] to-[#FCEEF3] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border border-rose-50">     
                        <div className="flex items-center mb-4">
                            {/* <Image src={customer.avatar} alt={customer.name} className="w-12 h-12 rounded-full mr-4" /> */}
                            <div>
                                <p className="text-[#C9A39A]">{customer.starts}</p>
                                <p className="text-gray-600 py-4">{customer.feedback}</p>
                            </div>
                        </div>
                        <div>
                            <h3 className=" text-gray-800">— {customer.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
             <div className="text-center my-12 bg-[#FCEEF3] flex justify-center items-center py-4 rounded-lg mx-auto rounded-lg">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">⭐</h2>
            <p className="text-gray-600">Tỷ lệ khách hàng quay lại: </p>
            <p className="text-gray-600"> 98% </p>
          </div>
        </div>
      </section>
    );
  }
