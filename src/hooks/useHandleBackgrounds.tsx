import { useEffect } from "react";

interface Section {
    id: string | null;
    backgroundURL: string[];
    ref?: React.RefObject<HTMLElement>;
}

interface HandleBackgroundsProps {
    sections: Section[];
    screenWidth: number;
}
const useHandleBackgrounds = ({ sections, screenWidth }: HandleBackgroundsProps) => {


    useEffect(() => {
        console.log(sections, "Sections")
        const handleBackgrounds = () => {
          sections.forEach(section => {
            const sectionElement = section.id ? document.getElementById(section.id): null; // ? null example of type guard.
        
            if (sectionElement) {
              if (screenWidth >= 1200) {
                sectionElement.style.backgroundImage = `${section.backgroundURL[0]}`;
              } else if (screenWidth < 1200 && screenWidth >= 640) {
                sectionElement.style.backgroundImage = `${section.backgroundURL[1]}`;

              } else if (screenWidth < 640 ) {
                sectionElement.style.backgroundImage = `${section.backgroundURL[2]}`;

              } else {
                sectionElement.style.backgroundImage = 'none';
              }
            }
          });
        };
    
        handleBackgrounds()

      }, [sections, screenWidth]);

}

export default useHandleBackgrounds;