const Input = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder="username"
      className="border border-gray-600 rounded mt-4"
    />
  );
};

export default Input;
