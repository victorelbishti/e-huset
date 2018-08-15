import React, { Component } from "react";
import AOS from "aos";
import Scroll from "smoothscroll";
import Icon from "../components/Icon";
import styled from "styled-components";
import { SectionDiv, Grid, Package, Button, Link, size, colors } from "../components/Styled";

const Section = styled.section`
    padding: 70px 0 100px 0;
    
    @media (max-width: ${size.medium}) {
        margin: 20px 40px;
        padding: 0;
    }
`;

const GradientPrice = styled.h3`
    font-size: 42px;
    color: ${colors.blueberry_light};
    margin-bottom: 10px;
    line-height: 1em;
    font-family: Proxima-Nova-Light;
    background: linear-gradient(to bottom right, ${colors.blueberry}, ${colors.blueberry_light});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const GradientText = styled.h6`
    font-size: 18px;
    color: ${colors.fresh};
    margin: 0 0 20px 0;
    line-height: 1em;
    font-family: Proxima-Nova;
    background: linear-gradient(to bottom right, ${colors.blueberry}, ${colors.blueberry_light});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Price = styled.h3`
    font-size: 42px;
    margin: 30px 0 10px 0;
    color: #fff;
    font-family: Proxima-Nova-Light;
`;

const RecurringPrice = styled.h4`
    font-size: 18px;
    color: #fff;
    margin: 0 0 20px 0;
    font-family: Proxima-Nova;
`;

const PackageDetails = styled.div`
    background: ${colors.fresh};
    padding: 20px 10px;
    border-radius: 3px;
    color: #fff;
`;

const PackageName = styled.div`
    background: ${colors.light};
    padding: 20px 10px;
    border-radius: 3px;
`;

const List = styled.ul`
    list-style: none;
`;

const ListItem = styled.li`
    border-bottom: 1px solid #eaeaea;
    padding: 10px 0;
    
    &:nth-child(even) {
        background: #fafafa;
    }
    
    svg {
        display: inline;
        vertical-align: text-bottom;
        margin: 0 25px 0 20px;
    }
`;

const DisabledItem = styled.span`
    color: #c2c2c2;
    text-decoration: line-through;
`;

const PackageDescription = styled.div`
    padding: 0 20px;
`;

class Packages extends Component {

    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    componentDidMount(){
        AOS.init();
    }

    componentWillReceiveProps (){
        AOS.refresh();
    }

    handleButtonClick(elementName) {
        let element = document.querySelector('#' + elementName);
        let offset = element.offsetTop - 100;
        Scroll(offset, 1000);
    }

    render() {
        return (
            <Section id={"packages"}>
                <SectionDiv responsive={"margin: 20px 0"}>
                    <Grid columns={"repeat(auto-fill,minmax(270px,1fr))"} gap={"40px"}>
                        <Package data-aos={"zoom-in"} data-aos-duration={"600"}>
                            <PackageDetails>
                                <PackageName>
                                    <h2>Webbplats - Basic</h2>
                                </PackageName>
                                <Price>9 995 kr</Price>
                                <RecurringPrice>Underhåll: 595 kr/månad</RecurringPrice>
                            </PackageDetails>

                            <List>
                                <ListItem>
                                    <span>6 månader gratis <Link href={"#"} onClick={ () => this.handleButtonClick('services') }>underhåll</Link>
                                    </span>
                                </ListItem>
                                <ListItem>
                                    <span>Skräddarsydd design</span>
                                </ListItem>
                                <ListItem>
                                    <span>Responsiv / mobilanpassad</span>
                                </ListItem>
                                <ListItem>
                                    <span>Telefon- & mailsupport</span>
                                </ListItem>
                                <ListItem>
                                    <span>Uppdatering av programvara</span>
                                </ListItem>
                                <ListItem>
                                    <span>Säkerhetskopiering & -kontroll</span>
                                </ListItem>
                                <ListItem>
                                    <span>One-pager</span>
                                </ListItem>
                                <ListItem>
                                    <DisabledItem>Sökoptimering (SEO)</DisabledItem>
                                </ListItem>
                                <ListItem>
                                    <DisabledItem>Besöksstatistik</DisabledItem>
                                </ListItem>
                                <ListItem>
                                    <DisabledItem>Fri & säker hosting</DisabledItem>
                                </ListItem>
                                <ListItem>
                                    <DisabledItem>SSL-certifikat (HTTPS)</DisabledItem>
                                </ListItem>
                                <ListItem>
                                    <span>Nöjd-kund-garanti</span>
                                </ListItem>
                            </List>
                            <Button onClick={ () => this.handleButtonClick('contact') }>Beställ nu</Button>
                        </Package>
                        <Package data-aos={"zoom-in"} data-aos-duration={"600"}>

                            <PackageDetails>
                                <PackageName>
                                    <h2>Webbplats - Pro</h2>
                                </PackageName>
                                <Price>14 995 kr</Price>
                                <RecurringPrice>Underhåll: 795 kr/månad</RecurringPrice>
                            </PackageDetails>

                            <List>
                                <ListItem>
                                    <span>1 år gratis <Link href={"#"} onClick={ () => this.handleButtonClick('services') }>underhåll</Link>
                                    </span>
                                </ListItem>
                                <ListItem>
                                    <span>Skräddarsydd design</span>
                                </ListItem>
                                <ListItem>
                                    <span>Responsiv / mobilanpassad</span>
                                </ListItem>
                                <ListItem>
                                    <span>Telefon- & mailsupport</span>
                                </ListItem>
                                <ListItem>
                                    <span>Uppdatering av programvara</span>
                                </ListItem>
                                <ListItem>
                                    <span>Säkerhetskopiering & -kontroll</span>
                                </ListItem>
                                <ListItem>
                                    <span>1-10 undersidor</span>
                                </ListItem>
                                <ListItem>
                                    <span>Sökoptimering (SEO)</span>
                                </ListItem>
                                <ListItem>
                                    <span>Besöksstatistik</span>
                                </ListItem>
                                <ListItem>
                                    <span>Fri & säker hosting</span>
                                </ListItem>
                                <ListItem>
                                    <span>SSL-certifikat (HTTPS)</span>
                                </ListItem>
                                <ListItem>
                                    <span>Nöjd-kund-garanti</span>
                                </ListItem>
                            </List>
                            <Button onClick={ () => this.handleButtonClick('contact') }>Beställ nu</Button>
                        </Package>
                        <Package data-aos={"zoom-in"} data-aos-duration={"600"}>

                            <PackageDetails>
                                <PackageName>
                                    <h2>Webbplats - Anpassad</h2>
                                </PackageName>
                                <Price>Offert</Price>
                                <RecurringPrice>efter överenskommelse</RecurringPrice>
                            </PackageDetails>

                            <List>
                                <ListItem>
                                    <span>Responsiv / mobilanpassad</span>
                                </ListItem>
                                <ListItem>
                                    <span>Skräddarsydd design</span>
                                </ListItem>
                                <ListItem>
                                    <span>Telefon- & mailsupport</span>
                                </ListItem>
                                <ListItem>
                                    <span>Uppdatering av programvara</span>
                                </ListItem>
                                <ListItem>
                                    <span>Sökoptimering (SEO)</span>
                                </ListItem>
                                <ListItem>
                                    <span>Besöksstatistik</span>
                                </ListItem>
                                <ListItem>
                                    <span>Fri & säker hosting</span>
                                </ListItem>
                                <ListItem>
                                    <span>SSL-certifikat (HTTPS)</span>
                                </ListItem>
                                <ListItem>
                                    <span>Nöjd-kund-garanti</span>
                                </ListItem>
                            </List>
                            <PackageDescription>
                                <p>Skräddarsydd hemsida helt enligt dina villkor. Vill du ha en webbutik eller specifika användarfunktioner för dina besökare? Inga problem, förklara vad du behöver så fixar vi det åt dig.</p>
                            </PackageDescription>
                            <Button onClick={ () => this.handleButtonClick('contact') }>Beställ nu</Button>
                        </Package>
                    </Grid>
                </SectionDiv>
            </Section>
        );
    }
}

export default Packages;