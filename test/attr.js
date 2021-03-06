var test = require('tap').test;
var hyperglue = require('../');

var html = '<img class="a">';

test('add attr', function (t) {
    t.plan(1);
    
    var res = hyperglue(html, { 'img.a': { src: '/a.png' } }).innerHTML;
    
    t.ok(
        res === '<img class="a" src="/a.png">'
        || res === '<img src="/a.png" class="a">',
        'has both class and src: ' + res
    );
});

test('remove attr', function (t) {
    t.plan(2);
    
    var res = hyperglue(html, { 'img.a': { src: undefined } }).innerHTML;
    t.equal(res, '<img class="a">');
    
    res = hyperglue(html, { 'img.a': { src: null } }).innerHTML;
    t.equal(res, '<img class="a">');
});
