# Pakettien asennus

```
npm install axios
```

# OpenWeatherMap

https://openweathermap.org sivulta voi tarkistaa API keyn

Ympäristömuuttujan esittely

```
export VITE_SOME_KEY=54l41n3n4v41m34rv0 && npm run dev // Linux/macOS Bash
($env:VITE_SOME_KEY="54l41n3n4v41m34rv0") -and (npm run dev) // Windows PowerShell
set "VITE_SOME_KEY=54l41n3n4v41m34rv0" && npm run dev // Windows cmd.exe
```

Ympäristömuuttujan lataus
```
const api_key = import.meta.env.VITE_SOME_KEY
```

Palvelimen käynnistys
```
set "VITE_WEATHER_API_KEY=[tähän openweathermap api key]" && npm run dev
```