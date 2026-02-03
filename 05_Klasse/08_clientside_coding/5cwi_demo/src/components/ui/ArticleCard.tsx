type Props = {
  title: string;
  image?: string;
  text: string;
};

export default function ArticleCard({ title, image, text }: Props) {
  return (
    <div className="p-4 border">
      <h2>{title}</h2>
      <p>{text}</p>
      {image && <img src={image} alt={title} />}
    </div>
  );
}
