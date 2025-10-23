



import Link from "next/link";
import BackToHome from "../../components/Navigation";

export default function ManagingState() {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold mt-8">Managing State</h1>
      <p className="font-mono mb-4">Managing State is the process of managing state in React applications.</p>
      <nav>
        <ul className="text-2xl font-bold space-y-2">
          <li>
            <Link href="/react/managing-state/reacting-to-input-with-state" className="hover:underline">Reacting to Input with State</Link>
          </li>
          <li>
            <Link href="/react/managing-state/choosing-the-state-structure" className="hover:underline">Choosing the State Structure</Link>
          </li>
          <li>
            <Link href="/react/managing-state/sharing-state-between-components" className="hover:underline">Sharing State Between Components</Link>
          </li>
          <li>
            <Link href="/react/managing-state/preserving-and-resetting-state" className="hover:underline">Preserving and Resetting State</Link>
          </li>
          <li>
            <Link href="/react/managing-state/extracting-state-logic-into-a-reducer" className="hover:underline">Extracting State Logic into a Reducer</Link>
          </li>
          <li>
            <Link href="/react/managing-state/passing-data-deeply-with-context" className="hover:underline">Passing Data Deeply with Context</Link>
          </li>
          <li>
            <Link href="/react/managing-state/scaling-up-with-reducer-and-context" className="hover:underline">Scaling Up with Reducer and Context</Link>
          </li>
        </ul>
      </nav> 
      <BackToHome />
    </div>
  );
}