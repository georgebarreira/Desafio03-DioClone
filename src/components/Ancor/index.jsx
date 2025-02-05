import { Anc } from "./styles";

const Ancor = ({ onClick, text, ...rest }) => {
  return (
    <Anc onClick={onClick} {...rest}>
      {text}
    </Anc>
  );
};

export { Ancor };
