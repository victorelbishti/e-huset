import styled from 'styled-components';

export const size = {
    small: '425px',
    medium: '769px',
    large: '1170px'
};

export const colors = {
    light: '#7cccc5',
    dark:  '#2c7dbc'
};

export const SectionDiv = styled.div`
    max-width: ${size.large};
    margin: 0 auto;
    position: relative;
    border-top: ${props => (props.border == "top") ? `2px solid #eee` : `0`};
    border-bottom: ${props => (props.border == "bottom") ? `2px solid #eee` : `0`};
    
    @media (max-width: ${size.small}) {
        margin: 20px 40px;
        ${props => props.responsive};
    }
    
    @media only screen and (max-width: ${size.medium}) and (min-width: ${size.small}) {
        margin: 0 40px;
    }
    
    @media only screen and (max-width: ${size.large}) and (min-width: ${size.medium}) {
        padding: 0 40px;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 42px;
    letter-spacing: 1px;
    line-height: 50px;
    color: ${props => props.color};
    
    &:after {
        content: "";
        display: block;
        margin: 30px auto;
        width: 100px;
        height: 2px;
        background: ${props => (props.color) ? props.color : `linear-gradient(to right, #2c7dbc, #7cccc5)`};
    }
`;

export const VerticalLine = styled.div`
    position: absolute;
    margin-top: 10px;
    top: 0;
    ${props => (props.side == 'right') ? `
        left: inherit;
        right: 0;
    ` : `
        left: 0;
        right: inherit;
    `}
    overflow: hidden;
    width: 2px;
    height: 100%;
    transform-origin: top;
    transition: all 1s cubic-bezier(0.4, 0.25, 0, 1) !important;
    ${props => (props.background == 'theme') ? `
    background-image: linear-gradient(-140deg, #2c7dbc 15%, #7cccc5 70%);` : 
    `background: ${props.background}; `}
    
    @media (max-width: ${size.small}) {
        ${props => props.responsive};
    }
    
    @media screen and (orientation:landscape)
    and (min-device-width: ${size.small}) 
    and (max-device-width: ${size.medium}) {
       display: none;
    }
`;

export const Grid = styled.div`
    display: -ms-grid;
    display: grid;
    grid-template-columns: ${props => props.columns ? props.columns : `1fr`};
    grid-gap: ${props => props.gap ? props.gap : `0`};
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    vertical-align: top;
    font-size: 0;
    
    @media (max-width: ${size.small}) {
        grid-template-columns: 1fr;
        grid-gap: 10px;
    }
    
    @media only screen and (max-width: ${size.medium}) and (min-width: ${size.small}) {
        grid-gap: 20px;
    }
    
    @media screen and (orientation:landscape)
    and (min-device-width: ${size.small}) 
    and (max-device-width: ${size.medium}) {
       grid-template-columns: 1fr;
    }
`;

export const GridCell = styled.div`
    width: 100%;
    padding: ${props => props.padding ? props.padding : `40px 0`};
    text-align: left;
    position: relative;
    display: inline-block;
    font-size: 1.1rem;
    box-sizing: border-box;
    text-align: ${props => (props.align) ? props.align : `left`};
    
    @media (max-width: ${size.small}) {
        padding: 20px 0;
        ${props => props.responsive};
    }
    
    @media screen and (orientation:landscape)
    and (min-device-width: ${size.small}) 
    and (max-device-width: ${size.medium}) {
       padding: 20px 0;
    }
`;

export const Card = styled.div`
    padding: 50px 20px;
    margin-bottom: 30px;
    text-align: center;
    border-radius: 3px;
    background-color: #ffffff;
    box-shadow: 0 0 0 0 transparent;
    transition: all 0.4s cubic-bezier(0.4, 0.25, 0, 1);
    
    &:hover {
        box-shadow: 0 0 20px 0px rgba(0,0,0,0.05);
    }
    
    @media only screen and (max-width: ${size.medium}) and (min-width: ${size.small}) {
        min-height: 600px;
    }
    
    @media only screen and (max-width: ${size.large}) and (min-width: ${size.medium}) {
        min-height: 550px;
    }
    
    @media screen and (orientation:landscape)
    and (min-device-width: ${size.small}) 
    and (max-device-width: ${size.medium}) {
       min-height: auto;
    }
`;

export const ServiceCard = styled.div`
    background-color: transparent;
    position: relative;
    margin: .5rem 0 1rem 0;
    
    > div {
        padding: 24px;
        border-radius: 0 0 2px 2px;
        color: #fff;
        
        > div:first-of-type {
            display: block;
            height: 3em;
            text-align: center;
                        
            svg { 
                fill: #fff; 
                margin: 0; 
                display: inline; 
                vertical-align: middle;
             }
            
            span {
                display: inline;
                margin-left: 15px;
            }
        }      
    }
`;

export const TitleArea = styled.div`
    max-width: 555px;
    margin: 0 auto;
    text-align: center;
`;

export const Subtitle = styled.h3`
    color: ${props => props.color};
    font-style: italic;
    letter-spacing: 2px;
`;


export const TextArea = styled.div`
    font-family: Proxima-Nova-Light;
    text-align: center;
    max-width: 768px;
    min-height: 170px;
    margin: 0 auto;
    
    ${props => (props.divider == 'theme') ? `
        &:after {
            content: "";
            display: block;
            margin: 30px auto;
            width: 100px;
            height: 2px;
            background: linear-gradient(to right,#2c7dbc,#7cccc5);
        }
    `: ``}    
`;

export const Section = styled.section`
    display: flex;
    align-items: center;
    padding: 0;
`;

export const WhiteLink = styled.a`
    color: #fff;
    text-decoration: underline;
    
    &:focus, &:hover {
        text-decoration: none;
    }
`;

export const Button = styled.button`
    width: 200px;
	background: #7cccc5;
	outline: none;
	font-weight: bold;
	font-size: 18px;
	color: white;
	border: 0 none;
	border-radius: 1px;
	cursor: pointer;
	padding: 10px 5px;
	margin: 10px 5px;
    font-family: Proxima-Nova-Light;
    
    &:focus, &:hover {
        box-shadow: 0 0 0 2px white, 0 0 0 3px #7cccc5;
    }
`;