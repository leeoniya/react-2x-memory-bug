import { update, component, createRoot, useState, html } from "ivi";

function genData() {
  return Array.from({ length: 10_000 }, () => Math.random() * 100);
}

const App = component((c) => {
  const [getData, setData] = useState<number[]>(c, genData());
  const onclick = () => setData(genData());

  return () =>
    html`
      ${getData()[0]}
      <br>
      <button @click=${onclick}>Update data!</button>
    `;
});

const root = createRoot(document.body);
update(root, App());