
import styled from 'styled-components';

export const SectionDiv = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    position: relative;
    border-top: ${props => (props.border == "top") ? `2px solid #eee` : `0`};
    border-bottom: ${props => (props.border == "bottom") ? `2px solid #eee` : `0`};
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
`;

export const GridCell = styled.div`
    width: 100%;
    padding: ${props => props.padding ? props.padding : `40px 0`};
    text-align: left;
    position: relative;
    display: inline-block;
    font-size: 1.1rem;
    box-sizing: border-box;
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
`;