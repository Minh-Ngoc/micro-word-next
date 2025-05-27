export default function ThoiSu() {
    return (
        <main className="max-w-screen-xl mx-auto px-4 py-6">
            <h2 className="text-2xl font-bold mb-4">Thời sự</h2>

            {/* Featured news */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="relative w-full mb-2">
                    <img
                        src="https://i1-vnexpress.vnecdn.net/2025/05/26/bt-hung-4982-1748013426-174822-5543-9018-1748230405.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=X54GrfCf1vhCuRJJ0Orenw"
                        alt="Chìm tàu Vũng Áng"
                        className="object-cover rounded w-full"
                    />
                </div>
                <div className="pr-52">
                    <h3 className="text-xl font-semibold">
                        Đề xuất xây khu tưởng niệm, vinh danh các nhà khoa học Việt 
                    </h3>
                    <p className="text-sm text-gray-700">
                        Bộ trưởng Nguyễn Mạnh Hùng cho biết sẽ đề xuất Chính phủ xây dựng một khu tưởng niệm, vinh danh nhà khoa học công nghệ có nhiều đóng góp cho sự phát triển của đất nước. 
                    </p>
                </div>
            </div>

            {/* Sub News */}
            <div className="grid md:grid-cols-3 gap-6">
                <div>
                    <img
                        src="https://i1-vnexpress.vnecdn.net/2025/05/27/screenshot-2025-05-26-at-22-14-3763-1597-1748306686.png?w=300&h=180&q=100&dpr=1&fit=crop&s=ibDGNwIFW70g3vQol51INg"
                        alt="Cháy nhà Bắc Giang"
                        className="rounded mb-2 max-h-64 w-full object-cover h-full"
                    />
                    <h4 className="font-semibold">Loạt game xuất sắc được phát hành tại Việt Nam </h4>
                </div>
                <div>
                    <img
                        src="https://i1-vnexpress.vnecdn.net/2025/05/26/VNEWifi-1748235688-7232-1748235768.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=3M4o0CUOSc4-ihEf0KxcrA"
                        alt="Người ngộp khí CO"
                        className="rounded mb-2 max-h-64 w-full object-cover h-full"
                    />
                    <h4 className="font-semibold">
                        Hai công nhân tử vong nghi ngộ độc khí CO
                    </h4>
                </div>
                <div>
                    <img
                        src="https://i1-vnexpress.vnecdn.net/2025/05/26/screenshot-2025-05-26-at-21-00-8189-9351-1748268659.png?w=300&h=180&q=100&dpr=1&fit=crop&s=Bg-eggEtWr4w2u7BPKhp1g"
                        alt="Xe điện TP HCM"
                        className="rounded mb-2 max-h-64 w-full object-cover h-full"
                    />
                    <h4 className="font-semibold">
                        6 dịch vụ, thiết bị được trao giải tại Vietnam Game Awards 2025 
                    </h4>
                </div>
            </div>
        </main>
    );
}
