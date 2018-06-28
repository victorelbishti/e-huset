import React, { Component } from "react";
import styled from "styled-components";
import { Grid, GridCell, TitleArea, SectionTitle, Container, size } from "../components/Styled";
import Icon from "../components/Icon";

// Images
import ScandinavianMeditationImage from "../images/scandinavian-meditation-multiscreens.png";
import EuManagementImage from "../images/eu-management.png";
import BosbecImage from "../images/bosbec-multiscreens.png";

const Section = styled.section`
    padding: 50px 0;
    
    @media (max-width: ${size.small}) {
        margin-bottom: 0;
    }
`;

const ReadMore = styled.a`
    color: #000;
    text-decoration: underline;
    
    &:hover {
        text-decoration: none;
    }
`;

const Image = styled.img`
    max-width: 100%;
    width: auto;
`;

const Wrapper = styled.div`
    width: 100%;
    display: block;
    position: relative;
    height: 100%;
    min-height: 455px;
    overflow: hidden;
    background: #e8e8e8;
    
    &:after { 
       content: " ";
       display: block; 
       height: 0; 
       clear: both;
    }
`;

const Item = styled.div`
    width: calc(100% - 40px);
    display: flex;
    align-items: center;
    margin: 20px;
    top: 0;
    position: ${props => (props.relative) ? `relative` : `absolute`};
    text-align: center;
    height: 100%;
    transition: all 1s;
    left: ${props => props.left};
`;

const NavContainer = styled.div`
    width: 100%;
`;

const NavItem = styled.div`
    position: absolute;
    z-index: 10;
    cursor: pointer;
    top: calc(50% - 19px);
    
    ${props => (props.direction == 'left') ? `
        left: 10px;
        svg {
            transform: rotate(270deg);
        }
    ` : `
        right: 10px;
        svg {
            transform: rotate(90deg);
        }
    `}
    
    @media (max-width: ${size.small}) {
        svg {
            width: 2em;
            height: 2em;
        }
    }
`;

const FadedBorder = styled.div`
    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.33, rgb(232,232,232)), color-stop(0.67, rgb(247,247,247)));
    padding: 70px;
`;

const FadedBorderReversed = styled(FadedBorder)`
    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.33, rgb(247,247,247)), color-stop(0.67, rgb(232,232,232)));
`;

const ItemTitle = styled.h2`
    line-height: 1.2em;

    @media (max-width: ${size.small}) {
        text-align: center;
    }
`;

const Text = styled.p`
    font-size: 20px;
    line-height: 1.5em;
    font-family: Proxima-Nova-Light;
`;

const DotNavigationWrapper = styled.div`
    margin: 0 auto;
    text-align: center;
`;

const List = styled.ul`
    position: relative;
	display: inline-block;
	margin: 0;
	padding: 0;
	list-style: none;
	cursor: default;
`;

const ListItem = styled.li`
    position: relative;
	display: block;
	float: left;
	margin: 0 16px;
	width: 16px;
	height: 16px;
	cursor: pointer;
`;

const Link = styled.a`
    top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	outline: none;
	border-radius: 50%;
	background-color: #fff;
	background-color: rgba(255,255,255,0.3);
	text-indent: -999em;
	cursor: pointer;
	position: absolute;
	overflow: hidden;
	background-color: rgba(0,0,0,0);
	box-shadow: inset 0 0 0 2px rgba(255,255,255,1);
	transition: background 0.3s;
	
	&:after {
        content: '';
        position: absolute;
        bottom: 0;
        height: ${props => (props.current) ? '100%' : '0'};
        left: 0;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 0 1px #fff;
        transition: height 0.3s;
	}
	
	&:hover, &:focus {
	    background-color: rgba(0,0,0,0.2);
    }
`;

const items = {
    0: {
        title: 'Bosbec',
        image: BosbecImage,
        link: 'http://bosbec.com/',
        text: `Bosbec utvecklar IT-lösningar som förenklar verksamheters olika affärsprocesser. 
                Deras lösningar hjälper idag stora välkända företag som Telia, Satmetrix, Ericsson och Apoteket.
                På deras hemsida presenterar de sina lösningar och sin vision med företaget.`
    },
    1: {
        title: 'Scandinavian Meditation',
        image: ScandinavianMeditationImage,
        link: 'https://scandinavianmeditation.com',
        text: `Scandinavian Meditation är en hemsida som ger verktyg för meditation, mindfulness och stresshantering.
                Vissa av verktygen, som ljudfiler med guidade meditationer, är begränsade till dess betalande användare medan
                andra verktyg för att förmedla tips och idéer, exempelvis bloggen, är öppen för alla besökare.`
    },
    2: {
        title: 'EU Management',
        image: EuManagementImage,
        link: 'http://eumanagement.se/',
        text: `Europe Fotball Management AB är en svensk fotbollsagentur som hjälper spelare i deras karriär. 
                EU Management fokuserar på att hjälpa spelare med marknadsföring, ekonomi och den legala aspekten 
                som berör alla proffesionella fotbollsspelare. Hemsidan är har en enkel och stilren design fylld med foton
                från deras arbete.`
    }
};

class Reference extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeItem: 0
        };

        this.updateActiveItem = this.updateActiveItem.bind(this);
    }

    updateActiveItem(value) {

        let index = this.state.activeItem;

        if (value < 0) {
            index = Object.keys(items).length - 1;
        } else if(value == Object.keys(items).length) {
            index = 0;
        } else {
            index = parseInt(value);
        }

        this.setState({activeItem: index});
    }

    render() {
        return (
            <Section id="reference">
                <TitleArea>
                    <SectionTitle>Tidigare projekt</SectionTitle>
                    <Text>Nedan visar vi ett axplock från ett antal responsiva hemsidor som vi tidigare
                        har arbetat med.</Text>
                </TitleArea>

                <Wrapper>
                    <FadedBorder />
                    <NavContainer>
                        <NavItem direction={'left'}onClick={ () => this.updateActiveItem(this.state.activeItem - 1) }>
                            <Icon size={"3em"} icon={"chevronUp"} />
                        </NavItem>
                        <NavItem direction={'right'} onClick={ () => this.updateActiveItem(this.state.activeItem + 1) }>
                            <Icon size={"3em"} icon={"chevronUp"} />
                        </NavItem>
                    </NavContainer>
                    {
                        Object.entries(items).map((item, i) => {
                            item = item[1];
                            // Calculates the percentage for the left value
                            let left = (((i+1) / (this.state.activeItem+1)) * 100 - 100) * (this.state.activeItem + 1);
                            let active = (i == this.state.activeItem) ? true : false;

                            return(
                                <Item relative={active} key={i} left={left + "%"}>
                                    <Container>
                                        <Grid columns={"1fr 1fr"}>
                                            <GridCell align={"center"} padding={"40px"}>
                                                <Image src={item.image} alt={item.title} />
                                            </GridCell>
                                            <GridCell>
                                                <ItemTitle>{item.title}</ItemTitle>
                                                <p>{item.text}</p>
                                                <ReadMore target={"_blank"} href={item.link}>Besök hemsida</ReadMore>
                                            </GridCell>
                                        </Grid>
                                    </Container>
                                </Item>
                            );
                        })
                    }

                    <DotNavigationWrapper>
                        <List>
                            {
                                Object.keys(items).map((index) => {

                                    return(
                                        <ListItem key={index}>
                                            <Link onClick={ () => this.updateActiveItem( index ) } current={(this.state.activeItem == index)}>{index}</Link>
                                        </ListItem>
                                    );
                                })
                            }
                        </List>
                    </DotNavigationWrapper>

                    <FadedBorderReversed />
                </Wrapper>
            </Section>
        );
    }
}

export default Reference;