# meet-node

> Base exercise to discover node.js, with a simple checksum cli tool.

* * *

**meet-node** is an educational project.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instructions will be in french. Sorry.

* * *

Ces fichiers servent de base d'exercice pour le cours de découverte de `node.js`.

## Branche `completed-es2015`

Afin de vous permettre d'avoir une série de références de script en **ES2015**, j'ai créé une branche supplémentaire, nommée `completed-es2015`, qui contient la version corrigée, mais écrite en suivant la nouvelle norme JavaScript ES2015.  
Comme expliqué lors des cours, ces scripts ont besoin d'être convertis (_transpilés_) vers une plus vieille version de javascript pour s'assurer de leur fonctionnement dans un navigateur.  
J'ai modifié le chemin du script pour le stocker dans un dossier `src`, et ajouter un script pour le compiler, en utilisant [babeljs](https://babeljs.io). Il vous suffit de lancer la commande `npm run build` pour compiler le script.  
J'en ai aussi profiter pour ajouter quelques règles propres à **ES2015** dans le fichier `.eslintrc.json` (utilisez la commande `npm run lint` pour faire une analyse).

### Workflow

Vous noterez au passage que je n'ai pas utilisé **grunt** ou **gulp** pour cette version. Il est tout à fait possible d'utiliser le système de scripts de node.js, comme vous pouvez le constater dans le fichier `package.json`.  
Chaque propriété de l'objet `script` est une commande qui sera lancée via le terminal en tapant `npm run [commande]`.

## Consignes

Nous avons déjà, très vaguement, utilisé node.js en deuxième année, en basant notre workflow sur le _task runner_ [GruntJS](http://gruntjs.com/), qui repose sur node.js. À l'époque, nous avons _utilisé_ node.js sans vraiment le comprendre. Nous allons remédier à ça tout au long du semestre que dure le cours de RIA, en commençant par ce premier exercice, qui va avoir comme objectif de réaliser un petit outil en ligne de commande, outil qui va analyser le contenu d'un fichier pour en retourner la [somme de contrôle](https://fr.wikipedia.org/wiki/Somme_de_contr%C3%B4le) (checksum CRC32).

### Déroulement

Notre cours se déroulera comme suit :

1. Présentation et historique rapide de node.js & npm
1. Installation de node.js & npm
1. Initialisation du projet et hello world
1. Récupération des paramètres d'exécution, utilisation de modules externes
1. Installation d'une dépendance depuis npm, finalisation du projet
