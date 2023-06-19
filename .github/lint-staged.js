module.exports = {
  '*.{ts,tsx,js,jsx}': [
    'prettier --write',
    'npm run lint-es:file:fix',
    () => 'npm run test',
  ],
  '*.{vue,css,less,scss,html,htm,json,md,markdown,yml,yaml}':
    'prettier --write',
};
