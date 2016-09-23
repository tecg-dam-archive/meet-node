/* hepl-ria meet-node
*	index.js
*	coded by Chris Jend.
*	started at 16/09/2016
*/


"use strict";
//importe le module 
var chalk = require("chalk"),
 path = require("path"), //fait partie de node pas besoin d'installter avec json
 fs = require("fs"), 
 humanSize = require("human-size"),
 crc32 = require("easy-crc32").calculate, //Calcule de redondance cyclique
 hash = require("object-hash"),
 sFileName,
	fShowError,
	sFilePath;
/*
	console.log(process.argv); permet de récupérer les paramètres passer en ligne de commande
 		2e dans le tab : script exécuter
		3eme le fichier
*/

	

//Met en place une erreur en rouge
	fShowError = function(sErrorMessage){
			console.log(chalk.red.bold.underline(" ✘ Error:"), sErrorMessage);
			process.exit( 1 );
	};

//Verfication qu'il y a bien un filename

	if (!(sFileName = process.argv[2])){
		fShowError(" You need to give a file as argument!");
		//Arrete le programme en cours si il y a pas de file

	}

	sFilePath = path.resolve( process.cwd(), sFileName); //Nous localise le fichier mais ne sait pas si le fichier existe vraiment

	fs.stat( sFilePath, function( oError, oStats){
		var aLogLines = [];

		if (oError){
			fShowError( oError.message );
		}
		if (!oStats.isFile() ){// SI c pas un fichier on affiche une erreur
			fShowError(" the given path isn't ok");
		}
		//Name
		aLogLines.push( chalk.yellow.bold(sFileName));
		//Size
		aLogLines.push( chalk.yellow.bold(humanSize( oStats.size ) +")"));
		//console.log("error", oError);
		//console.log("stats :", oStats);
		//console.log("size :", humanSize(oStats.size));
		//console.log(crc32('Hello world'));

		fs.readFile(sFilePath,"utf-8", function( oReadError, sData){ //Affiche le contenu de notre fichier passer en argument
			if( oReadError ){
				fShowError( oReadError);
			}

			//console.log(crc32(sData));
			//aLogLines.push( chalk.yellow.bold("sum") + " " + crc32(sData));
			aLogLines.push( chalk.blue.bold("sum") + " " + hash(sData)) // de base en sha1

			console.log( aLogLines.join( " " ) );
		});
	} );
//console.log("filename:", sFileName);
//console.log("filepath:", sFilePath);