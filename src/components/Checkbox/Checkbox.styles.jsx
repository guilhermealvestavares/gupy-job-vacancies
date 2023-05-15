import styled from "styled-components";

export const Checkbox = styled.input`
  &[type="checkbox"] {
    display: none;
  }
`;

export const Label = styled.label`
  border: 2px solid rgba(127, 143, 166, 1);
  border-radius: 8px;
  max-width: 200px;
  width: 100%;
  height: 30px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 12px;

  &:has(input[type="checkbox"]:checked) {
    background-color: rgba(249, 130, 107, 0.2);
    border-color: rgba(249, 130, 107, 1);
  }
`;

export const Text = styled.span`
  font-weight: bold;
`;
