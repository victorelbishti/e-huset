
import styled from 'styled-components';

export const SectionDiv = styled.div`
    max-width: 1170px;
    margin: 0 auto;
`;

export const VerticalLine = styled.div`
    position: absolute;
    margin-top: 10px;
    top: 0;
    left: inherit;
    right: 0;
    overflow: hidden;
    width: 2px;
    height: 100%;
    transform-origin: top;
    transition: all 1s cubic-bezier(0.4, 0.25, 0, 1) !important;
    background-image: linear-gradient(-140deg, #2c7dbc 15%, #7cccc5 70%);
`;

export const Grid = styled.div`
    display: block;
    list-style: none;
    padding: 0;
    margin: 0;
    vertical-align: top;
    font-size: 0;
`;

export const OneHalfCell = styled.div`
    margin: 0;
    padding: 40px 0;
    text-align: left;
    position: relative;
    width: 50%;
    display: inline-block;
    font-size: 1.1rem;
    box-sizing: border-box;
    
    &:nth-child(1) {
        padding-right: 50px;
    }
    
    &:nth-child(2) {
        padding-left: 100px;
    }
`;

export const OneThridCell = styled.div`
    width: 33.3333%;
    padding-left: 55px;
    display: inline-block;
    font-size: 1rem;
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

export const CardImg = styled.div`
    
`;