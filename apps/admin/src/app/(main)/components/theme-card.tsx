interface Theme {
	name: string;
	status: string;
	preview: string;
	description: string;
	active: boolean;
}

// ThemeCard Component
interface ThemeCardProps {
	theme: Theme;
}

function ThemeCard({theme}: ThemeCardProps) {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
			<img
				src={theme.preview}
				alt={`${theme.name} preview`}
				className="w-full h-48 object-cover"
			/>
			<div className="p-4">
				<h3 className="text-xl font-semibold mb-2">{theme.name}</h3>
				<p className="text-sm text-gray-600 mb-4 line-clamp-3">
					{theme.description}
				</p>
				{theme.active ? (
					<div className="flex items-center justify-between text-blue-600 font-medium">
						<span>{theme.status}</span>
						<button className="px-3 py-1 bg-blue-100 rounded-md hover:bg-blue-200 transition-colors duration-200">
							Tùy chỉnh
						</button>
					</div>
				) : (
					<div className="flex justify-end">
						<button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-200">
							Kích hoạt
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default ThemeCard;
