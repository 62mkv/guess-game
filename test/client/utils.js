const assert = require('assert');
import { splitSeconds } from '../../client/utils';

describe('Utils', function() {
  describe('splitSeconds', function() {
    it('should return 0:00.0 for 0', function() {
        var pair = splitSeconds(0);
        assert.equal(pair.sec, '00.0');  assert.equal(pair.min, '0');
    });
    it('should return 0:59.0 for 59', function() {
        var pair = splitSeconds(59);
        assert.equal(pair.sec, '59.0'); assert.equal(pair.min, '0'); 
    });
    it('should return 1:00.0 for 60', function() {
        var pair = splitSeconds(60);
        assert.equal(pair.sec, '00.0'); assert.equal(pair.min, '1'); 
    });
    it('should return 0:01.5 for 1.5', function() {
        var pair = splitSeconds(1.5);
        assert.equal(pair.sec, '01.5'); assert.equal(pair.min, '0'); 
    });
  });
});
