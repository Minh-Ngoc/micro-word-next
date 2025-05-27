interface Theme {
	name: string;
	status: string;
	preview: string;
	description: string;
	route: string;
	active: boolean;
}

// ThemeCard Component
interface ThemeCardProps {
	theme: Theme;
}

function ThemeCard({ theme }: ThemeCardProps) {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
			<img
				src={`/${theme.preview}`}
				alt={`${theme.name} preview`}
				className="w-full h-48 object-contain repeat-none"
			/>
			<div className="p-4 flex gap-2">
				<span className="text-lg tracking-wider">[ {theme?.route} ]</span>
				<h3 className="text-lg font-semibold mb-2 tracking-wider uppercase text-center">
					{theme.description}
				</h3>
			</div>
		</div>
	);
}

export default ThemeCard;
