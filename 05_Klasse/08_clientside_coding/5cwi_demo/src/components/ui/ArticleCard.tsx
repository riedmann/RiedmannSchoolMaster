import { useState } from "react";
import Button from "./Button";

type Props = {
  title: string;
  image: string;
  text: string;
  initial?: number;
};

export default function ArticleCard({
  title,
  image,
  text,
  initial = 0,
}: Props) {
  const [counter, setCounter] = useState<number>(initial);
  const [img, setImage] = useState<string>(image);

  const update = () => {
    setCounter(counter + 1);
    let i = `https://picsum.photos/seed/${Math.random()}picsum/200/300`;
    setImage(i);
  };
  return (
    <div className=" text-gray-500 ">
      {img && (
        <img src={img} alt={title} className="w-full h-40 object-cover" />
      )}
      <div className="text-3xl">
        <div className="flex justify-between mb-2">
          <h2>{title}</h2>
          <div>{counter}</div>
        </div>
        <p className="text-sm">{text}</p>
      </div>
      <div className="mt-2">
        <Button text={"Count Up"} press={() => update()} />
      </div>
    </div>
  );
}
