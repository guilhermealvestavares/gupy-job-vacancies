import { techsList } from "constants";
import { Wrapper, CheckboxStyled, Title } from "./Skills.styles";
import RolesContext from "contexts/RolesContext";
import { useContext, useEffect } from "react";

export const Skills = () => {
  const { role, setRole } = useContext(RolesContext);

  useEffect(() => {
    console.log(role);
  }, [role]);

  return (
    <>
      {role?.map((rolePicked) => {
        return (
          <Wrapper>
            <Title>Quais tecnologias {rolePicked} você domina?</Title>
            {techsList?.[rolePicked].map((item) => (
              <CheckboxStyled key={item} text={item} value={item} name={item} />
            ))}
          </Wrapper>
        );
      })}
    </>
  );
};
