# Pakettien asennus

```
npm install axios
npm install json-server --save-dev
```

# Palvelimen käynnistys - embedded

Lisätään package.json tiedostoon
```
"scripts": {
    "server": "json-server -p3001 --watch db.json"
  },

```

# Testaus

Käynnistä backend: `npm run server`
Käynnistä frontend: `npm run dev`