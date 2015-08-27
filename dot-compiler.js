var rendererObject = '\n/* Autogenerated!. */\n\n/* dot compiler start*/\n\nmodule.exports = {\n  render: [[RENDER_FUNCTION]]\n};\n\n/* dot compiler end*/';

module.exports = {
  compile: function ( str, name ) {
    var dot = require( 'dot' );

    var settings = dot.templateSettings || { };
    settings.strip = false;

    var dotFn = dot.template( str, settings );
    return rendererObject.replace( '[[RENDER_FUNCTION]]', dotFn.toString().replace( 'function anonymous', 'function ' + name ) );
  }
};