import { ContactCard, Container, Content, Paragraph } from "./styles/contactStyles"
// import { LinkedInBadge } from './linkedinBadge'
import { useEffect } from "react";


export default function Contact() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
        script.defer = true;
        script.type = "text/javascript";
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []); 

    return (
        <Container>
            <Content>
                <ContactCard>
                <div className="badge-base LI-profile-badge"
                    data-locale="en_US"
                    data-size="medium"
                    data-theme="dark"
                    data-type="VERTICAL"
                    data-vanity="jeremy-diaz-04376062"
                    data-version="v1">
                    {/* <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/jeremy-diaz-04376062?trk=profile-badge">
                    Jeremy Diaz
                    </a> */}
                </div>
                  
                </ContactCard>
                <ContactCard>
                <Paragraph>
                    To contact me please send me an email. 
                    <a href="mailto:jeremyjdz@gmail.com">jeremyjdz@gmail.com</a>.
                </Paragraph>
                </ContactCard>
            </Content>
        </Container>
    )
}
