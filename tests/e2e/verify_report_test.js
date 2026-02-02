import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe.only('HTML Reporter E2E', () => {
  const reportPath = path.join(__dirname, 'output', 'report.html');

  it('should generate HTML report file', () => {
    expect(fs.existsSync(reportPath)).to.be.true;
  });

  it('should contain test results', () => {
    const html = fs.readFileSync(reportPath, 'utf8');
    expect(html).to.include('Sample API Tests');
    expect(html).to.include('Passing test');
    expect(html).to.include('Failing test');
  });

  it('should show test statistics', () => {
    const html = fs.readFileSync(reportPath, 'utf8');
    expect(html).to.match(/passed|failed|skipped/i);
  });
});
