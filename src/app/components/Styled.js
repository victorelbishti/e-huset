import styled from 'styled-components';

// background: ${props => (props.color) ? props.color : `linear-gradient(to right, #2c7dbc, #7cccc5)`};

export const size = {
    small: '425px',
    medium: '769px',
    large: '1170px'
};

export const colors = {
    light: '#7cccc5',
    dark:  '#2c7dbc',
    blueberry: '#6B7A8F',
    blueberry_light: '#53868f',
    apricot: '#F7882F',
    citrus: '#F7C331',
    apple: '#DCC7AA',
    fresh: '#4ABDAC',
    vermillion: '#FC4A1A',
    sunshine: '#F7B733',
    clean: '#DFDCE3'
};

export const Overlay = styled.div`
    position: absolute;
    background-image: linear-gradient(rgb(107,122,143) 15%, rgb(83,134,143) 70%);
    opacity: .5;
    height: ${props => (props.height == '0' || !props.height) ? '100vh' : props.height + 'px' };
    width: 100%;
    z-index: 1000;
    top: 0;
    left: 0;
`;

export const SectionDiv = styled.div`
    max-width: ${size.large};
    width: 100%;
    z-index: 1001;
    margin: 0 auto;
    position: relative;
    border-top: ${props => (props.border == "top") ? `2px solid #eee` : `0`};
    border-bottom: ${props => (props.border == "bottom") ? `2px solid #eee` : `0`};
    
    @media (max-width: ${size.small}) {
        margin: 20px 40px;
        ${props => props.responsive};
    }
    
    @media only screen and (max-width: ${size.large}) and (min-width: ${size.medium}) {
        padding: 0 40px;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 38px;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 1.2em;
    color: ${props => props.color};
    
    &:after {
        content: "";
        display: block;
        margin: 30px auto;
        width: 100px;
        height: 2px;
        background: ${props => (props.color) ? props.color : colors.citrus};
       
    }
    
    @media (max-width: ${size.small}) {
        font-size: 30px;
    }
`;

export const SectionSubTitle = styled.h3`
    font-size: 18px;
    letter-spacing: 2px;
    font-family: Proxima-Nova;
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
    align-items: ${props => props.align ? props.align : `center`};
    list-style: none;
    padding: 0;
    margin: 0;
    vertical-align: top;
    font-size: 0;
    
    @media (max-width: ${size.small}) {
        grid-template-columns: 1fr;
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

export const Package = styled.div`
    padding: 0 0 10px 0;
    text-align: center;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 0 0 0 transparent;
    transition: all 0.4s cubic-bezier(0.4, 0.25, 0, 1);
    width: 100%;
    height: 100%;
    position: relative;
    display: inline-block;
    font-size: 1.1rem;
    box-sizing: border-box;
    margin: 10px 0;
    
    &:hover {
        box-shadow: 0 0 20px 0px rgba(0,0,0,0.05);
    }
`;

export const ServiceCard = styled.div`
    background-color: transparent;
    position: relative;
    margin: .5rem 0 1rem 0;
    
    > div {
        padding: 10px 24px;
        border-radius: 0 0 2px 2px;
        color: #fff;
        
        p {
            font-family: Proxima-Nova-Light;
        }
        
        span {
            display: block;
            font-size: 18px;
            font-weight: 900;
        }
        
        > div:first-of-type {
            display: block;
            height: 3em;
            
            @media (max-width: ${size.medium}) {
                text-align: left;
            }
                        
            svg { 
                fill: #fff; 
                margin: 0; 
                display: inline; 
                vertical-align: middle;
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

export const Link = styled.a`
    color: ${props => (props.color) ? props.color : `#333`};
    text-decoration: underline;
    font-family: Proxima-Nova-Bold;
    
    &:focus, &:hover {
        text-decoration: none;
    }
`;

export const Button = styled.button`
    width: 200px;
	background: ${colors.fresh};
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
        box-shadow: 0 0 0 2px white, 0 0 0 3px ${colors.fresh};
    }
`;

export const ReferenceCard = styled.div`
    background: transparent;
    padding: 65px 10px;
    width: 100%;
`;

export const CustomReferenceCard = styled(ReferenceCard)`
    background: #fff;
    padding: 0 40px;
`;

export const Container = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    position: relative;
    
    @media (max-width: ${size.small}) {
        margin: 0 20px;
    }
`;