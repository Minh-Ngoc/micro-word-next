// Header Component
function Header() {
	return (
		<header className="flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow-sm rounded-bl-lg">
			<div className="text-lg font-semibold text-gray-700">Trang quản trị</div>
			<div className="flex items-center space-x-4">
				<span className="text-gray-600">Xin chào, admin</span>
				<button className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
						/>
					</svg>
				</button>
				<div className="relative">
					<button className="flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200">
						<span>Hỗ trợ</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 ml-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
}
export default Header;
