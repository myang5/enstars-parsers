import convertText from '../../src/components/MashiroFormatter/utils/convertText';

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
});
