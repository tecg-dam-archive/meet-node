/* hepl-ria/meet-node*/

"use strict";

var chalk = require( "chalk" ), // Importer un module ou un autre fichier.
    path = require ("path"), // Intégré à node, pour avoir le chemin de fichier peut importe le système
    fs = require ("fs"),
    humanSize = require("Human-size"),
    md5 = require("md5");

var sFileName, sFilePath, fShowError;

fShowError = function ( sErrorMessage ) {
  console.log( chalk.red.bold.underline( "✗ Error:" ), sErrorMessage );
  process.exit(1);   // Arrêter un programme en cours avec node. Si (1) = erreur, donc dans ce cas.

}

sFileName = process.argv[ 2 ]; // = nom du fichier exécuté
// Récup les paramètres qui sont passer à la console.
// 1. Renvoie le chemin d'ou se trouve node sur le système.
// 2. Renvoie le chemin du fichier
// 3. Renvoie le fichier exécuter.

if ( !(sFileName) ) {
  fShowError( " You need to give a file as argument! ");
}

sFilePath = path.resolve( process.cwd(), sFileName );

// console.log( "filename:", sFileName );
// console.log( "filepath:", sFilePath );

fs.stat( sFilePath, function( oError, oStats ){

  var aLogLines = [];

  if (oError) {
    fShowError( oError.message );
  }

  if (!oStats.isFile()) {
    fShowError( "The given path must be a file!" );
  }

  // Name
  aLogLines.push( chalk.yellow.bold( sFileName ) ) // Ajouter à la fin du tableau

  // size
  aLogLines.push( chalk.gray( "(" + humanSize( oStats.size ) + ")" ) );

  // console.log("stats:", oStats);
  // console.log("size:", humanSize( oStats.size ) );

  // console.log(crc32("Hello, world!"));

  fs.readFile( sFilePath, "utf-8", function( oReadError, sData )
  {
    if (oReadError) {
      fShowError( oReadError );
    }
    // console.log( crc32( sData) );

    aLogLines.push( chalk.green.bold ("sum:") + " " + md5( sData ) );

    console.log( aLogLines.join( " " )); 

  });

});
