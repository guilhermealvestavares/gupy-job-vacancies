import { useState, useEffect, useContext } from "react";
import { techsList } from "constants";
import { Wrapper, CheckboxStyled, Title } from "./Roles.styles";
import { normalizeRole } from "shared/utils/normalizeRole";
import RolesContext from "contexts/RolesContext";

export const Roles = () => {
  const { role, setRole } = useContext(RolesContext);
  const handlerRoleClick = (rolePicked) => {
    const normalizedRole = normalizeRole(rolePicked);
    role?.find((item) => item === normalizedRole)
      ? setRole(role?.filter((item) => item !== normalizedRole))
      : setRole([...role, normalizedRole]);
  };

  return (
    <Wrapper>
      <Title>Qual a sua área de atuação?</Title>
      {techsList?.roles?.map((item) => (
        <CheckboxStyled
          key={item}
          text={item}
          value={item}
          name="role"
          onClick={() => {
            handlerRoleClick(item);
          }}
        />
      ))}
    </Wrapper>
  );
};
