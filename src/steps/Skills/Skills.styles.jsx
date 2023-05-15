import styled from "styled-components";
import { Checkbox } from "components";

export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto 10px auto;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 64px rgba(20, 20, 20, 0.04);
`;

export const CheckboxStyled = styled(Checkbox)`
  margin-right: 20px;
  background-color: red;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 16px;
  width: 100%;
`;
