



import Link from "next/link";
import Navigation from "../../components/Navigation";

export default function DescribingTheUI() {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold mt-8">Adding Interactivity</h1>
      <p className="font-mono mb-4">Adding Interactivity is the process of adding interactivity to the UI.</p>
      <nav>
        <ul className="text-2xl font-bold space-y-2">
          <li>
            <Link href="/react/adding-interactivity/responding-to-events" className="hover:underline">Responding to Events</Link>
          </li>
          <li>
            <Link href="/react/adding-interactivity/state-a-components-memory" className="hover:underline">State: A Component&apos;s Memory</Link>
          </li>
          <li>
            <Link href="/react/adding-interactivity/render-and-commit" className="hover:underline">Render and Commit</Link>
          </li>
          <li>
            <Link href="/react/adding-interactivity/state-as-a-snapshot" className="hover:underline">State as a Snapshot</Link>
          </li>
          <li>
            <Link href="/react/adding-interactivity/queueing-a-series-of-state-updates" className="hover:underline">Queueing a Series of State Updates</Link>
          </li>
          <li>
            <Link href="/react/adding-interactivity/updating-objects-in-state" className="hover:underline">Updating Objects in State</Link>
          </li>
          <li>
            <Link href="/react/adding-interactivity/updating-arrays-in-state" className="hover:underline">Updating Arrays in State</Link>
          </li>
        </ul>
      </nav> 
      <Navigation />
    </div>
  );
}