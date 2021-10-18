import register from 'preact-custom-element';
import {Counter} from './counter.js';

register(Counter, 'x-counter', ['count']);
