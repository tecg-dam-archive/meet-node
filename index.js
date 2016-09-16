/* hepl-ria/meet-node
*
* /index.js -main entry point
* coded by DS
* started at
*/

"use strict";

var chalk = require( "chalk" ),//on lui dit qu'on va utiliser chalk
    path = require ( "path" ),
    fs = require ( "fs" ),
    humanSize = require( "human-size" ),
    sha1 = require ( "sha1" );

var sFileName, sFilePath, fShowError;

fShowError = function( sErrorMessage) {

  console.log( chalk.red.bold.underline("✘ Error:"), sErrorMessage );
  process.exit( 1 ); // arrete le programme avec une erreur

}


if (!(sFileName = process.argv[ 2 ])) {
  fShowError( "You need to give a file as argument" );
}

sFilePath = path.resolve( process.cwd(), sFileName); //pour savoir le chemin du fichier

fs.stat( sFilePath, function( oError, oStats ){
  var aLogLines = [];

  if ( oError ){
    fShowError( oError.message );
  }

  if ( !oStats.isFile() ){
    fShowError( "The given path must be a file");
  }

  // name

  aLogLines.push( chalk.yellow.bold( sFileName ) );

  //size

  aLogLines.push( chalk.gray( "(" + humanSize( oStats.size) + ")" ));


  fs.readFile( sFilePath, "utf-8", function( oReadError, sData ){
    if ( oReadError ){
      fShowError( oReadError );
    }

    aLogLines.push( chalk.green.bold( "sum:" ) + " " + sha1( sData ));

    console.log( aLogLines.join( " " )); // on joint les éléments et on les separe par des espace

  } ); //pour accéder au contenu du fichier on lui passe le chemin, l'encodage et le callback
});
