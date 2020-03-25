import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/Footer';

export default function App() {
    return (
        <>
            <ResetStyle />
            <GlobalStyle />
            <Router>
                <Header />
                <Main />
                <Footer />
            </Router>
        </>
    );
}

const GlobalStyle = createGlobalStyle`
    :root {
        --color-black-alpha-04: rgba(0,0,0,0.04);
        --color-black-alpha-06: rgba(0,0,0,0.06);
        --color-black-alpha-08: rgba(0,0,0,0.08);
        --color-black-alpha-10: rgba(0,0,0,0.1);
        --color-black-alpha-12: rgba(0,0,0,0.12);
        --color-black-alpha-14: rgba(0,0,0,0.14);
        --color-black-alpha-20: rgba(0,0,0,0.2);
        --color-black-alpha-26: rgba(0,0,0,0.26);
        --color-black-alpha-38: rgba(0,0,0,0.38);
        --color-black-alpha-40: rgba(0,0,0,0.4);
        --color-black-alpha-54: rgba(0,0,0,0.54);
        --color-black-alpha-70: rgba(0,0,0,0.7);
        --color-black-alpha-87: rgba(0,0,0,0.87);
        --color-black-alpha-95: rgba(0,0,0,0.95);

        --color-white-alpha-04: rgba(255,255,255,0.06);
        --color-white-alpha-12: rgba(255,255,255,0.12);
        --color-white-alpha-14: rgba(255,255,255,0.14);
        --color-white-alpha-15: rgba(255,255,255,0.15);
        --color-white-alpha-20: rgba(255,255,255,0.2);
        --color-white-alpha-30: rgba(255,255,255,0.3);
        --color-white-alpha-38: rgba(255,255,255,0.38);
        --color-white-alpha-50: rgba(255,255,255,0.5);
        --color-white-alpha-70: rgba(255,255,255,0.7);
        --color-white-alpha-87: rgba(255,255,255,0.87);
        --color-white-alpha-95: rgba(255,255,255,0.95);

        --color: #2c3e50;
        --font-size: 1rem;
        --font-weight: 400;

        --heading-color: #1b3a57;
        --heading-font-weight: 700;

        --h1-font-size: 3.7rem;
        --h2-font-size: 3.5rem;
        --h3-font-size: 3.2rem;
        --h4-font-size: 2.9rem;
        --h5-font-size: 2.7rem;
        --h6-font-size: 2.5rem;

        --nav-link-color: #476282;
        --nav-link-color-active: #1a73e8;
        --nav-link-font-size: 1.2rem;
        --nav-link-font-weight: 700;

        --text-color: rgba(0,0,0,.87);
        --text-font-size: 1rem;
        --text-font-weight: 400;

        --header-height: 4rem;
        --footer-height: 5rem;
        --base-spacing: 0.5rem;
        --logo-size: var(--header-height);
    }

    *, ::after, ::before { box-sizing: border-box; }

    html, body, #root {
        min-height: 100vh;
    }

    #root {
        display: grid;
        grid-template-areas: 
        ". header ."
        ". main   ."
        ". footer .";
        grid-template-rows: var(--header-height) auto var(--footer-height);
        margin: 0 auto;
        background-color: var(--color-black-alpha-04);
        color: var(--color);
        font-family: 'FiraCode', monospace;
        font-size: var(--font-size);
        font-weight: var(--font-weight);
        @supports (font-variation-settings: normal) {
            font-family: 'FiraCodeVariable', monospace;
            font-variation-settings: 'wght' var(--font-weight);
        }

        h1, h2, h3, h4, h5, h6 {
            color: var(--nav-link-color);
            font-weight: var(--heading-font-weight);
            @supports (font-variation-settings: normal) {
                font-variation-settings: 'wght' var(--heading-font-weight);
            }
        }

        h1 { font-size: var(--h1-font-size); }
        h2 { font-size: var(--h2-font-size); }
        h3 { font-size: var(--h3-font-size); }
        h4 { font-size: var(--h4-font-size); }
        h5 { font-size: var(--h5-font-size); }
        h6 { font-size: var(--h6-font-size); }

        a {
            font-size: var(--nav-link-font-size);
            font-weight: var(--nav-link-font-weight);
            @supports (font-variation-settings: normal) {
                font-variation-settings: 'wght' var(--nav-link-font-weight);
            }
        }

        p {
            color: var(--text-color);
            font-size: var(--text-font-size);
            font-weight: var(--text-font-weight);
            @supports (font-variation-settings: normal) {
                font-variation-settings: 'wght' var(--text-font-weight);
            }
        }
    }
`;

const ResetStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
    vertical-align: baseline;
    transition: all .2s;
}
:focus {
    outline: 0;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration {
    -webkit-appearance: none;
    -moz-appearance: none;
}
input[type=search] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
}
textarea {
    overflow: auto;
    vertical-align: top;
    resize: vertical;
}
audio,
canvas,
video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    max-width: 100%;
}
audio:not([controls]) {
    display: none;
    height: 0;
}
[hidden] {
    display: none;
}
html {
    font-size: 100%; 
    -webkit-text-size-adjust: 100%; 
    -ms-text-size-adjust: 100%; 
}
a:focus {
    outline: thin dotted;
}
a:active,
a:hover {
    outline: 0;
}
img {
    border: 0; 
    -ms-interpolation-mode: bicubic; 
}
figure {
    margin: 0;
}
form {
    margin: 0;
}
fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
}
legend {
    border: 0; 
    padding: 0;
    white-space: normal; 
    *margin-left: -7px; 
}
button,
input,
select,
textarea {
    font-size: 100%; 
    margin: 0; 
    vertical-align: baseline; 
    *vertical-align: middle; 
}
button,
input {
    line-height: normal;
}
button,
select {
    text-transform: none;
}
button,
html input[type="button"], 
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button; 
    cursor: pointer; 
    *overflow: visible;  
}
button[disabled],
html input[disabled] {
    cursor: default;
}
input[type="checkbox"],
input[type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
    *height: 13px; 
    *width: 13px; 
}
input[type="search"] {
    -webkit-appearance: textfield; 
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box; 
    box-sizing: content-box;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}
textarea {
    overflow: auto; 
    vertical-align: top; 
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
html,
button,
input,
select,
textarea {
    color: #222;
}
::-moz-selection {
    background: #b3d4fc;
    text-shadow: none;
}
::selection {
    background: #b3d4fc;
    text-shadow: none;
}
img {
    vertical-align: middle;
}
fieldset {
    border: 0;
    margin: 0;
    padding: 0;
}
textarea {
    resize: vertical;
}
.chromeframe {
    margin: 0.2em 0;
    background: #ccc;
    color: #000;
    padding: 0.2em 0;
}`;
