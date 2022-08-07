export function ansi( open, close ) {

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

export const reset = ansi( 0, 0 )
export const bold = ansi( 1, 22 )
export const italic = ansi( 3, 23 )
export const underline = ansi( 4, 24 )
export const inverse = ansi( 7, 27 )
export const hidden = ansi( 8, 28 )
export const strike = ansi( 9, 29 )

export const gray = ansi( 90, 39 )
export const red = ansi( 91, 39 )
export const green = ansi( 92, 39 )
export const yellow = ansi( 93, 39 )
export const blue = ansi( 94, 39 )
export const magenta = ansi( 95, 39 )
export const cyan = ansi( 96, 39 )

export const Red = str => inverse( red( str ) )
export const Green = str => inverse( green( str ) )
export const Yellow = str => inverse( yellow( str ) )
export const Blue = str => inverse( blue( str ) )
export const Magenta = str => inverse( magenta( str ) )
export const Cyan = str => inverse( cyan( str ) )
