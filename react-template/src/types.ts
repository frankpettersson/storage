import React from 'react';

export interface IRoute {
    path: string;
    component: () => JSX.Element;
    routes?: [];
}
