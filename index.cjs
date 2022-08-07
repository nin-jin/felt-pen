exports.ansi = ( open, close )=> {

	if( !process.stdout.isTTY ) return String

	const prefix = `\x1b[${open}m`
	const postfix = `\x1b[${close}m`
	
	const suffix_regexp = new RegExp( postfix.replace( '[', '\\[' ), 'g' )

	return function colorer( str ) {

		str = String( str )
		if( str === '' ) return str

		const suffix = str.indexOf( postfix ) === -1
			? str
			: str.replace( suffix_regexp, prefix )

		return prefix + suffix + postfix

	}

}

exports.reset = exports.ansi( 0, 0 )
exports.bold = exports.ansi( 1, 22 )
exports.italic = exports.ansi( 3, 23 )
exports.underline = exports.ansi( 4, 24 )
exports.inverse = exports.ansi( 7, 27 )
exports.hidden = exports.ansi( 8, 28 )
exports.strike = exports.ansi( 9, 29 )

exports.gray = exports.ansi( 90, 39 )
exports.red = exports.ansi( 91, 39 )
exports.green = exports.ansi( 92, 39 )
exports.yellow = exports.ansi( 93, 39 )
exports.blue = exports.ansi( 94, 39 )
exports.magenta = exports.ansi( 95, 39 )
exports.cyan = exports.ansi( 96, 39 )

exports.Red = str => exports.inverse( exports.red( str ) )
exports.Green = str => exports.inverse( exports.green( str ) )
exports.Yellow = str => exports.inverse( exports.yellow( str ) )
exports.Blue = str => exports.inverse( exports.blue( str ) )
exports.Magenta = str => exports.inverse( exports.magenta( str ) )
exports.Cyan = str => exports.inverse( exports.cyan( str ) )
