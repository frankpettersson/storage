import React from 'react';
import styled from 'styled-components';

interface ViewProp {
    children: {};
}

export default function View(prop: ViewProp) {
    return <Container>{prop.children}</Container>;
}

const Container = styled.div`
    grid-area: content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    padding: 20px;
`;
