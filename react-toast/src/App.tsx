import { ToastContainer } from "./components/ToastContainer";
import { useToast } from "./hooks/useToast";

function App() {
  const { addToast } = useToast();

  return (
    <div>
      <h1>Toast Example</h1>
      <button
        onClick={() =>
          addToast("Hello world", { type: "success", position: "top" })
        }
      >
        Show Toast
      </button>
      <ToastContainer />
    </div>
  );
}

export default App;
