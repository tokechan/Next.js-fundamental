import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold my-8">Learn React</h1>
      
      <nav>
        <ul className="text-2xl font-bold space-y-2">
          <li>
            <Link href="/your-first-component" className="hover:underline">Your First Component</Link>
          </li>
          <li>
            <Link href="/importing-exporting-components" className="hover:underline">Importing and Exporting Components</Link>
          </li>
          <li>
            <Link href="/writing-markup-jsx" className="hover:underline">Writing Markup with JSX</Link>
          </li>
          <li>
            <Link href="/javascript-in-jsx" className="hover:underline">JavaScript in JSX with Curly Braces</Link>
          </li>
          <li>
            <Link href="/passing-props" className="hover:underline">Passing Props to a Component</Link>
          </li>
          <li>
            <Link href="/conditional-rendering" className="hover:underline">Conditional Rendering</Link>
          </li>
          <li>
            <Link href="/keeping-components-pure" className="hover:underline">Keeping Components Pure</Link>
          </li>
          <li>
            <Link href="/your-ui-as-tree" className="hover:underline">Your UI as a Tree</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}