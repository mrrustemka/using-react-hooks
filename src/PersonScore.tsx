/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { getPerson } from "./getPerson";

export function PersonScore() {
  const [name, setName] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPerson().then((person) => {
      setLoading(false);
      setName(person.name);
    });
  }, []);
  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      <button>Add</button>
      <button>Subtract</button>
      <button>Reset</button>
    </div>
  );
}
