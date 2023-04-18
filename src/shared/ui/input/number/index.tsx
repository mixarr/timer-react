import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
  useRef,
} from "react";

import "./styles.scss";

interface InputNumberProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: number;
  minValue?: number;
  maxValue?: number;
  increment?: () => void;
  decrement?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export const InputNumber = ({
  value = 0,
  minValue = 0,
  maxValue = 999,
  onChange,
  increment,
  decrement,
  ...props
}: InputNumberProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const keydownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && inputRef.current?.value === "0") {
      event.preventDefault();
      return;
    }

    if (event.key === "Backspace" && inputRef.current?.value.length === 1) {
      event.preventDefault();
      inputRef.current.value = "0";
    }

    if (inputRef.current?.value === "0") {
      inputRef.current.value = event.currentTarget.value.slice(0, -1);
    }
  };

  return (
    <div className="input-number">
      <input
        type="number"
        ref={inputRef}
        min={minValue}
        max={maxValue}
        value={value}
        onChange={onChange}
        onKeyDown={keydownHandler}
        {...props}
      />
      <button
        className="input-number__sub"
        onClick={decrement}
        disabled={value === minValue}
      >
        -
      </button>
      <button
        className="input-number__add"
        onClick={increment}
        disabled={value >= maxValue}
      >
        +
      </button>
    </div>
  );
};
