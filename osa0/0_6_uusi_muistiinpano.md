```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa {content: "foobar2", date: "2024-05-01T19:16:05.968Z"}
    activate server
    server-->>browser: HTML 201 {"message":"note created"}
    deactivate server

    Note over browser: Selain tulostaa muistiinpanot, joissa mukana uusi muistiinpano
```