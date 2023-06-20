import { 
    Container,
    Paragraph,
    ParagraphCard, 
    Title, 
    TopContainer,
    ContentContainer
} from './homeStyles'
import {Route, Routes} from 'react-router-dom'
import JSApps from './jsApps'

export default function Home(){
    return (
        <Container>
            <TopContainer>
                <ParagraphCard>
                    <Paragraph>For the last several years I have been honing my skills with Frontend Development. Coding in HTML, CSS, & JavaScript has really allowed my creative imagination to explore Web Design.  I love working in React and have expanded my knowledge using NextJS, TypeScript, & GraphQL.
                    </Paragraph>
                </ParagraphCard>
                <Title>
                    Frontend Developer &amp; Artist
                </Title>
            </TopContainer>
            <ContentContainer>
                <Routes>
                    <Route path="/*" element={<JSApps />}/>
                </Routes>
            </ContentContainer>
        </Container>
    )
}