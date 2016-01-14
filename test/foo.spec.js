var expect = require('chai').expect;

var Foo = require('../foo');

describe('Foo', function(){
  it('exists', function(){
    expect(Foo).to.be.ok;
  });

  describe('calling foo', function(){
    describe('with bar', function(){
      var result;
      beforeEach(function(){
        result = Foo('bar');
      });
      it('returns BAR', function(){
        expect(result).to.eq('BAR');
      })
    
    });
  
  });
});
