import { NAV_KEYS } from '../../src/components/JayFormatter/utils';
import { convertText } from '../../src/components/JayFormatter/utils/convertText';

describe('convertText', () => {
  let inputData;
  let blockquoteData;
  let nav;
  let details;
  let characters;
  let jpProofreaders;
  let engProofreaders;
  let translators;

  beforeEach(() => {
    inputData = '';
    blockquoteData = '';
    nav = {};
    details = {};
    characters = [];
    jpProofreaders = [];
    engProofreaders = [];
    translators = [];
  });

  describe('basic dialogue formatting', () => {
    it('formats dialogue line while bolding names', () => {
      inputData = `<p>Makoto: Yeesh... It's been so hot lately, I've been sweating like a pig.</p>
<p>I wouldn't let myself sweat this much before...</p>
      `;

      const result = `<p><strong>Makoto:</strong> Yeesh... It's been so hot lately, I've been sweating like a pig.</p>
<p>I wouldn't let myself sweat this much before...</p>`;

      expect(
        convertText({
          inputData,
          blockquoteData,
          nav,
          details,
          characters,
          jpProofreaders,
          engProofreaders,
          translators,
        }),
      ).toMatch(result);
    });

    it('formats dialogue line that contains colon', () => {
      // TODO: I don't think there's a way to handle the colon being randomly after the first word
      // without keeping the list of valid names again
      inputData = `<p>Makoto: Yeesh... It's been so hot lately, I've been sweating like a pig.</p>
<p>I wouldn't let: myself sweat this much before...</p>
      `;

      const result = `<p><strong>Makoto:</strong> Yeesh... It's been so hot lately, I've been sweating like a pig.</p>
<p>I wouldn't let: myself sweat this much before...</p>`;

      expect(
        convertText({
          inputData,
          blockquoteData,
          nav,
          details,
          characters,
          jpProofreaders,
          engProofreaders,
          translators,
        }),
      ).toMatch(result);
    });

    it('formats dialogue line while preserving styling', () => {
      inputData = `<p>Makoto: Yeesh... <strong>It's been</strong> so hot lately, I've been sweating like a pig.</p>
<p>I wouldn't let myself <i>sweat</i> this much before...</p>
      `;

      const result = `<p><strong>Makoto:</strong> Yeesh... <strong>It's been</strong> so hot lately, I've been sweating like a pig.</p>
<p>I wouldn't let myself <i>sweat</i> this much before...</p>`;

      expect(
        convertText({
          inputData,
          blockquoteData,
          nav,
          details,
          characters,
          jpProofreaders,
          engProofreaders,
          translators,
        }),
      ).toMatch(result);
    });

    it("handles ara's formatting", () => {
      inputData = `<p>Jun: Heya, Team Snakey~ Looks like you've been hard at it ♪ How're you guys doing?</p>
<p>お～い『ヘビさんチーム』、お疲れ～っす♪　そっちの調子はどうですか？</p>
<p>Tomoya:</p>
<p>大丈夫か創、何かほんとに『お疲れ』って感じだな――グッタリしてないか？</p>
<p>Are you okay, Hajime? Rough morning, huh? You’re not gonna keel over, are you?</p>
<p>Nazuna:</p>
<p>ん～。巴は何だかんだでバラエティに慣れてるから、面白くするための『意図的な失敗』以外は完璧にやり遂げてたけど</p>
<p>Mmm. Tomoe seems used to variety shows, one way or another, so he pulled things off without a hitch; save for the times he screwed up on purpose to make things funnier.</p>
<p>Nazuna:</p>
<p>おれも噛まないように～って意識するのには慣れてたりするし、けっこう早めに順応できたな</p>
<p>And I’m used to forcing myself to pay attention when I speak so that I don’t slur my words, so I managed to adapt pretty quickly too.</p>
<p>Mitsuru:</p>
<p>あはは。同じ『指令』でも、それぞれ対処方法が違うっぽいのが面白いぜ</p>
<p>Ahaha. We all got the same order but it looks like we all had different strategies for dealing with it! That’s awesome!</p>`;

      const result = `<p><strong>Jun:</strong> Heya, Team Snakey~ Looks like you've been hard at it ♪ How're you guys doing?</p>
<p><strong>Tomoya:</strong> Are you okay, Hajime? Rough morning, huh? You’re not gonna keel over, are you?</p>
<p><strong>Nazuna:</strong> Mmm. Tomoe seems used to variety shows, one way or another, so he pulled things off without a hitch; save for the times he screwed up on purpose to make things funnier.</p>
<p>And I’m used to forcing myself to pay attention when I speak so that I don’t slur my words, so I managed to adapt pretty quickly too.</p>
<p><strong>Mitsuru:</strong> Ahaha. We all got the same order but it looks like we all had different strategies for dealing with it! That’s awesome!</p>`;

      expect(
        convertText({
          inputData,
          blockquoteData,
          nav,
          details,
          characters,
          jpProofreaders,
          engProofreaders,
          translators,
        }),
      ).toMatch(result);
    });

    it.skip('handles mid-chapter headings', () => {});
  });

  describe('footer formatting', () => {
    const MOCK_ALL_URL = 'mock-all-url';
    const MOCK_PREV_URL = 'mock-prev-url';
    const MOCK_NEXT_URL = 'mock-next-url';

    it('formats footer when all values are provided', () => {
      nav = {
        [NAV_KEYS.ALL_URL]: MOCK_ALL_URL,
        [NAV_KEYS.PREV_URL]: MOCK_PREV_URL,
        [NAV_KEYS.NEXT_URL]: MOCK_NEXT_URL,
      };

      const result = `<p>✦✦✦✦✦</p>
<p><a href="${MOCK_PREV_URL}">← prev</a> ✦ <a href="${MOCK_ALL_URL}">all</a> ✦ <a href="${MOCK_NEXT_URL}">next →</a></p>`;

      expect(
        convertText({
          inputData,
          blockquoteData,
          nav,
          details,
          characters,
          jpProofreaders,
          engProofreaders,
          translators,
        }),
      ).toMatch(result);
    });

    it('formats footer when no previous is provided', () => {
      nav = {
        [NAV_KEYS.ALL_URL]: MOCK_ALL_URL,
        [NAV_KEYS.NEXT_URL]: MOCK_NEXT_URL,
      };

      const result = `<p>✦✦✦✦✦</p>
<p>✦ <a href="${MOCK_ALL_URL}">all</a> ✦ <a href="${MOCK_NEXT_URL}">next →</a></p>`;

      expect(
        convertText({
          inputData,
          blockquoteData,
          nav,
          details,
          characters,
          jpProofreaders,
          engProofreaders,
          translators,
        }),
      ).toMatch(result);
    });

    it('formats footer when no next is provided', () => {
      nav = {
        [NAV_KEYS.ALL_URL]: MOCK_ALL_URL,
        [NAV_KEYS.PREV_URL]: MOCK_PREV_URL,
      };

      const result = `<p>✦✦✦✦✦</p>
<p><a href="${MOCK_PREV_URL}">← prev</a> ✦ <a href="${MOCK_ALL_URL}">all</a> ✦</p>`;

      expect(
        convertText({
          inputData,
          blockquoteData,
          nav,
          details,
          characters,
          jpProofreaders,
          engProofreaders,
          translators,
        }),
      ).toMatch(result);
    });

    it('formats footer when no next or previous is provided', () => {
      nav = {
        [NAV_KEYS.ALL_URL]: MOCK_ALL_URL,
      };

      const result = `<p>✦✦✦✦✦</p>
<p>✦ <a href="${MOCK_ALL_URL}">all</a> ✦</p>`;

      expect(
        convertText({
          inputData,
          blockquoteData,
          nav,
          details,
          characters,
          jpProofreaders,
          engProofreaders,
          translators,
        }),
      ).toMatch(result);
    });
  });

  describe('japanese text', () => {
    // Assume that if the line contains any JP text at all that it should be removed

    it('removes japanese text lines', () => {
      // The line here starts with some dash-looking character,
      // But I don't want to add a very specific dash to the regex lol
      inputData = `<p>Jun: — Huh? You mean we're going to separate places?</p>
<p>――え？　それじゃあ茨はオレとは別の現場ってことなんすか？</p>`;

      expect(
        convertText({
          inputData,
          blockquoteData,
          nav,
          details,
          characters,
          jpProofreaders,
          engProofreaders,
          translators,
        }),
      ).toEqual(expect.not.stringContaining('――え？'));

      inputData = `<p>Jun: What's up with this car pulling up next to us?</p>
<p>何でこの車、オレたちに横付けするんですかね</p>？`;

      expect(
        convertText({
          inputData,
          blockquoteData,
          nav,
          details,
          characters,
          jpProofreaders,
          engProofreaders,
          translators,
        }),
      ).toEqual(expect.not.stringContaining('何でこの車'));
    });
  });
});
