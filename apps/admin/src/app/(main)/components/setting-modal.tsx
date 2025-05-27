import {useState} from "react";

// Define the type for the micro-frontend configuration item
interface MicroFrontendConfig {
	name: string;
	port: number;
	route: string;
}

// SettingsModal Component
interface SettingsModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSave: (data: MicroFrontendConfig[]) => void;
	initialData: MicroFrontendConfig[];
}

function SettingsModal({
	isOpen,
	onClose,
	onSave,
	initialData,
}: SettingsModalProps) {
	const [jsonData, setJsonData] = useState<string>(
		JSON.stringify(initialData, null, 2)
	);
	const [error, setError] = useState<string | null>(null);

	if (!isOpen) return null;

	const handleSave = () => {
		try {
			const parsedData: MicroFrontendConfig[] = JSON.parse(jsonData);

			// Basic validation: check if it's an array of objects with required properties
			if (
				!Array.isArray(parsedData) ||
				!parsedData.every(
					(item) =>
						typeof item === "object" &&
						item !== null &&
						"name" in item &&
						typeof item.name === "string" &&
						"port" in item &&
						typeof item.port === "number" &&
						"route" in item &&
						typeof item.route === "string"
				)
			) {
				setError(
					'Invalid JSON format. Please ensure it\'s an array of objects with "name", "port", and "route" properties.'
				);
				return;
			}

			onSave(parsedData);
			onClose();
		} catch (e) {
			setError("Invalid JSON. Please check your syntax.");
		}
	};

	return (
		<div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
			<div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6">
				<h2 className="text-2xl font-bold mb-4 text-gray-800">
					Cài đặt Micro-Frontend
				</h2>
				<div className="mb-4">
					<label
						htmlFor="micro-frontend-data"
						className="block text-sm font-medium text-gray-700 mb-2"
					>
						Nhập cấu hình Micro-Frontend (JSON):
					</label>
					<textarea
						id="micro-frontend-data"
						className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
						rows={10}
						value={jsonData}
						onChange={(e) => {
							setJsonData(e.target.value);
							setError(null); // Clear error on change
						}}
						placeholder={`[\n  {\n    "name": "news-app",\n    "port": 3003,\n    "route": "/"\n  },\n  {\n    "name": "main-app",\n    "port": 3002,\n    "route": "/news"\n  }\n]`}
					></textarea>
					{error && <p className="text-red-500 text-sm mt-2">{error}</p>}
				</div>
				<div className="flex justify-end space-x-3">
					<button
						onClick={onClose}
						className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200 font-semibold"
					>
						Hủy
					</button>
					<button
						onClick={handleSave}
						className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-semibold"
					>
						Lưu
					</button>
				</div>
			</div>
		</div>
	);
}

export default SettingsModal;
