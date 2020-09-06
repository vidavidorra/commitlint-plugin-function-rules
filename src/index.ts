import Plugin from './plugin';
import rules from './rules';

const plugin: Plugin = {
  rules,
};

/**
 * Export single object, according to the CommonJS model. The CommonJS module is
 * explicitly used here as that's the kind of module commitlint requires for
 * plugins.
 */
export = plugin;
