import React, { useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { Avatar } from "./components/Avatar";
import { Button } from "./components/Button";
import { Toggle } from "./components/Toggle";
import { Checkbox } from "./components/Checkbox";
import { RadioButton } from "./components/RadioButton";
import { CheckCircle } from "./components/CheckCircle";
import { Input } from "./components/Input";
import { Snackbar } from "./components/Snackbar";
import { Tooltip } from "./components/Tooltip";
import { Select } from "./components/Select";

const options = [
  { label: "Нежный розовый", value: "soft-pink" },
  { label: "Пыльная роза", value: "dusty-rose" },
  { label: "Ягодный акцент", value: "berry" },
];

function App() {
  const [toggle, setToggle] = useState(true);
  const [checked, setChecked] = useState(true);
  const [radio, setRadio] = useState("daily");
  const [circle, setCircle] = useState(true);
  const [input, setInput] = useState("Текст");
  const [select, setSelect] = useState("dusty-rose");
  const snackbarId = useRef(0);
  const [snackbars, setSnackbars] = useState<
    Array<{ id: number; title?: string; message: string; leaving?: boolean }>
  >([]);

  const closeSnackbar = (id: number) => {
    setSnackbars((items) =>
      items.map((item) => (item.id === id ? { ...item, leaving: true } : item)),
    );
    window.setTimeout(() => {
      setSnackbars((items) => items.filter((item) => item.id !== id));
    }, 220);
  };

  const showSnackbar = () => {
    const id = ++snackbarId.current;
    setSnackbars((items) => [
      ...items,
      {
        id,
        title: "Готово",
        message: `Уведомление #${id}. Тут находится поясняющий текст`,
      },
    ]);

    window.setTimeout(() => closeSnackbar(id), 2500);
  };

  return (
    <main className="page-shell">
      <section className="hero">
        <div>
          <h1>Компоненты</h1>
        </div>
      </section>

      <section className="grid">
        <article className="panel">
          <h2>Avatars</h2>
          <div className="row">
            <Avatar name="Мария" size="sm" />
            <Avatar name="Мария Авдеева" />
            <Avatar name="Антон Попов" size="lg" status="online" />
            <Avatar
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces"
              name="Photo"
              size="lg"
            />
          </div>
        </article>

        <article className="panel">
          <h2>Buttons</h2>
          <div className="row wrap">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button disabled>Disabled</Button>
          </div>
        </article>

        <article className="panel">
          <h2>Toggle</h2>
          <Toggle checked={toggle} onChange={setToggle} label="Уведомления" />
          <Toggle
            checked={false}
            onChange={() => undefined}
            label="Disabled"
            disabled
          />
        </article>

        <article className="panel">
          <h2>Checkboxes</h2>
          <Checkbox
            checked={checked}
            onChange={setChecked}
            label="Согласен(-на)"
          />
          <Checkbox
            checked={false}
            onChange={() => undefined}
            label="Disabled"
            disabled
          />
        </article>

        <article className="panel">
          <h2>Radio Buttons</h2>
          <RadioButton
            name="period"
            value="daily"
            checked={radio === "daily"}
            onChange={setRadio}
            label="Каждый день"
          />
          <RadioButton
            name="period"
            value="weekly"
            checked={radio === "weekly"}
            onChange={setRadio}
            label="Раз в неделю"
          />
          <RadioButton
            name="period"
            value="off"
            checked={false}
            onChange={setRadio}
            label="Отключено"
            disabled
          />
        </article>

        <article className="panel">
          <h2>Check Circles</h2>
          <div className="row">
            <CheckCircle checked={circle} onChange={setCircle} label="Готово" />
            <CheckCircle
              checked={false}
              onChange={() => undefined}
              label="Disabled"
              disabled
            />
          </div>
        </article>

        <article className="panel">
          <h2>Inputs</h2>
          <Input
            label="Имя"
            value={input}
            onChange={setInput}
            placeholder="Введите текст"
          />
          <Input
            label="Disabled"
            value="Недоступно"
            onChange={() => undefined}
            disabled
          />
        </article>

        <article className="panel">
          <h2>Select</h2>
          <Select
            label="Палитра"
            value={select}
            onChange={setSelect}
            options={options}
          />
          <Select
            label="Disabled"
            value="soft-pink"
            onChange={() => undefined}
            options={options}
            disabled
          />
        </article>

        <article className="panel">
          <h2>Tooltip</h2>
          <Tooltip content="Вспомогательный текст">
            <Button variant="secondary">Наведи на меня</Button>
          </Tooltip>
        </article>

        <article className="panel">
          <h2>Snackbar</h2>
          <Button onClick={showSnackbar}>Показать Snackbar</Button>
          <Snackbar items={snackbars} onClose={closeSnackbar} />
        </article>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
