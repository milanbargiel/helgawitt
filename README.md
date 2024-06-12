# Helga Witt Gestalttherapie Website

## Install node, npm and gulp

## Run project on a local server

- open the console of your mac
- run the command `npm install` in project folder to install all required modules
- run `gulp` command to open local delevopment environment in a browser

## Deploy to http://helga-witt.de/

Files within `docs` folder are served on webpage http://helga-witt.de/.

- run `gulp build` to minify files and make build in `docs` folgder
- and push to github remote repository:
- `npm add -A`
- `npm commit -m "message text"`
- `git push -u origin master"`
