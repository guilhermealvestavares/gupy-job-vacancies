import { Label, Checkbox as CheckboxStyled, Text } from "./Checkbox.styles";

export const Checkbox = (text) => {
  return (
    <>
      <Label>
        <CheckboxStyled type="checkbox" value={text} />
        <Text>text</Text>
      </Label>
    </>
  );
};
