import { 
    Container, 
    List, 
    ListTitle, 
    OrderList, 
    OrderListContainer, 
    ParagraphCard, 
    ParagraphContainer,

} from "./styles/projectsStyles"

export default function Projects(){
    return (
        <Container>
            <ParagraphContainer>
                <ParagraphCard>
                    One of my favorite hobbies is table top role playing games (RPGs).  I designed and built a React app hosted in Google's Firebase for my best friend and "Game Master" of a superhero vs monster game he created.
                </ParagraphCard>
                <ParagraphCard>
                   Hunter XO RPG site allows players to store and generate character sheets. Built in the character sheet is a "Dice" roller that when activated will automatically import the character's stats used in game play. There is a section for Journal for note keeping.  The game rules are also completely editable provided you have the permission set on your profile.  The site utilized Google's Firebase Authentication functions and methods.
                </ParagraphCard>
            </ParagraphContainer>
            <OrderListContainer>
                <ListTitle>Hunter XO</ListTitle>
                <OrderList>
                    <List>Authentication</List>
                    <List>User Profile</List>
                    <List>Character Creation</List>
                    <List>Dice Roller</List>
                    <List>Journal</List>
                    <List>Rules</List>
                </OrderList>
            </OrderListContainer>
        </Container>
    )
}