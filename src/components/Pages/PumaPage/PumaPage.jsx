import { useEffect } from "react";
import ScrollToTop from "../../ScrollToTop";



function PumaPage() {
  useEffect(() => {
    document.title = 'PUMA - Section'; // Set the title here

  }, []);
    return (
      <div>
        {/* Content */}
        <ScrollToTop />
      </div>
    );
  }
  
  // Make sure this line is present
  export default PumaPage;
  