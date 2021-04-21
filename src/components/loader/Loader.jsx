import React from 'react'
import styled from '@emotion/styled'
import './loader.css';

const widtheight = '100%';

const LoaderDiv = styled.div`
    position: absolute;
    width: ${widtheight};
    height: ${widtheight};
    background-color: #E5E7EB;
    opacity: ${
        props => props.load ? 1 : 0
    };
`;

const Loader = ({load}) => {

    return (
        <LoaderDiv className="lds-ring inset-0" load={load}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </LoaderDiv>
    )
}

export default Loader
