import { Label, Checkbox as CheckboxStyled, Text } from "./Checkbox.styles";

export const Checkbox = ({ text, name, onClick }) => {
  return (
    <>
      {text && (
        <Label data-testid="checkbox">
          <CheckboxStyled
            type="checkbox"
            value={text}
            name={name}
            onClick={onClick}
          />
          <Text>{text}</Text>
        </Label>
      )}
    </>
  );
};
