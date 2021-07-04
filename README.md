# iTunes Library Viewer

A browser-based tool for searching and exploring an iTunes library from anywhere. Built with Node.js, React.

## Use Cases:
As a student-based radio station, we upload our music into iTunes to manage it. For students planning for shows, being able to remotely view the library contents allows students to plan show music without needing to be in the studio. It also allows radio leadership to see more detail about the state of our music library.

See a [demo of our library](https://festive-mclean-66803d.netlify.app) here.


## Pre-Processing
The following assumes basic familiarity with `npm`:

* First, you need your iTunes library data as an XML. In iTunes Preferences > Advanced, select “Share iTunes Library XML with other applications”. The XML file will be generated (for us: Users/Myself/Music/iTunes). 
* This project requires your XML file to be converted to a JSON, which we did using [plist-to-json](https://github.com/andreyvit/plist-to-json). First install the commandline tool with `sudo npm install -g plist-to-json`, then generate the converted `itunes.json` file with `plist-to-json source.plist > itunes.json`.
* Upload the JSON file via a domain you control or a file-sharing service. If you self-host and run into CORS errors, you may need to create an `.htaccess` file (or add to an existing file) on the site *which is hosting the JSON* which contains the following:
```
<FilesMatch "\.(json)$">
  <IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "https://domain-where-your-itunes-lib-viewer-lives.com"
  </IfModule>
</FilesMatch>
```
If you are testing, you may allow *any* domain to access your JSON file by replacing the URL with `"*"`.

## Installing
Clone this repository, `cd` into it, and install all dependencies:
```
git clone git@github.com:webdcr/itunes-lib-viewer
cd itunes-lib-viewer
npm install
```
In the repository, replace the json-loc.js file contents with:
```
const JSON_LOC = 'https://your-domain.com/your-json.json';
export default JSON_LOC;
```
If testing, you can place the `itunes.json` file in the repository and make `JSON_LOC = '../itunes.json'`. If testing, run `npm start`; otherwise, you may use a service like Netlify to host the viewer.
