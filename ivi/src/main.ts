import { update, component, createRoot, html } from "ivi";

function genData() {
  return Array.from({ length: 10_000 }, () => Math.random() * 100);
}

const App = component((c) => {
  return (data: number[]) => html`${data[0]}`;
});

const root = createRoot(document.body);
update(root, App(genData()));

document.getElementById('update')!.addEventListener('click', () => {
  update(root, App(genData()));
});