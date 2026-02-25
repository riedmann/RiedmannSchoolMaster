import { useState } from "react";

type Props = {
  title: string;
  startValue?: number;
};

export default function Counter({ title, startValue }: Props) {
  const [counter, setCounter] = useState<number>(startValue || 0);

  return (
    <div
      className="p-4 shadow-2xl rounded-2xl text-center"
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      <div className="font-bold text-3xl">{title}</div>
      <div className="font-extralight">{counter}</div>
    </div>
  );
}
