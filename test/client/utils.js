const assert = require('assert');
import { splitSeconds } from '../../client/utils';

describe('Utils', function() {
  describe('splitSeconds', function() {
    it('should return 0:00 for 0', function() {
        var pair = splitSeconds(0);
        assert.equal(pair.sec, '00');  assert.equal(pair.min, '0');
    });
    it('should return 0:59 for 59', function() {
        var pair = splitSeconds(59);
        assert.equal(pair.sec, '59'); assert.equal(pair.min, '0'); 
    });
    it('should return 1:00 for 60', function() {
        var pair = splitSeconds(60);
        assert.equal(pair.sec, '00'); assert.equal(pair.min, '1'); 
    });
  });
});
