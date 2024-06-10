import Link from "next/link";

export default function Toblog() {
    return (
        <div>
            <Link
                href="/Blog"
                className="bg-[#7CD962] px-6 text-semibold py-3 rounded-full text-white hover:bg-[#599c47]/90 "
                style={{ fontSize: '20px' }}
            >
                View More Blogs
            </Link>
        </div>
    )
}