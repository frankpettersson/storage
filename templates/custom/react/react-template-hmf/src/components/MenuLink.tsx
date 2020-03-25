import React from 'react';
import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';

interface MenuLink {
    label: string;
    to: string;
    activeOnlyWhenExact?: boolean;
}

export default function MenuLink({ label, to, activeOnlyWhenExact }: MenuLink) {
    const match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact,
    });

    return (
        <StyledLink data-active={!!match} to={to}>
            {label}
        </StyledLink>
    );
}

const StyledLink = styled(Link)<{ 'data-active': boolean }>`
    color: ${prop => (prop['data-active'] ? 'var(--nav-link-color-active)' : 'var(--nav-link-color)')};
`;
