import Link from "next/link";

function Navbar() {
    const navbarItems = [
        {
            href: '/',
            label: ''
        },
        {
            href: '/thoi-su',
            label: 'Thời sự'
        },
        {
            href: '/the-thao',
            label: 'Thể thao'
        },
        {
            href: '/khoa-hoc-cong-nghe',
            label: 'Khoa học công nghệ'
        },
        {
            href: '/the-gioi',
            label: 'Thế giới'
        },
    ];

    return (
        <header className="border-b sticky top-0 bg-white z-50 shadow-sm">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-2">
                <div className="text-xl font-bold text-red-600">VNEXPRESS</div>
                <nav className="hidden md:flex gap-4 text-sm">
                    {navbarItems?.map((nav) => (
                        <Link key={nav?.href} href={nav?.href}>
                            {nav?.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;