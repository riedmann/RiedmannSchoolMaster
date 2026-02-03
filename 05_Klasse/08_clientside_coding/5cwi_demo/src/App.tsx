import ArticleCard from "./components/ui/ArticleCard";

function App() {
  return (
    <>
      <h1>hello</h1>
      <p>das ist super</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8">
        <ArticleCard title="Super" text="blah blah blah test" />
        <ArticleCard
          title={"Test"}
          text={"teset text"}
          image="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
        />
        <ArticleCard title="Super" text="blah blah blah test" />
        <ArticleCard
          title={"Test"}
          text={"teset text"}
          image="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
        />
        <ArticleCard title="Super" text="blah blah blah test" />
        <ArticleCard
          title={"Test"}
          text={"teset text"}
          image="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
        />
      </div>
    </>
  );
}

export default App;
