import './MyButton.css';

interface Props {
  label: string;
  onClick: () => void;
}

export function MyButton({ label, onClick }: Props) { 
    return (
    <button onClick={onClick}>{label}</button>
  );
}