export default function ThoiSu() {
    return (
        <main className="max-w-screen-xl mx-auto px-4 py-6">
            <h2 className="text-2xl font-bold mb-4">Thời sự</h2>

            {/* Featured news */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="relative w-full mb-2">
                    <img
                        src="https://i1-thethao.vnecdn.net/2025/05/27/ronaldo-jpeg-1748312560-174831-8122-6789-1748312813.jpg?w=750&h=450&q=100&dpr=1&fit=crop&s=1ciI76ANocUQk5t9N2zpjw"
                        alt="Chìm tàu Vũng Áng"
                        className="object-cover rounded"
                    />
                </div>
                <div className="pr-52">
                    <h3 className="text-xl font-semibold">
                        Ronaldo ám chỉ chia tay Al Nassr
                    </h3>
                    <p className="text-sm text-gray-700">
                        Siêu sao 40 tuổi Cristiano Ronaldo đăng hình ảnh mặc áo Al Nassr, kèm lời bình "chương này đã kết thúc", giữa những tin đồn gia nhập Al Hilal.
                    </p>
                </div>
            </div>

            {/* Sub News */}
            <div className="grid md:grid-cols-3 gap-6">
                <div>
                    <img
                        src="https://i1-thethao.vnecdn.net/2025/05/26/cong-an-ha-noi-ha-noi-fc-v-league-2024-2025-1-1748273146-1748273302.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=RMGr6btdi_bHrnoGQrU9Fw"
                        alt="Cháy nhà Bắc Giang"
                        className="rounded mb-2 max-h-64 w-full object-cover h-full"
                    />
                    <h4 className="font-semibold">CAHN, Hà Nội FC níu hy vọng vô địch V-League </h4>
                </div>
                <div>
                    <img
                        src="https://i1-thethao.vnecdn.net/2025/05/26/da338299110aa454fd1b-174826628-6738-2785-1748266405.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=7xUjhrwSfPTwi-Rx6uRgYg"
                        alt="Người ngộp khí CO"
                        className="rounded mb-2 max-h-64 w-full object-cover h-full"
                    />
                    <h4 className="font-semibold">
                        Nam Định cách chức vô địch V-League một điểm 
                    </h4>
                </div>
                <div>
                    <img
                        src="https://i1-thethao.vnecdn.net/2025/05/26/cunha-1748248983-1748248993-8618-1748249249.png?w=220&h=132&q=100&dpr=1&fit=crop&s=wU3kkloASCCtZK0-ERbL1A"
                        alt="Xe điện TP HCM"
                        className="rounded mb-2 max-h-64 w-full object-cover h-full"
                    />
                    <h4 className="font-semibold">
                        Man Utd dành áo số 10 cho tân binh 85 triệu USD 
                    </h4>
                </div>
            </div>
        </main>
    );
}
