import {plugin} from './plugin.js';

/**
 * Export single object, according to the CommonJS model. The CommonJS module is
 * explicitly used here as that's the kind of module commitlint requires for
 * shareable configurations. This project is an ES module for ease of
 * development, and thus requires the error for an export assignment to be
 * disabled.
 */
// @ts-expect-error TS1203
export = plugin;
