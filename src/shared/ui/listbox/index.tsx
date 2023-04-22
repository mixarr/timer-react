import "./styles.scss";

interface ListboxProps {
  items: any[];
}

export const Listbox = ({ items }: ListboxProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className="listbox">
      {items.map((item, index) => (
        <li className="listbox__item" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};
