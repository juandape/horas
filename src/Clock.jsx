import { useState } from "react";

function ActualTime() {
  const [time, setTime] = useState(new Date().toLocaleString());
  setInterval(() => {
    setTime(new Date().toLocaleString());
  }, 5000);

  return (
    <>
      <h1>Esta es la fecha y la hora actual:</h1>
      <br />
      <h2>{time}</h2>
    </>
  );
}

export default ActualTime;
