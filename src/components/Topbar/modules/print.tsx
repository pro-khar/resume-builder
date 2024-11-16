import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RootState } from "@/redux-beta/store";
import { FaPrint } from "react-icons/fa";
import { useSelector } from "react-redux";

function Print() {
  const intro = useSelector((state: RootState) => state.data.intro);
  function handlePrint() {
    try {
      const contentDiv = document.getElementById("resume");
      const printWindow = window.open("", "_blank");

      // Build HTML structure for print window
      printWindow.document.write(`
        <html>
          <head>
            <title>Resume</title>
            <script src="https://kit.fontawesome.com/f270a71fbc.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" type="text/css" href="/print.css">
            <style>
              @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
            </style>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://cdn.tailwindcss.com"></script>
          </head>
          <body style="font-family:'IBM Plex Sans';">
            ${contentDiv.innerHTML}
          </body>
        </html>
      `);

      // Close document to allow it to load
      printWindow.document.close();

      // Wait for the new window to finish loading before printing
      printWindow.onload = () => {
        printWindow.print();
        printWindow.close();
      };
    } catch (error) {
      console.error("Error printing resume:", error);
    }
  }

  return (
    <div>
      {intro ? (
        <Button onClick={handlePrint}>
          <FaPrint />
        </Button>
      ) : (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Button onClick={handlePrint} disabled>
                  <FaPrint />
                </Button>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Bhai pehle bana to le :)</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
}

export default Print;
