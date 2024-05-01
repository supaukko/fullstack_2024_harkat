```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML documentti
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS tiedosto
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: JavaScript tiedosto
    deactivate server
    
    Note over browser: Selain suorittaa JavaScript-koodin ja lataa palvelimelta muistiinpanot
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "foobar", "date": "2024-5-1" }, ... ]
    deactivate server    

    Note over browser: Selain suorittaa callback-funktion ja tulostaa muistiinpanot 
```