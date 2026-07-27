// jest-dom adds custom jest matchers for asserting on DOM nodes.
import '@testing-library/jest-dom';

// react-router v7 requires TextEncoder/TextDecoder, which CRA's jsdom lacks.
const { TextEncoder, TextDecoder } = require('util');
if (!global.TextEncoder) global.TextEncoder = TextEncoder;
if (!global.TextDecoder) global.TextDecoder = TextDecoder;

// jsdom does not implement window.scrollTo; ScrollToTop calls it on route change.
window.scrollTo = jest.fn();
