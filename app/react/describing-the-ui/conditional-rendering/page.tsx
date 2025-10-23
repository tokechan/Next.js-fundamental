import Navigation from "../../../components/Navigation";
import Counter from "../../../components/Counter";

export default function ConditionalRendering() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold my-8">Conditional Rendering</h1>
      <p>ここに学習内容を書いていきます。</p>
      <Counter />
      <Navigation />
    </div>
  );
}

