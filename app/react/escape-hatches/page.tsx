import Link from "next/link";
import BackToHome from "../../components/BackToHome";

export default function EscapeHatches() {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold mt-8">Escape Hatches</h1>
      <p className="font-mono mb-4">Escape Hatches are ways to step outside React when you need to.</p>
      <nav>
        <ul className="text-2xl font-bold space-y-2">
          <li>
            <Link href="/react/escape-hatches/referencing-values-with-refs" className="hover:underline">Referencing Values with Refs</Link>
          </li>
          <li>
            <Link href="/react/escape-hatches/manipulating-the-dom-with-refs" className="hover:underline">Manipulating the DOM with Refs</Link>
          </li>
          <li>
            <Link href="/react/escape-hatches/synchronizing-with-effects" className="hover:underline">Synchronizing with Effects</Link>
          </li>
          <li>
            <Link href="/react/escape-hatches/you-might-not-need-an-effect" className="hover:underline">You Might Not Need an Effect</Link>
          </li>
          <li>
            <Link href="/react/escape-hatches/lifecycle-of-reactive-effects" className="hover:underline">Lifecycle of Reactive Effects</Link>
          </li>
          <li>
            <Link href="/react/escape-hatches/separating-events-from-effects" className="hover:underline">Separating Events from Effects</Link>
          </li>
          <li>
            <Link href="/react/escape-hatches/removing-effect-dependencies" className="hover:underline">Removing Effect Dependencies</Link>
          </li>
          <li>
            <Link href="/react/escape-hatches/reusing-logic-with-custom-hooks" className="hover:underline">Reusing Logic with Custom Hooks</Link>
          </li>
        </ul>
      </nav> 
      <BackToHome />
    </div>
  );
}

