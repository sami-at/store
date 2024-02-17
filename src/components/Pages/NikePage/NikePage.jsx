import { useEffect } from "react";
import ScrollToTop from "../../ScrollToTop";

function NikePage() {
  useEffect(() => {
    document.title = 'NIKE - Section'; // Set the title here

  }, []);
    return (
      <div>
        {/* Content */}
        <ScrollToTop />
      </div>
    );
  }
  
  // Make sure this line is present
  export default NikePage;
  