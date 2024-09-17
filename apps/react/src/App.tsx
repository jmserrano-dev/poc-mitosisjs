import { Button } from "@poc-mitosis/library-react";
import { MyComponent } from "@poc-stencil/library-react";

function App() {
  return (
    <main>
      <h1>REACT - Components</h1>

      <h2>MitosisJS</h2>
      <Button xClick={() => alert("Hello")}>Button</Button>

      <h2>StencilJS</h2>
      <MyComponent first="John" middle="James" last="Doe" />
    </main>
  );
}

export default App;
