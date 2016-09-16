/* meet-node - ES2015
 * Compute checksum of a file.
 *
 * started at 18/06/2016
 */

import chalk from "chalk";
import { resolve } from "path";
import { stat, readFile } from "fs";
import humanSize from "human-size";
import { calculate as crc32 } from "easy-crc32";

let sFileName, sFilePath,
    fShowError;

fShowError = function( sErrorMessage ) {
    console.log( chalk.red.bold.underline( "✘ error:" ), sErrorMessage ); // eslint-disable-line no-console
    process.exit( 1 );
};

( sFileName = process.argv[ 2 ] ) || fShowError( "You need to give a file as argument!" );

sFilePath = resolve( process.cwd(), sFileName );

stat( sFilePath, ( oError, oStats ) => {
    let aLogLines = [];

    oError && fShowError( oError.message );

    oStats.isFile() || fShowError( "The given path must be a file!" );

    // name
    aLogLines.push( chalk.yellow.bold( sFileName ) );

    // size
    aLogLines.push( chalk.gray( `(${ humanSize( oStats.size ) })` ) );

    // checksum
    readFile( sFilePath, "utf-8", ( oReadError, sData ) => {
        oReadError && fShowError( oReadError.message );

        aLogLines.push( `${ chalk.green.bold( "sum:" ) } ${ crc32( sData ) }` );

        console.log( ...aLogLines ); // eslint-disable-line no-console
    } );
} );
