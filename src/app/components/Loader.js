import React, { Component } from "react";
import styled from "styled-components/";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
    display: ${props => (props.show) ? 'block' : 'none'};
    background: rgba(255,255,255,.7);
    z-index: 1000000;
`;

const LoaderBlock = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
`;

const LoadingCube = styled.div`
    width: 33%;
    height: 33%;
    background-color: #333;
    float: left;
    animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
    animation-delay: ${props => props.delay};
`;

class Loader extends Component {
    render() {

        const { show } = this.props;

        return (
            <Container show={show}>
                <LoaderBlock>
                    <LoadingCube delay={"0.2s"} />
                    <LoadingCube delay={"0.3s"} />
                    <LoadingCube delay={"0.4s"} />
                    <LoadingCube delay={"0.1s"} />
                    <LoadingCube delay={"0.2s"} />
                    <LoadingCube delay={"0.3s"} />
                    <LoadingCube delay={"0s"} />
                    <LoadingCube delay={"0.1s"} />
                    <LoadingCube delay={"0.2s"} />
                </LoaderBlock>
            </Container>
        );
    }
}

export default Loader;