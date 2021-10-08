import convertText from '../../src/components/JayFormatter/utils/convertText';

describe('convertText', () => {
  let inputData;
  let nav;

  beforeEach(() => {
    inputData = '';
    nav = {};
  });

  describe('basic dialogue formatting', () => {
    it('formats dialogue line while bolding names', () => {
      inputData = `<p>Makoto: Yeesh... It's been so hot lately, I've been sweating like a pig.</p>
<p>I wouldn't let myself sweat this much before...</p>
      `;

      const result = `<p><strong>Makoto:</strong> Yeesh... It's been so hot lately, I've been sweating like a pig.</p>
<p>I wouldn't let myself sweat this much before...</p>`;

      expect(convertText({ inputData, nav })).toMatch(result);
    });

    it('formats dialogue line that contains colon', () => {
      // TODO: I don't think there's a way to handle the colon being randomly after the first word
      // without keeping the list of valid names again
      inputData = `<p>Makoto: Yeesh... It's been so hot lately, I've been sweating like a pig.</p>
<p>I wouldn't let: myself sweat this much before...</p>
      `;

      const result = `<p><strong>Makoto:</strong> Yeesh... It's been so hot lately, I've been sweating like a pig.</p>
<p>I wouldn't let: myself sweat this much before...</p>`;

      expect(convertText({ inputData, nav })).toMatch(result);
    });

    it('formats dialogue line while preserving styling', () => {
      inputData = `<p>Makoto: Yeesh... <strong>It's been</strong> so hot lately, I've been sweating like a pig.</p>
<p>I wouldn't let myself <i>sweat</i> this much before...</p>
      `;

      const result = `<p><strong>Makoto:</strong> Yeesh... <strong>It's been</strong> so hot lately, I've been sweating like a pig.</p>
<p>I wouldn't let myself <i>sweat</i> this much before...</p>`;

      expect(convertText({ inputData, nav })).toMatch(result);
    });

    it.skip('handles mid-chapter headings', () => {});
  });

  // describe('post header formatting', () => {});

  // describe('bold and italic text', () => {});
});
