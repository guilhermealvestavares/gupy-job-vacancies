import { useState, useEffect } from "react";
import { techsList } from "constants";
import { Wrapper, CheckboxStyled, Title } from "./Skills.styles";

export const Skills = () => {
  const [role, setRole] = useState("");

  const normalizeRole = (role) => {
    setRole(role);
  };

  useEffect(() => {
    console.log(role);
  }, [role]);
  return (
    <>
      <Wrapper>
        <Title>Qual a sua área de atuação?</Title>
        {techsList.role.map((item) => (
          <CheckboxStyled
            text={item}
            value={item}
            name="role"
            onClick={() => {
              normalizeRole(item);
            }}
          />
        ))}
      </Wrapper>
      <Wrapper>
        <Title>Quais tecnologias {role} você domina?</Title>
        {techsList.frontend.map((item) => (
          <CheckboxStyled text={item} value={item} name={item} />
        ))}
      </Wrapper>
    </>
  );
};
