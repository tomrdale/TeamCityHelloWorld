var expect = require('chai').expect;
var request = require('request');

it('Main page content', function(){
  request('http://localhost:3000/', function(err, res, body) {
    expect(body).to.equal('<h1>WOW SUPER COOL WEBPAGE</h1>');
  });
});