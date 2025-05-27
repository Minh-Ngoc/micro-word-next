'use client'

import { FaFacebookF, FaTelegramPlane, FaYoutube, FaTiktok, FaHeadset } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-white to-[#f3f6fd] text-gray-800">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="https://bucloud.com/_next/image?url=%2Fimages%2Flogo%2Fpng%2Flogo_blue_horizontal.png&w=256&q=75" alt="Bucloud Logo" width={180} height={54} />
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="text-blue-600 text-lg font-semibold">Trang chủ</a>
          <a href="#" className='text-lg'>SSL</a>
          <a href="#" className='text-lg'>Tin tức</a>
          <a href="#" className='text-lg'>Tên miền</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 font-medium border border-blue-600 rounded-full text-sm">Đăng nhập</button>
          <button className="px-4 py-2 font-medium bg-blue-600 text-white rounded-full text-sm">Đăng ký</button>
          <img src="https://bucloud.com/icons/vietnam.svg" alt="VN Flag" width={40} height={16} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
            GIẢI PHÓNG SỨC MẠNH<br />
            CỦA DỊCH VỤ LƯU TRỮ<br />
            ĐƯỢC QUẢN LÝ
          </h1>
          <p className="text-blue-600 font-medium text-xl mb-6">LƯU TRỮ ĐÁM MÂY</p>
          <button className="bg-blue-600 text-white px-14 py-2 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition">
            Bắt đầu →
          </button>
        </div>

        <div className="relative w-full h-96">
          <img
            src="https://bucloud.com/_next/image?url=%2Fimages%2Fbanner%2Fhero-section-cloud.png&w=1920&q=75"
            alt="Cloud Server Illustration"
            className="object-contain fill"
          />
        </div>
      </section>

      {/* Social Icons (Right-fixed) */}
      <div className="fixed right-4 top-1/3 flex flex-col gap-4 items-center text-blue-600 text-xl z-50">
        <FaHeadset className="hover:text-blue-800 cursor-pointer" />
        <FaFacebookF className="hover:text-blue-800 cursor-pointer" />
        <FaTelegramPlane className="hover:text-blue-800 cursor-pointer" />
        <FaYoutube className="hover:text-blue-800 cursor-pointer" />
        <FaTiktok className="hover:text-blue-800 cursor-pointer" />
      </div>
    </main>
  )
}
