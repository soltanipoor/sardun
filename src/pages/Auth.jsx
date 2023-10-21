import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import UncontrolledInput from "@/components/UI/UncontrolledInput";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const inputRef = useRef();
  const [username, setUsername] = useState("آقای فراهانی");

  const handleSubmit = () => {
    const inputValue = inputRef.current.value;
    console.log("input value: ", inputValue);
  };

  console.log("render");
  return (
    <div className="px-16">
      <Link to="/">صفحه اول</Link>
      <h1>ورود / عضویت</h1>

      <Input value={username} onChange={(e) => setUsername(e.target.value)} />

      <div className="mt-2">your username is: {username}</div>

      <hr className="my-4" />

      <UncontrolledInput ref={inputRef} />
      
      <Button size="sm" onClick={handleSubmit}>
        Save
      </Button>
    </div>
  );
};

export default AuthPage;
