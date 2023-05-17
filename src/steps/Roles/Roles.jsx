import { useState, useEffect } from "react";
import { techsList } from "constants";
import { Wrapper, CheckboxStyled, Title } from "./Roles.styles";
import { normalizeRole } from "shared/utils/normalizeRole";

export const Roles = () => {
  const [role, setRole] = useState([]);

  const handlerRoleClick = (rolePicked) => {
    const normalizedRole = normalizeRole(rolePicked);
    role.find((item) => item === normalizedRole)
      ? setRole(role.filter((item) => item !== normalizedRole))
      : setRole([...role, normalizedRole]);
  };

  useEffect(() => {
    console.log(role);
  }, [role]);
  return (
    <>
      <Wrapper>
        {techsList.role.map((item) => (
          <CheckboxStyled
            text={item}
            value={item}
            name="role"
            onClick={() => {
              handlerRoleClick(item);
            }}
          />
        ))}
      </Wrapper>
    </>
  );
};
