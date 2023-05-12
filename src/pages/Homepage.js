import { getVacancies } from "services/vacanciesService";
import { useEffect, useState } from "react";
import { Checkbox } from "components";

export const Homepage = () => {
  const [allVacancies, setAllVacancies] = useState([]);
  useEffect(() => {
    async function fetchInformations() {
      setAllVacancies(await getVacancies("front-end", 10));
    }
    fetchInformations();
  }, []);

  console.log(allVacancies);
  return (
    <>
      <p>homepage aqui</p>
    </>
  );
};
