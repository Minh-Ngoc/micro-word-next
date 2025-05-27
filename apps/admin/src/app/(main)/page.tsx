"use client";
import Sidebar from "@/components/layout/sidebar";
import {useState} from "react";
import MainContent from "./components/main-content";
import SettingsModal from "./components/setting-modal";
interface NavItem {
	name: string;
	value: string;
	icon: string; // SVG path string
}
// Main App component

// Main App component
export default function App() {
	const [activeTab, setActiveTab] = useState<string>("appearance");
	const [isSettingsModalOpen, setIsSettingsModalOpen] =
		useState<boolean>(false);
	const [microFrontendConfigs, setMicroFrontendConfigs] = useState<
		MicroFrontendConfig[]
	>([
		{name: "news-app", port: 3003, route: "/"},
		{name: "main-app", port: 3002, route: "/news"},
	]);

	const navItems: NavItem[] = [
		{
			name: "Trang quản trị",
			value: "dashboard",
			icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2 2v10a1 1 0 001 1h3m-6-13a1 1 0 011-1h1a1 1 0 011 1v6a1 1 0 01-1 1h-1a1 1 0 01-1-1v-6z",
		},
		{
			name: "Bài viết",
			value: "posts",
			icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2h14z",
		},
		{
			name: "Media",
			value: "media",
			icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
		},
		{
			name: "Trang",
			value: "pages",
			icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
		},
		{
			name: "Bình luận",
			value: "comments",
			icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
		},
		{
			name: "Giao diện",
			value: "appearance",
			icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
		},
		{
			name: "Tùy thuộc số",
			value: "customize",
			icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
		},
		{
			name: "Plugin",
			value: "plugins",
			icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
		},
		{
			name: "Thành viên",
			value: "users",
			icon: "M17 20h2a2 2 0 002-2V8a2 2 0 00-2-2h-2M11 16V6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h4l-1 4v-4h7.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 0 000-1.414l-3-3a1 1 0 00-1.414 1.414L14.586 16H11z",
		},
		{
			name: "Công cụ",
			value: "tools",
			icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
		},
		{
			name: "Cài đặt",
			value: "settings",
			icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
		},
		{
			name: "Thu gọn Menu",
			value: "collapse-menu",
			icon: "M4 6h16M4 12h16M4 18h16",
		},
	];

	const themes: Theme[] = [
		{
			name: "Twenty Twenty-Five",
			status: "Đang kích hoạt",
			preview: "https://placehold.co/300x200/F0F0F0/000000?text=Blog+Preview",
			description: "A commitment to innovation and sustainability",
			active: true,
		},
		{
			name: "Twenty Twenty-Four",
			status: "",
			preview:
				"https://placehold.co/300x200/E0E0E0/000000?text=Commitment+to+Sustainability",
			description: "Mindblown : a blog about philosophy and sustainability",
			active: false,
		},
		{
			name: "Twenty Twenty-Three",
			status: "",
			preview:
				"https://placehold.co/300x200/D0D0D0/000000?text=Philosophy+Blog",
			description:
				"Nicomachean Ethics by Aristotle, Tao Te Ching by Lao Tzu, I Am Because We Are by Fred L Hord",
			active: false,
		},
	];

	const handleSaveSettings = (data: MicroFrontendConfig[]) => {
		console.log("Settings saved:", data);
		setMicroFrontendConfigs(data); // Update state with new configurations
		// Here you would typically send this data to a backend or a global state manager
	};

	return (
		<div className="flex min-h-screen bg-gray-100 font-sans text-gray-800">
			<Sidebar
				navItems={navItems}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				// Removed onSettingsClick prop from Sidebar
			/>
			<MainContent
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				themes={themes}
				onSettingsClick={() => setIsSettingsModalOpen(true)} // Pass onSettingsClick to MainContent
			/>

			<SettingsModal
				isOpen={isSettingsModalOpen}
				onClose={() => setIsSettingsModalOpen(false)}
				onSave={handleSaveSettings}
				initialData={microFrontendConfigs}
			/>
		</div>
	);
}
