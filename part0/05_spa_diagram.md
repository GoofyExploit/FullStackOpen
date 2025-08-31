```mermaid

sequenceDiagram
  participant browser
  participant backend

  browser->>backend: GET /spa
  activate backend
  backend->>browser: 200 OK(HTML file)
  deactivate backend

  browser->>backend: GET /main.css
  activate backend
  backend->>browser: 200 OK(CSS file)
  deactivate backend

  browser->>backend: GET /spa.js
  activate backend
  backend->>browser: 200 OK(JS file)

  Note right of browser: Browser executes JS file

  browser->>backend: GET /data.json
  activate backend
  backend->>browser: 200 OK(JSON file)
  deactivate backend

  Note right of browser: Browser render notes from JSON 

    browser->>backend: GET fonts.googleapis.com/Inter
  activate backend
  backend-->>browser: 200 OK (Inter font)
  deactivate backend

  browser->>backend: GET fonts.googleapis.com/Roboto
  activate backend
  backend-->>browser: 200 OK (Roboto font)
  deactivate backend  

  browser->>backend: GET fonts.googleapis.com/RobotoMono
  activate backend
  backend-->>browser: 200 OK (Roboto Mono font)
  deactivate backend