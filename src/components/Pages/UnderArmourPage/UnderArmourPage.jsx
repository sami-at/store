import { useEffect } from "react";
import ScrollToTop from "../../ScrollToTop";

function UnderArmourPage() {
  useEffect(() => {
    document.title = 'Under-Armour - Section'; // Set the title here

  }, []);
    return (
      <div>
        {/* Content */}
        <ScrollToTop />
      </div>
    );
  }
  
  // Make sure this line is present
  export default UnderArmourPage;
  