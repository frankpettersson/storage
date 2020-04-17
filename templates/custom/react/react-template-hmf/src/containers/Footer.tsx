import React from 'react';
import styled from 'styled-components';

export default function Footer() {
    return <Container></Container>;
}

const Container = styled.footer`
    grid-area: footer;
    padding: var(--base-spacing);
    background-color: var(--color-black-alpha-06);
`;
