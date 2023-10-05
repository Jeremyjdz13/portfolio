import { useEffect, useState } from "react"


export const useLinkFocus = () => {
    const [isLinkFocused, setIsLinkFocused ] = useState<string | null>(null)
    
    function handleLinkFocus(linkId: string) {
        setIsLinkFocused(linkId)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Entry.target.id contains the ID of the section in view
                handleLinkFocus(entry.target.id);
                console.log(entry.target.id, "Section ID")
              }
            });
          },
          {
            threshold: 0.5, // Trigger when 50% of the section is visible
          }
        );
      
        // Find all sections by their IDs and observe them
        const sections = ['home', 'about', 'projects', 'contact'];
        sections.forEach((id) => {
          const section = document.getElementById(id);
          if (section) {
            observer.observe(section);
          }
        });
      
        // Clean up the observer when the component is unmounted
        return () => {
          sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
              observer.unobserve(section);
            }
          });
        };
      }, []);
      
    return {
        isLinkFocused,
        handleLinkFocus
    }
}