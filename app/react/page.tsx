import Counter from "../components/Counter";
import BackToHome from "../components/BackToHome";

export default function Reacts() {
  return (
    <div className="container bg-blue-100 dark:bg-blue-900">
      <h1 className="text-3xl font-bold underline text-foreground">React</h1>
      <p className="font-mono">React is a library for building user interfaces.</p>
      
      <Counter />
      <BackToHome />
    </div>
  );
}