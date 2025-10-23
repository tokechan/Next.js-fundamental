import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold my-8">Learn Frontend Fundamentals</h1>
      
      <nav>
        <ul className="text-2xl font-bold space-y-2">
          <li>
            <Link href="/react" className="hover:underline">React Contents</Link>
          </li>
          <li>
            <Link href="/next-js-contents" className="hover:underline">Next.js Contents</Link>
          </li>
  
        </ul>
      </nav>
    </div>
  );
}