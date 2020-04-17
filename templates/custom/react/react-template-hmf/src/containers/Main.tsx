import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import About from '../views/About';
import Dashboard from '../views/Dashboard';

export default function Main() {
    return (
        <Container>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/dashboard'>
                    <Dashboard />
                </Route>
            </Switch>
        </Container>
    );
}

const Container = styled.main`
    grid-area: main;
`;
