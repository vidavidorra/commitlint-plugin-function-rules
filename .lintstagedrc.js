module.exports = {
  '*.{ts,tsx,js,jsx,json}': [
    'npm run format:file',
    'npm run lint-es:file:fix',
    'npm run test:staged',
  ],
  '*.{vue,css,less,scss,html,htm,md,markdown,yml,yaml}': [
    'npm run format:file',
  ],
};
