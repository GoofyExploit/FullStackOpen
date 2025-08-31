```mermaid

sequenceDiagram
  participant browser
  participant backend

  browser->>backend: POST /new_note_spa
  activate backend
  backend->>browser: 201 and Message recevied in JSON format
  deactivate backend

  Note right of broswer: {"message":"note created"}