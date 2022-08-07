import * as pen from './index.mjs'

console.log( pen.blue( `[Hello, ${ pen.bold( 'World' ) }!]` ) )

console.log(
	pen.reset( 'reset' ),
	pen.bold( 'bold' ),
	pen.italic( 'italic' ),
	pen.underline( 'underline' ),
	pen.inverse( 'inverse' ),
	'hidden[', pen.hidden( 'hidden' ), ']',
	pen.strike( 'strike' ),
	pen.gray( 'gray' ),
	pen.red( 'red' ),
	pen.green( 'green' ),
	pen.yellow( 'yellow' ),
	pen.blue( 'blue' ),
	pen.magenta( 'magenta' ),
	pen.cyan( 'cyan' ),
	pen.Red( ' Red ' ),
	pen.Green( ' Green ' ),
	pen.Yellow( ' Yellow ' ),
	pen.Blue( ' Blue ' ),
	pen.Magenta( ' Magenta ' ),
	pen.Cyan( ' Cyan ' ),
)
