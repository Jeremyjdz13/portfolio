import { 
    Container,
    Paragraph,
    ParagraphCard, 
    Title, 
    TopContainer,
    ContentContainer
} from './styles/homeStyles'
 import JSApps from '../components/jsApps'

export default function Home(){
    return (
        <Container>
            <TopContainer>
                <ParagraphCard>
                    <Paragraph>
                        For the last several years I have been honing my skills with Frontend Development. Coding in HTML, CSS, & JavaScript has really allowed my creative imagination to explore Web Design.  I love working in React and have expanded my knowledge using NextJS, TypeScript, & GraphQL.
                    </Paragraph>
                </ParagraphCard>
                <Title>
                    Frontend Developer &amp; Artist
                </Title>
            </TopContainer>
            <ContentContainer>
                <JSApps />
            </ContentContainer>
        </Container>
    )
}