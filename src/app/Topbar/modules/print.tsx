import { Button } from "@/components/ui/button";
import { FaPrint } from "react-icons/fa";

function Print() {
  const handlePrint = () => {
    var contentDiv = document.getElementById("resume");
    var printWindow = window.open("", "_blank");
    printWindow.document.write("<html><head><title>Resume</title>");
    printWindow.document.write(
      '<script src="https://kit.fontawesome.com/f270a71fbc.js" crossorigin="anonymous"></script>'
    );
    printWindow.document.write(
      '<link rel="stylesheet" type="text/css" href="/print.css">'
    );
    printWindow.document.write(
      "<style>@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');</style>"
    );
    printWindow.document.write(
      '<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
    );
    printWindow.document.write(
      '<script src="https://cdn.tailwindcss.com"></script>'
    );
    printWindow.document.write(
      "</head><body style=\"font-family:'IBM Plex Sans';\">"
    );
    printWindow.document.write(contentDiv.innerHTML);
    printWindow.document.write("</body></html>");
    printWindow.document.close();

    setTimeout(() => {
      printWindow.print();
    }, 100);
  };

  return (
    <div>
      <Button onClick={handlePrint}>
        <FaPrint />
      </Button>
    </div>
  );
}

export default Print;
