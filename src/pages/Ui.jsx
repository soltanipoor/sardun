// import Button from "@/components/UI/Button";
import Button from '@/components/UI/Button'

const Ui = () => {
  return (
    <div className="flex gap-4 items-center">
      <Button variant="fill" size="md">
        ورود
        <span className="inline-block w-4 h-4 bg-red-500 rounded-full">3</span>
      </Button>
      <Button variant="outline" size="md">
        ورود
      </Button>

      <Button>مهدی</Button>

      <Button variant="fill" size="sm">
        ورود
      </Button>
      <Button variant="outline" size="sm">
        ورود
      </Button>
    </div>
  );
};

export default Ui;
