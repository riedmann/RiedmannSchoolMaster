type Props = {
  text: string;
  press: () => void;
};

export default function Button({ text, press }: Props) {
  return (
    <div
      className="p-2 border-gray-100 border bg-amber-200 hover:bg-amber-300 hover:cursor-pointer rounded-2xl text-center"
      onClick={() => press()}
    >
      {text}
    </div>
  );
}
