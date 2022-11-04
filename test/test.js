import assert  from 'assert';
import HindiGarv from "../src/index.js"

describe('HindiGarv', function () {
  describe('should find foreign words', function () {
    it('from a string', function () {
      const words = HindiGarv.find("गजब है पटाके बेन करवाने वाला लक्ष्मी पूजा का मुहूर्त बता रहा है......");
      assert.strictEqual(words.length, 1);
      assert.strictEqual(words[0].shabda, "गजब");
    });

    it('using roops', function () {
      const words = HindiGarv.find("गजब है पटाके बेन करवाने वाला लक्ष्मी पूजा का मुहूर्त बता रहा है.... रंजिशें ..");
      assert.strictEqual(words.length, 2);
      assert.strictEqual(words[0].shabda, "गजब");
      assert.strictEqual(words[1].shabda, "रंजिश");
    });

    it('using regex', function () {
      const words = HindiGarv.find("गजब है पटाके बेन करवाने वाला लक्ष्मी पूजा का मुहूर्त बता रहा है.... रीपेैर ..");
      assert.strictEqual(words.length, 2);
      assert.strictEqual(words[0].shabda, "गजब");
      assert.strictEqual(words[1].shabda, "रिपैर्");
    });

  });
});