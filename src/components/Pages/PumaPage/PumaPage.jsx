import { useEffect } from "react";



function PumaPage() {
  useEffect(() => {
    document.title = 'Puma-Store'; // Set the title here

  }, []);
    return (
      <div>
        {/* Content */}
      </div>
    );
  }
  
  // Make sure this line is present
  export default PumaPage;
  