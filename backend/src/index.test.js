import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('index.html', () => {
  it('should have h1', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Welcome to this mock API page');
      window.close();
      done();
    });
  });
});
