# iTunes Library Viewer

A browser-based tool for searching and exploring an iTunes library from anywhere. Built with Node.js, React.

## Use Cases:
As a student-based radio station, we upload our music into iTunes to manage it. For students planning for shows, being able to remotely view the library contents allows students to plan show music without needing to be in the studio. It also allows radio leadership to see more detail about the state of our music library.

See a [demo / our library] here(festive-mclean-66803d.netlify.app).

## Pre-Processing
* First, you need the XML of your iTunes library. In iTunes Preferences > Advanced, select “Share iTunes Library XML with other applications”. This XML file should appear in your default iTunes folder (for me: Users/Myself/Music/iTunes). 
* This web-application requires your XML file in JSON format. We used the node module plist-to-json to convert our file in the commandline.
* Upload the JSON file via a domain you control or a file-sharing service.
* Replace the json-loc.js file in the directory with:


## Installing
Replace the json-loc.js file with the following:
```
const JSON_LOC = 'https://your-domain.com/your-json.json';
export default JSON_LOC;
```
