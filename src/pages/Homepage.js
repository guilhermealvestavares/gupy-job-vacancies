import { getVacancies } from "services/vacanciesService";
import { useEffect, useState } from "react";
import { Skills, Roles } from "steps";
import RolesContext from "contexts/RolesContext";

export const Homepage = () => {
  const [role, setRole] = useState([]);
  const [allVacancies, setAllVacancies] = useState([]);
  useEffect(() => {
    async function fetchInformations() {
      setAllVacancies(await getVacancies("front-end", 10));
    }
    // fetchInformations();
  }, []);

  // console.log(allVacancies);
  return (
    <RolesContext.Provider value={{ role, setRole }}>
      <Roles />
      <Skills />
    </RolesContext.Provider>
  );
};
