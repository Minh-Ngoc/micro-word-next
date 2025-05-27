export default function ThoiSu() {
    return (
        <main className="max-w-screen-xl mx-auto px-4 py-6">
            <h2 className="text-2xl font-bold mb-4">Thời sự</h2>

            {/* Featured news */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="relative w-full mb-2">
                    <img
                        src="https://i1-vnexpress.vnecdn.net/2025/05/26/613aef58-8927-42f2-a34e-a7e589-9993-6369-1748232515.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=mbpQyci7pyCErqhGhvNTGA"
                        alt="Chìm tàu Vũng Áng"
                        className="object-cover rounded"
                    />
                </div>
                <div className="pr-52">
                    <h3 className="text-xl font-semibold">
                        Chìm tàu ở Vũng Áng, 10 người mất tích
                    </h3>
                    <p className="text-sm text-gray-700">
                        Tàu Công Thành 7 chở 4.900 tấn than bị chim khi cập cảng
                        Vũng Áng 9 hải lý, một người được cứu, 10 thuỷn viên
                        đang mất tích.
                    </p>
                </div>
            </div>

            {/* Sub News */}
            <div className="grid md:grid-cols-3 gap-6">
                <div>
                    <img
                        src="https://i1-vnexpress.vnecdn.net/2025/05/26/93470e7b17f4a2aafbe5-174821857-3198-4932-1748218767.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=fiup8mDA7ikJr-64GQ348A"
                        alt="Cháy nhà Bắc Giang"
                        className="rounded mb-2 max-h-64 w-full object-cover h-full"
                    />
                    <h4 className="font-semibold">Cháy 4 nhà ở Bắc Giang</h4>
                </div>
                <div>
                    <img
                        src="https://i1-vnexpress.vnecdn.net/2025/05/26/z6639221948991-1b52ec745adf26a-1654-8790-1748225523.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=NmZFmvIbRcJdp74PNX6R5Q"
                        alt="Người ngộp khí CO"
                        className="rounded mb-2 max-h-64 w-full object-cover h-full"
                    />
                    <h4 className="font-semibold">
                        Hai công nhân tử vong nghi ngộ độc khí CO
                    </h4>
                </div>
                <div>
                    <img
                        src="https://i1-vnexpress.vnecdn.net/2025/05/24/z4822443966524-a5d6d3de9b88648-3912-2246-1748083943.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=U5NzjuJnnN7Ous1Ox6J-ww"
                        alt="Xe điện TP HCM"
                        className="rounded mb-2 max-h-64 w-full object-cover h-full"
                    />
                    <h4 className="font-semibold">
                        TP HCM sẽ làm gì để chuyển 400.000 xe xăng sang xe điện?
                    </h4>
                </div>
            </div>
        </main>
    );
}
