/* hepl-ria/meet-node
 *
 * /index.js - main entry point
 *
 * Coded by mucht@mathieuclaessens.be
 * started at 16/09/2016
*/

"use strict";

var chalk = require( "chalk" ),
    path = require( "path" ),
    fs = require( "fs" ),
    humanSize = require( "human-size" ),
    sha1 = require( "sha1" );

var sFileName,
    sFilePath,
    fShowErrors;

fShowErrors = function( sErrorMessage ) {
    console.log( chalk.red.bold( "✗ error:" ),sErrorMessage );
    process.exit( 1 );
}

sFileName = process.argv[ 2 ];

if ( !( sFileName = process.argv[ 2 ] ) ) {
    fShowErrors( "you need to give a file as argument !" );
}

sFilePath = path.resolve( process.cwd(), sFileName );

fs.stat( sFilePath, function( oError, oStats ) {

    var aLogLines = [];

    if ( oError ) {
        fShowErrors( oError.message );
    }

    if ( !oStats.isFile() ) {
        fShowErrors( "The given path must be a file !" )
    }

    // name
    aLogLines.push( chalk.blue.bold( sFileName ) );
    // size
    aLogLines.push( chalk.cyan( "(" + humanSize( oStats.size ) + ")" ) )

    fs.readFile( sFilePath, "utf8", function( oReadError, sData ) {
        if ( oReadError ) {
            fShowErrors( oReadError );
        }
        aLogLines.push( chalk.green.bold( "sum:" ) + " " + sha1( sData ) );

        console.log( aLogLines.join( " " ) );
    } );
} );
