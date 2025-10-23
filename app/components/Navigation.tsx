"use client"

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
    const router = useRouter();

    return (
        <div className="flex gap-4 mt-8">
            <button 
            onClick={() => router.back()}
            className="inline-block text-2xl font-bold hover:underline"
            >
                ◀ Back
            </button>
            <Link href="/" className="inline-block text-2xl font-bold hover:underline">
                Home
            </Link>
        </div>
    );
}
