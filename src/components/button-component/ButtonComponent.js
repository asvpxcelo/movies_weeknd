import { SignInButton } from "./styles";

const ButtonComponent = ({ type, text, onClick, disabled }) => {
  return (
    <SignInButton
        type={type}
        text={text}
        onClick={onClick}
        disabled={disabled}
    >{text}</SignInButton>
  )
};

export default ButtonComponent;
