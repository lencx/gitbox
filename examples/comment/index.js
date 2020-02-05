const GitboxComment = require('../../packages/comment/dist/cjs').default;

window.addEventListener('load', () => {
  const comment = new GitboxComment({
    container: document.getElementById('root'),
    repo: 'xx',
    name: 'xxw',
  });
  comment.render();
  console.log('[3] index.js: ', comment);
});
