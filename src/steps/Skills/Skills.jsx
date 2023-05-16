import { useState, useEffect } from "react";
import { techsList } from "constants";
import { Wrapper, CheckboxStyled, Title } from "./Skills.styles";
import { normalizeRole } from "shared/utils/normalizeRole";

export const Skills = () => {
  return (
    <>
      <Wrapper>
        <Title>Quais tecnologias você domina?</Title>
        {techsList.frontend.map((item) => (
          <CheckboxStyled text={item} value={item} name={item} />
        ))}
      </Wrapper>
    </>
  );
};
