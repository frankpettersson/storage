import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/svg/logo.svg';

import MenuLink from '../components/MenuLink';

export default function Header() {
    return (
        <Container>
            <div className='wrapper'>
                <Logo className='logo' />
                <nav>
                    <MenuLink activeOnlyWhenExact={true} to='/' label='Home' />
                    <MenuLink to='/about' label='About' />
                    <MenuLink to='/dashboard' label='Dashboard' />
                </nav>
            </div>
        </Container>
    );
}

const Container = styled.header`
    grid-area: header;
    background-color: var(--color-black-alpha-06);

    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin: 0 auto;
        padding: 0 20px;

        .logo {
            max-height: var(--logo-size);
            max-width: var(--logo-size);
        }

        nav {
            height: var(--header-height);
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            @media only screen and (max-width: 500px) {
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-end;
            }

            a {
                font-size: 1.1rem;
                padding: 0 var(--base-spacing);
                text-transform: uppercase;
                text-decoration: none;
            }
        }
    }
`;
