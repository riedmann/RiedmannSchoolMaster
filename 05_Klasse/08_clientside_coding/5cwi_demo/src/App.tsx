import PeopleContainer from "./components/ui/people/PeopleContainer";
import Person from "./components/ui/people/Person";

function App() {
  return (
    <>
      <h1>Demo</h1>
      <Person
        person={{
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        }}
      />
      <PeopleContainer />
    </>
  );
}

export default App;
