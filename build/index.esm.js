import './index-590b6de4.js';
import { A as ActiveRouter } from './active-router-1568508f.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
