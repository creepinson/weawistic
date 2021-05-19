import { render } from "preact";
import { Layout } from "./components/layout";

const root = document.querySelector<HTMLDivElement>("#app");

if (root) render(<Layout />, root);
