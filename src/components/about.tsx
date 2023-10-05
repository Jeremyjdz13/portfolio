import { AboutTitle, Container, ParagraphCard, ParagraphContainer, TitleContainer } from "./styles/aboutStyles"

export default function About(){
    return (
        <Container>
            <TitleContainer>
                <AboutTitle>
                    Hello World!
                </AboutTitle>
                <AboutTitle>
                    I am Jeremy Diaz.
                </AboutTitle>
            </TitleContainer>       
            <ParagraphContainer>
                <ParagraphCard> 
                Welcome to a world where technology and art intertwine, where imagination and code join forces to create extraordinary experiences. Since my earliest days studying and practicing art, my journey has been driven by a deep passion for software engineering and the boundless possibilities it offers.
                </ParagraphCard>
                {/* <ParagraphCard>
                With each stroke of a brush and every line of code, I have nurtured a unique blend of creativity and technical expertise. The canvas has expanded to encompass the digital realm, where I bring my vivid imagination and love for technology together.
                </ParagraphCard> */}
                {/* <ParagraphCard>
                As I delve deeper into the fascinating world of software engineering, I find boundless joy in translating lines of code into captivating user interfaces that leave a lasting impression. Writing code has become my medium, and with every keystroke, I paint experiences that delight and engage users. 
                </ParagraphCard> */}
                <ParagraphCard>
                Through continuous learning and staying abreast of the latest design trends and technologies, I seek to push the boundaries of what's possible. I embrace new tools, frameworks, and methodologies that enable me to bring innovation and elegance to my work.
                </ParagraphCard>
                <ParagraphCard>
                Join me on this exhilarating journey where I combine my love for software engineering with the artistry of user interface design. Together, we can create digital experiences that leave a lasting impact and forge meaningful connections with users.
                </ParagraphCard>
            </ParagraphContainer>
        </Container>
    )
}