import { useEffect, useState } from "react";
import type { User } from "../../../utils/types";
import PeopleCard from "./PeopleCard";

export default function PeopleContainer() {
  const [people, setPeople] = useState<User[]>([]);
  const [peopleToShow, setPeopleToShow] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [color, setColor] = useState<string>("bg-white");

  useEffect(() => {
    console.log("Inside use effect");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data);
        setPeopleToShow(data);
      });
  }, []);

  useEffect(() => {
    console.log(searchTerm);
    const newData = people.filter((person: User) =>
      person.name.includes(searchTerm),
    );
    setPeopleToShow([...newData]);
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm.length > 3) {
      setColor("bg-red-400");
    } else {
      setColor("bg-green-400");
    }
  }, [searchTerm]);

  return (
    <>
      <input
        type="text"
        placeholder="Search people..."
        className="mb-4 p-2 border rounded"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <div className={`w-40 h-40 gap-2 ${color}`}></div>
      <div className={`grid grid-cols-5 gap-2 ${color}`}>
        {peopleToShow.map((person: User) => (
          <PeopleCard key={person.id} person={person} />
        ))}
      </div>
    </>
  );
}
