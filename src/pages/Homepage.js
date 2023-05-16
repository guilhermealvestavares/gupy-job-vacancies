import { getVacancies } from "services/vacanciesService";
import { useEffect, useState } from "react";
import { Skills, Roles } from "steps";

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
      <Roles />
      <Skills />
    </>
  );
};
