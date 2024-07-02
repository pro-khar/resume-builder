import { Button } from "@/components/ui/button";
import { FaPrint } from "react-icons/fa";

function Print() {
  const handlePrint = () => {};
  return (
    <div>
      <Button onClick={handlePrint} disabled>
        <FaPrint />
      </Button>
    </div>
  );
}

export default Print;