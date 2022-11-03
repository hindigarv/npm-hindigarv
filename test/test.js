import assert  from 'assert';
import HindiGarv from "../src/index.js"

describe('HindiGarv', function () {
  describe('#find()', function () {
    it('should find foreign words from string', function () {
      const words = HindiGarv.find("गजब है पटाके बेन करवाने वाला लक्ष्मी पूजा का मुहूर्त बता रहा है......");
      assert.strictEqual(words.length, 1);
      assert.strictEqual(words[0].shabda, "गजब");
    });
  });
});