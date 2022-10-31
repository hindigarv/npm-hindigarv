import assert  from 'assert';
import {} from "../src/nukta-remover.js";

describe('Nukta Remover', function () {
  describe('#removeNukta()', function () {
    it('should remove nukta from आज़ाद', function () {
      assert.equal("आज़ाद".removeNukta(), "आजाद");
    });
  });
});