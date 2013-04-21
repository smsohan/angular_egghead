describe('filter', function(){

  beforeEach(module('myApp'));

  describe('reverse', function(){

    it('reverses a string', inject(function(reverseFilter){

      expect(reverseFilter('ABCD')).toEqual('DCBA');

    }));

  });


});