import { useState, useEffect } from "react";
import { techsList } from "constants";
import { Wrapper, CheckboxStyled, Title } from "./Roles.styles";
import { normalizeRole } from "shared/utils/normalizeRole";

export const Roles = () => {
  const [role, setRole] = useState([]);

  const handleRoleClick = (rolePicked) => {
    setRole([...role, normalizeRole(rolePicked)]);
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
              handleRoleClick(item);
            }}
          />
        ))}
      </Wrapper>
    </>
  );
};
