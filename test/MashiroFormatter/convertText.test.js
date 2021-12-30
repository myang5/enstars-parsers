import { convertText } from '../../src/components/MashiroFormatter/utils/convertText';

describe('convertText', () => {
  let inputData;
  let nav;

  beforeEach(() => {
    inputData = '';
    nav = {};
  });

  describe('mid-dialogue images and notes', () => {
    const mockImageValue = 'mock-image';
    const mockLocationValue = 'mock-location';

    it("handles non-dialogue lines in between two characters' dialogue", () => {
      inputData = `
      <p>Natsume: HoweVER. Within a game where everything is proGRAMMED</p>
      <p>In this world where everything obeys my every comMAND</p>
      <p>Image: ${mockImageValue}</p>
      <p>Location: ${mockLocationValue}/p>
      <p>Tsumugi: And I will give everyone an equal opportunity</p>
      <p>—Welcome to paradise, my idols♪</p>
      `;

      const result = `{% bubble Natsume %}
HoweVER. Within a game where everything is proGRAMMED

In this world where everything obeys my every comMAND
{% endbubble %}

{% img ${mockImageValue} %}

{% note location %}
**Location:** ${mockLocationValue}/p>
{% endnote %}

{% bubble Tsumugi %}
And I will give everyone an equal opportunity

—Welcome to paradise, my idols♪
{% endbubble %}`;

      expect(convertText({ inputData, nav })).toMatch(result);
    });
    it("handles non-dialogue lines in the middle of one character's dialogue lines", () => {
      inputData = `
      <p>Natsume: HoweVER. Within a game where everything is proGRAMMED</p>
      <p>In this world where everything obeys my every comMAND</p>
      <p>Image: ${mockImageValue}</p>
      <p>Location: ${mockLocationValue}/p>
      <p>And I will give everyone an equal opportunity</p>
      <p>—Welcome to paradise, my idols♪</p>
      `;

      const result = `{% bubble Natsume %}
HoweVER. Within a game where everything is proGRAMMED

In this world where everything obeys my every comMAND
{% endbubble %}

{% img ${mockImageValue} %}

{% note location %}
**Location:** ${mockLocationValue}/p>
{% endnote %}

{% bubble Natsume %}
And I will give everyone an equal opportunity

—Welcome to paradise, my idols♪
{% endbubble %}`;

      expect(convertText({ inputData, nav })).toMatch(result);
    });
  });

  describe('bold and italic text', () => {
    it('handles the usual formatting', () => {
      inputData = `<p>Natsume: HoweVER. <i>Within</i> a game where <strong>everything</strong> is proGRAMMED</p>`;
      const result = `HoweVER. *Within* a game where **everything** is proGRAMMED`;
      expect(convertText({ inputData, nav })).toMatch(result);
    });

    it('handles mid-word styling', () => {
      inputData = `<p>Natsume: HoweVER. Wi<i>th</i>in a ga<i>me</i> where <i>every</i>thing is <i>proGRAMMED</i></p>`;
      let result = `HoweVER. Wi<em>th</em>in a ga<em>me</em> where <em>every</em>thing is *proGRAMMED*`;
      expect(convertText({ inputData, nav })).toMatch(result);

      inputData = `<p>Natsume: HoweVER. Wi<strong>th</strong>in a ga<strong>me</strong> where <strong>every</strong>thing is <strong>proGRAMMED</strong></p>`;
      result = `HoweVER. Wi<b>th</b>in a ga<b>me</b> where <b>every</b>thing is **proGRAMMED**`;
      expect(convertText({ inputData, nav })).toMatch(result);
    });

    it('extracts any spaces included in the styling', () => {
      inputData = `<p>Natsume: HoweVER.<i> Within a</i> <i>game</i> where <strong>everything </strong>is proGRAMMED</p>`;
      const result = `HoweVER. *Within a* *game* where **everything** is proGRAMMED`;
      expect(convertText({ inputData, nav })).toMatch(result);
    });

    it('handles labels and first words in dialogue lines being bolded', () => {
      // Colon and space are in <strong>
      inputData = `<p><strong>Midori, sigh: </strong>Sigh… Ughhh…</p>
<p><strong>Mmm~…</strong> What do I do now…? Sigh…</p>`;
      const result = `{% bubble Midori sigh %}
Sigh… Ughhh…

**Mmm~…** What do I do now…? Sigh…
{% endbubble %}`;
      expect(convertText({ inputData, nav })).toMatch(result);

      // Colon is in <strong>
      inputData = `<p><strong>Midori, sigh:</strong> Sigh… Ughhh…</p>
<p><strong>Mmm~…</strong> What do I do now…? Sigh…</p>`;
      expect(convertText({ inputData, nav })).toMatch(result);

      // Only name is in <strong>
      inputData = `<p><strong>Midori, sigh</strong>: Sigh… Ughhh…</p>
<p><strong>Mmm~…</strong> What do I do now…? Sigh…</p>`;
      expect(convertText({ inputData, nav })).toMatch(result);
    });

    it.skip('handles nested styling tags', () => {
      inputData = `<p>Natsume: HoweVER. <i>Within a game where <strong>everything</strong></i> is proGRAMMED</p>`;
      const result = ``; // TODO: what would the result even be lol
      expect(convertText({ inputData, nav })).toMatch(result);
    });
  });

  it('formats dialogue line that contains colon', () => {
    inputData = `<p>Makoto: Yeesh... It's been so hot lately, I've been sweating like a pig.</p>
<p>I wouldn't let: myself sweat this much before...</p>`;

    let result = `{% bubble Makoto %}
Yeesh... It's been so hot lately, I've been sweating like a pig.

I wouldn't let: myself sweat this much before...
{% endbubble %}`;

    expect(
      convertText({
        inputData,
        nav,
      }),
    ).toMatch(result);

    inputData = `<p>Makoto, hidden: Yeesh... It's been so hot lately, I've been sweating like a pig.</p>
<p>I wouldn't let: myself sweat this much before...</p>`;

    result = `{% bubble Makoto hidden %}
Yeesh... It's been so hot lately, I've been sweating like a pig.

I wouldn't let: myself sweat this much before...
{% endbubble %}`;

    expect(
      convertText({
        inputData,
        nav,
      }),
    ).toMatch(result);

    // IRL example where a line may contain a colon because of a link
    inputData = `<p>Chiaki: But what if the police were also, in some way, evil?</p>
<p>Let's take a moment to think on it! <ref>[http://ultra.wikia.com/wiki/Imitation_Ultras Imitation Ultras]</ref></p>`;

    result = `{% bubble Chiaki %}
But what if the police were also, in some way, evil?

Let's take a moment to think on it! <ref>[http://ultra.wikia.com/wiki/Imitation_Ultras Imitation Ultras]</ref>
{% endbubble %}`;

    expect(
      convertText({
        inputData,
        nav,
      }),
    ).toMatch(result);
  });

  it('handles lines with duplicate name labels', () => {
    inputData = `<p>Hiyori: a</p>
<p>Hiyori: b</p>
<p>Hiyori: c</p>
<p>Hiyori: d</p>`;

    let result = `{% bubble Hiyori %}
a

b

c

d
{% endbubble %}`;

    expect(
      convertText({
        inputData,
        nav,
      }),
    ).toMatch(result);
  });

  it('handles one-word lines', () => {
    inputData = `<p>Tori: S-so you noticed. You see, I was actually testing you!</p>
<p>Gyaah!?</p>`;

    let result = `{% bubble Tori %}
S-so you noticed. You see, I was actually testing you!

Gyaah!?
{% endbubble %}`;

    expect(
      convertText({
        inputData,
        nav,
      }),
    ).toMatch(result);
  });
});
