import { update, component, createRoot, html } from "ivi";

function genData() {
  return Array.from({ length: 10_000 }, () => Math.random() * 100);
}

const App = component((c) => {
  return (data: number[]) => html`${data[0]}`;
});

const root = createRoot(document.getElementById('root')!);

function renderWithData() {
  update(root, App(genData()));
}

renderWithData();

window.renderWithData = renderWithData;