import ArticleCard from "./ArticleCard";

type Props = {};

export default function ArticleContainer({}: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      <ArticleCard
        title={"Test"}
        initial={10}
        text={"teset text"}
        image="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
      />

      <ArticleCard
        title={"Test"}
        text={"teset text"}
        image="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
      />

      <ArticleCard
        title={"Test"}
        text={"teset text"}
        image="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
      />
    </div>
  );
}
