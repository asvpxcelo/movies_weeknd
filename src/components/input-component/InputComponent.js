import { CustomInput } from "./styles";

const InputComponent = ({ name, placeholder, onChange, type }) => {
  return (
    <CustomInput
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    type={type}
    />
  )
};

export default InputComponent;
