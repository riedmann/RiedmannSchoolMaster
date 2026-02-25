import React, { useState } from "react";
import type { User } from "../../../utils/types";

type Props = {
  person: User;
};

export default function Person({ person }: Props) {
  const [activePerson, setActivePerson] = useState<User>(person);
  return (
    <div className="bg-red-400">
      <h1>{person.name}</h1>
      <button
        onClick={() => {
          const newPerson = activePerson;
          newPerson.name = "Changed Name";
          setActivePerson({ ...newPerson });
        }}
      >
        Change Person
      </button>
    </div>
  );
}
