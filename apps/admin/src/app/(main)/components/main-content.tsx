import Header from "@/components/layout/header";
import ThemeCard from "./theme-card";
interface Theme {
	name: string;
	status: string;
	preview: string;
	description: string;
	active: boolean;
}
// MainContent Component
interface MainContentProps {
	activeTab: string;
	setActiveTab: (tab: string) => void;
	themes: Theme[];
}

// MainContent Component
interface MainContentProps {
	activeTab: string;
	setActiveTab: (tab: string) => void;
	themes: Theme[];
	onSettingsClick: () => void; // Added onSettingsClick to MainContentProps
}

function MainContent({
	activeTab,
	setActiveTab,
	themes,
	onSettingsClick,
}: MainContentProps) {
	return (
		<main className="flex-1 flex flex-col">
			<Header />
			<div className="p-6">
				<div className="flex items-center justify-between mb-6">
					<div className="flex space-x-4">
						<button
							onClick={() => setActiveTab("appearance")}
							className={`px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${
								activeTab === "appearance"
									? "bg-blue-600 text-white shadow-md"
									: "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
							}`}
						>
							Giao diện
						</button>
						<button
							onClick={() => setActiveTab("add-new-appearance")}
							className={`px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${
								activeTab === "add-new-appearance"
									? "bg-blue-600 text-white shadow-md"
									: "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
							}`}
						>
							Thêm Giao diện
						</button>
						{/* New button for showing the settings popup */}
						{activeTab === "appearance" && (
							<button
								onClick={onSettingsClick}
								className="px-4 py-2 rounded-md font-semibold bg-purple-600 text-white shadow-md hover:bg-purple-700 transition-colors duration-200"
							>
								Cấu hình Micro-Frontend
							</button>
						)}
					</div>
					<div className="relative">
						<input
							type="text"
							placeholder="Tìm kiếm giao diện đã cài đặt"
							className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{themes.map((theme: Theme) => (
						<ThemeCard key={theme.name} theme={theme} />
					))}

					{/* Add New Theme Card */}
					<div className="bg-white rounded-lg shadow-md border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-6 text-center text-gray-500 hover:border-blue-500 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-16 w-16 mb-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="1"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 4v16m8-8H4"
							/>
						</svg>
						<span className="text-lg font-semibold">Thêm Giao diện</span>
					</div>
				</div>
			</div>
		</main>
	);
}

export default MainContent;
