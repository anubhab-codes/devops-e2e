const fs = require('fs');
const path = require('path');

describe('Static website content', () => {
  const indexPath = path.join(__dirname, '..', 'src', 'index.html');
  let html = '';

  beforeAll(() => {
    html = fs.readFileSync(indexPath, 'utf8');
  });

  test('contains the page title', () => {
    expect(html).toMatch(/<title>DevOps E2E Website<\/title>/);
  });

  test('includes a hero heading', () => {
    expect(html).toMatch(/<h1.*>Welcome to DevOps E2E<\/h1>/);
  });

  test('mentions GitHub Actions artifact generation', () => {
    expect(html).toContain('GitHub Actions workflow');
  });
});
