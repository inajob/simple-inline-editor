import { createRoot, React } from "./deps.ts";
import { App } from "./components/App.tsx";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);
