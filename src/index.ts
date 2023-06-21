import {plugin} from './plugin.js';

/**
 * Export single object, according to the CommonJS model. The CommonJS module is
 * explicitly used here as that's the kind of module commitlint requires for
 * plugins.
 */
// @ts-expect-error TS1203 Export assignment cannot be used when targeting
// ECMAScript modules. Consider using 'export default' or another module format
// instead.
export = plugin;
