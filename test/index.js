var tpl = require( './demo-of-a-template.tpl' );

var content = tpl.render();

console.log( tpl.render.toString() );
console.log( 'content', content );
