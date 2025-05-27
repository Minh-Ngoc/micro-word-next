import Link from "next/link";

interface NavItem {
	name: string;
	value: string;
	icon: string; // SVG path string
}

interface SidebarProps {
	navItems: NavItem[];
	activeTab: string;
	setActiveTab: (tab: string) => void;
}

function Sidebar({navItems, activeTab, setActiveTab}: SidebarProps) {
	return (
		<aside className="w-64 bg-gray-800 text-white flex flex-col rounded-r-lg shadow-lg">
			<div className="p-4 border-b border-gray-700 flex items-center justify-center">
				<h1 className="text-2xl font-bold text-gray-100 uppercase tracking-widest">Admin</h1>
			</div>
			<nav className="flex-1 p-4 space-y-2">
				{navItems.map((item) => (
					<Link // Changed from Link to a
						key={item.value}
						href={`/`} // Updated href to use hash for internal navigation
						onClick={() => setActiveTab(item.value)}
						className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
							item.value === activeTab
								? "bg-blue-600 text-white shadow-md"
								: "text-gray-300 hover:bg-gray-700 hover:text-white"
						}`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 mr-3"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d={item.icon}
							/>
						</svg>
						<span>{item.name}</span>
						{item.value === "plugins" && (
							<span className="ml-auto bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
								1
							</span>
						)}
					</Link> // Changed from Link to a
				))}
			</nav>
		</aside>
	);
}
export default Sidebar;
