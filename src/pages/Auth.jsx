import { Link } from "react-router-dom";
import Button from "../components/UI/Button";

const AuthPage = () => {
  return (
    <div className="px-16">
      <Link to="/">صفحه اول</Link>
      <h1>ورود / عضویت</h1>

      <div className="flex gap-4 items-center">
        <Button variant="fill" size="md">ورود</Button>
        <Button variant="outline" size="md">ورود</Button>

        <Button variant="fill" size="sm">ورود</Button>
        <Button variant="outline" size="sm">ورود</Button>
      </div>
    </div>
  );
};

export default AuthPage;
