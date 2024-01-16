interface InputProps {
  type: string;

  placeholder: string;
  name: string;
  id: string;
  onChange?: any;
}

const Input = ({
  type,
  placeholder,
  onChange,
  name,
  id,

}: InputProps) => {
  return (
    <input
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
 
      onChange={(e) => onChange(e)}
      className="
                my-2 border-2 
                border-gray-200
                rounded
                w-full
                p-3
                focus:outline-none
                focus:bg-white
                focus:border-blue-500"
    />
  );
};

export default Input;
