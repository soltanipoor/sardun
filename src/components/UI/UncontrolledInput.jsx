import { forwardRef } from "react";

const UncontrolledInput = forwardRef((props, ref) => {
  return <input ref={ref} className="border border-green-500 rounded py-2" />;
});

UncontrolledInput.displayName = "UncontrolledInput";

export default UncontrolledInput;
