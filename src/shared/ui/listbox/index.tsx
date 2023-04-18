import "./styles.scss";

interface ListboxProps {
  items: any[];
}

export const Listbox = ({ items }: ListboxProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
