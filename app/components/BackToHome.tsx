import Link from "next/link";

export default function BackToHome() {
    return (
        <Link 
            href="/"
            className="inline-block text-2xl font-bold mt-8 hover:underline"
        >
            ◀ Home
        </Link>
    );
}
