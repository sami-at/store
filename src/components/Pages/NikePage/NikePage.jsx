import { useEffect } from "react";

function NikePage() {
  useEffect(() => {
    document.title = 'Nike-Store'; // Set the title here

  }, []);
    return (
      <div>
        {/* Content */}
      </div>
    );
  }
  
  // Make sure this line is present
  export default NikePage;
  