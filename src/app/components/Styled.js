import styled from 'styled-components';

export const size = {
    small: '425px',
    medium: '768px',
    large: '1170px'
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
`;

export const SectionTitle = styled.h2`
    font-size: 42px;
    letter-spacing: 1px;
    
    &:after {
        content: "";
        display: block;
        margin: 30px auto;
        width: 100px;
        height: 2px;
        background: linear-gradient(to right, #2c7dbc, #7cccc5);
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
`;

export const Card = styled.div`
    min-height: 500px;
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
`;

export const TitleArea = styled.div`
    max-width: 555px;
    margin: 0 auto;
    text-align: center;
`;


export const TextArea = styled.div`
    font-family: Proxima-Nova-Light;
    text-align: center;
    max-width: 768px;
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