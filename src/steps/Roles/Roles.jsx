import { useState, useEffect } from "react";
import { techsList } from "constants";
import { Wrapper, CheckboxStyled, Title } from "./Roles.styles";
import { normalizeRole } from "shared/utils/normalizeRole";

export const Roles = () => {
  const [role, setRole] = useState([]);

  const handleRoleClick = (rolePicked) => {
    if (role.find((item) => item === normalizeRole(rolePicked))) {
      setRole(role.filter((item) => item !== normalizeRole(rolePicked)));
    } else {
      setRole([...role, normalizeRole(rolePicked)]);
    }
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
              handleRoleClick(item);
            }}
          />
        ))}
      </Wrapper>
    </>
  );
};
