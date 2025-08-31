```mermaid

sequenceDiagram
  participant browser
  participant backend

  browser->>backend: POST https://studies.cs.helsinki.fi/exampleapp/new_note
  activate backend
  backend->>browser: Gives back 302 code and bring changes in the page
  deactivate backend

  browser->>backend: GET https://studies.cs.helsinki.fi/exampleapp/notes
  activate backend
  backend->>browser: Gives back 200 code and html file
  deactivate backend

  broweser->>backend: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  activate backend
  backend->>browser: Gives back 200 code CSS file
  deactivate backend

  browser->>backend: GET https://studies.cs.helsinki.fi/exampleapp/main.js
  activate backend
  backend->>browser: Gives back 200 code JS file
  deactivate backend

  Note right of browser: Browser executes Javascript file

  browser->>backend: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate backend
  backend->>browser: Sends data for the html in json format
  deactivate backend

  Note right of browser: Browser renders the notes from data.json

  browser->>backend: GET https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap
  activate backend
  backend->>browser: Gives back 200 code and loads google inter fonts in html
  deactivate backend

  browser->>backend: GET "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
  activate backend
  backend->>browser: Gives back 200 code and loads google roboto fonts in html
  deactivate backend  

  browser->>backend: GET "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
  activate backend
  backend->>browser: Gives back 200 code and loads google roboto mono fonts in html
  deactivate backend   