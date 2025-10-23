import Link from "next/link";
import BackToHome from "../components/BackToHome";

export default function Reacts() {
    return (
      <div className="container ">
        <h1 className="text-4xl font-bold mt-8">Next.js</h1>
        <p className="font-mono mb-4">Next.js is a framework for building server-side rendered React applications.</p>
        <nav>
            <ul className="text-2xl font-bold space-y-2">
                <li>
                    <Link href="/next-js-contents/your-first-component" className="hover:underline">Your First Component</Link>
                </li>
            </ul>
        </nav>
        <BackToHome />
    </div>
  );
}
