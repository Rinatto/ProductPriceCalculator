import { useState } from "react";
import { MyButton } from "./UI/MyButton/MyButton.tsx";
import { MyInput } from "./UI/MyInput/MyInput.tsx";

export function ProductItem() {
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [pricePerKg, setPricePerKg] = useState<string | null>(null);

  const weightNumber = parseFloat(weight);
  const priceNumber = parseFloat(price);

  const calculatePricePerKg = () => {
    if (weightNumber > 0) {
      const result = priceNumber / weightNumber;
      setPricePerKg(result.toFixed(2));
    } else {
      alert("Вес должен быть больше 0");
    }
  };

  const clearFields = () => {
    setWeight("");
    setPrice("");
    setPricePerKg(null);
  };

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "16px",
        borderRadius: "10px",
        marginBottom: "20px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <MyInput
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Вес продукта (в кг)"
      />
      <MyInput
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Общая цена"
      />
      <MyButton label="Рассчитать" onClick={calculatePricePerKg} />
      <MyButton label="Очистить" onClick={clearFields} />
      {pricePerKg && (
        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          Цена за килограмм: {pricePerKg} руб.
        </p>
      )}
    </div>
  );
}
