
import Link from "next/link";
import BackToHome from "../components/Navigation";

export default function Reacts() {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold mt-8">React</h1>
      <p className="font-mono mb-4">React is a library for building user interfaces.</p>
      <nav>
        <ul className="text-2xl font-bold space-y-2">
        <li>
            <Link href="/react/describing-the-ui" className="hover:underline">Describing the UI</Link>
          </li>
          <li>
            <Link href="/react/adding-interactivity" className="hover:underline">Adding Interactivity</Link>
          </li>
          <li>
            <Link href="/react/managing-state" className="hover:underline">Managing State</Link>
          </li>
          <li>
            <Link href="/react/escape-hatches" className="hover:underline">Escapse Hatches</Link>
          </li>
        </ul>
      </nav> 
      <BackToHome />
    </div>
  );
}