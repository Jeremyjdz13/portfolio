import { 
    AppCard, 
    Container, 
    ScrollAppsContainer, 
    ScrollArrowLeft, 
    ScrollArrowRight, 
    ScrollArrows, 
    Title, 
    TitleContainer
} from "./styles/jsAppsStyles"
import { useEffect, useRef } from 'react'

export default function JSApps() {
    const observer = useRef<IntersectionObserver | null>(null)
    const hiddenElementsRef = useRef<NodeListOf<Element> | null>(null)

    useEffect(() => {
        const options = {
          root: null, // Set to null for viewport intersection
          rootMargin: '0px',
          threshold: 0.5, // Adjust this threshold as needed
        };
    
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show')
            }
          });
        };
    
        observer.current = new IntersectionObserver(handleIntersection, options);
        hiddenElementsRef.current = document.querySelectorAll('.hidden');
    
        if (hiddenElementsRef.current) {
          hiddenElementsRef.current.forEach((element) => {
            observer.current?.observe(element);
          });
        }
    
        // Cleanup
        return () => {
          if (observer.current) {
            observer.current.disconnect();
          }
        };
      }, []);

    return (
        <Container>
            <TitleContainer>
                <Title>My Apps</Title>
            </TitleContainer>
            <ScrollAppsContainer>
                <AppCard className="hidden">App 1</AppCard>
                <AppCard className="hidden">App 2</AppCard>
                <AppCard className="hidden">App 3</AppCard>
                <AppCard className="hidden">App 4</AppCard>
                <AppCard className="hidden">App 5</AppCard>
                <AppCard className="hidden">App 6</AppCard>
                <AppCard className="hidden">App 7</AppCard>
                <AppCard className="hidden">App 8</AppCard>
                <AppCard className="hidden">App 9</AppCard>
                <AppCard className="hidden">App 10</AppCard>
            </ScrollAppsContainer>
            <ScrollArrows>
                <ScrollArrowLeft>
                    &lt;
                </ScrollArrowLeft>
                <ScrollArrowRight>
                    &gt;
                </ScrollArrowRight>
            </ScrollArrows>
        </Container>
    )
}