import { Button } from "@poc-mitosis/library-react";
import { StButton, defineCustomElements } from "@poc-stencil/library-react";

defineCustomElements();

function App() {
  const handleClick = () => {
    alert("Hello");
  };

  return (
    <main>
      <h1>REACT - Components</h1>

      <h2>MitosisJS</h2>
      <Button xClick={handleClick}>MitosisJS Button</Button>

      <h2>StencilJS</h2>
      <StButton onClick={handleClick}>StencilJS Button</StButton>
    </main>
  );
}

export default App;
