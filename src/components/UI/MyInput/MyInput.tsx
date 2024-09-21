import "./MyInput.css"

interface MyInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
  }

export function MyInput({ value, onChange, placeholder }: MyInputProps) {
    return (
      <input
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}