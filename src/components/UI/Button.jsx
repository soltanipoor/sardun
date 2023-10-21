import PropTypes from "prop-types";

const Button = ({ children, variant = "fill", size = "md", ...props }) => {
  const variants = {
    fill: "bg-black text-white hover:bg-purple-500",
    outline:
      "border border-gray-200 text-purple-500 hover:bg-purple-200 hover:border-purple-300",
  };

  const sizes = {
    md: "p-4",
    sm: "px-4 py-2.5",
  };

  return (
    <button
      className={`rounded-xl ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["fill", "outline"]),
  size: PropTypes.oneOf(["sm", "md"]),
};

export default Button;
