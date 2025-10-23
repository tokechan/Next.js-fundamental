
import Link from "next/link";
import BackToHome from "../../components/Navigation";

export default function DescribingTheUI() {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold mt-8">Describing the UI</h1>
      <p className="font-mono mb-4">Describing the UI is the process of describing how the UI should look and behave.</p>
      <nav>
        <ul className="text-2xl font-bold space-y-2">
          <li>
            <Link href="/react/your-first-component" className="hover:underline">Your First Component</Link>
          </li>
          <li>
            <Link href="/react/importing-exporting-components" className="hover:underline">Importing and Exporting Components</Link>
          </li>
          <li>
            <Link href="/react/writing-markup-jsx" className="hover:underline">Writing Markup with JSX</Link>
          </li>
          <li>
            <Link href="/react/javascript-in-jsx" className="hover:underline">JavaScript in JSX with Curly Braces</Link>
          </li>
          <li>
            <Link href="/react/passing-props" className="hover:underline">Passing Props to a Component</Link>
          </li>
          <li>
            <Link href="/react/conditional-rendering" className="hover:underline">Conditional Rendering</Link>
          </li>
          <li>
            <Link href="/react/keeping-components-pure" className="hover:underline">Keeping Components Pure</Link>
          </li>
          <li>
            <Link href="/react/your-ui-as-tree" className="hover:underline">Your UI as a Tree</Link>
          </li>
        </ul>
      </nav> 
      <BackToHome />
    </div>
  );
}