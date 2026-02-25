import type { User } from "../../../utils/types";
import Counter from "../Counter";

type Props = {
  person: User;
};

export default function PeopleCard({ person }: Props) {
  return (
    <div className="p-4  bg-amber-100 rounded-xl">
      <h1 className="font-bold text-2xl">{person.name}</h1>
      <div>{person.company.name}</div>
      <Counter title={""} />
    </div>
  );
}
