import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HireForm({ person, hiredPeople, setHiredPeople }) {
  const [wage, setWage] = useState(0);

  // Get a navigator function using the useNavigate hook from React Router.
  const navigator = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigator("/");
    const theNewHire = { ...person, wage: wage };
    setHiredPeople([...hiredPeople, theNewHire]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;
