import { NAV_KEYS } from '../../src/components/JayFormatter/utils';
import { convertText } from '../../src/components/JayFormatter/utils/convertText';

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

  describe('header formatting', () => {
    const MOCK_ALL_URL = 'mock-all-url';
    const MOCK_PREV_URL = 'mock-prev-url';
    const MOCK_NEXT_URL = 'mock-next-url';

    it('formats header when all values are provided', () => {
      nav = {
        [NAV_KEYS.ALL_URL]: MOCK_ALL_URL,
        [NAV_KEYS.PREV_URL]: MOCK_PREV_URL,
        [NAV_KEYS.NEXT_URL]: MOCK_NEXT_URL,
      };

      const result = `<p>✦✦✦✦✦</p>
<p><a href="${MOCK_PREV_URL}">← prev</a> ✦ <a href="${MOCK_ALL_URL}">all</a> ✦ <a href="${MOCK_NEXT_URL}">next →</a></p>`;

      expect(convertText({ inputData, nav })).toMatch(result);
    });

    it('formats header when no previous is provided', () => {
      nav = {
        [NAV_KEYS.ALL_URL]: MOCK_ALL_URL,
        [NAV_KEYS.NEXT_URL]: MOCK_NEXT_URL,
      };

      const result = `<p>✦✦✦✦✦</p>
<p>✦ <a href="${MOCK_ALL_URL}">all</a> ✦ <a href="${MOCK_NEXT_URL}">next →</a></p>`;

      expect(convertText({ inputData, nav })).toMatch(result);
    });

    it('formats header when no next is provided', () => {
      nav = {
        [NAV_KEYS.ALL_URL]: MOCK_ALL_URL,
        [NAV_KEYS.PREV_URL]: MOCK_PREV_URL,
      };

      const result = `<p>✦✦✦✦✦</p>
<p><a href="${MOCK_PREV_URL}">← prev</a> ✦ <a href="${MOCK_ALL_URL}">all</a> ✦</p>`;

      expect(convertText({ inputData, nav })).toMatch(result);
    });

    it('formats header when no next or previous is provided', () => {
      nav = {
        [NAV_KEYS.ALL_URL]: MOCK_ALL_URL,
      };

      const result = `<p>✦✦✦✦✦</p>
<p>✦ <a href="${MOCK_ALL_URL}">all</a> ✦</p>`;

      expect(convertText({ inputData, nav })).toMatch(result);
    });
  });

  // describe('bold and italic text', () => {});
});
