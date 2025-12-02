# Weather Dashboard

Simple responsive Weather Application built with React + Vite.

Features
- Search weather by city name.
- Display temperature, weather condition, humidity, wind speed, and country.
- Show weather icon from OpenWeatherMap.
- Show error message if city not found.
- Loading state while fetching data.
- Auto-fetch user location weather using browser geolocation (optional).

Setup
1. Install dependencies:

```bash
npm install
```

2. Add your OpenWeatherMap API key:
- Copy `.env.example` to `.env` in the project root.
- Edit `.env` and set `VITE_WEATHER_API_KEY=your_api_key_here`.

You can get a free API key at https://openweathermap.org/api (use the Current Weather Data API).

3. Run the dev server:

```bash
npm run dev
```

Notes
- The app reads the key from `import.meta.env.VITE_WEATHER_API_KEY`. For Vite, environment variables must start with `VITE_` to be exposed to the client.
- No backend is required; all calls go directly to OpenWeatherMap.

Files of interest
- `src/App.jsx` — main app, handles fetching and state.
- `src/components/SearchBar.jsx` — search input component.
- `src/components/WeatherCard.jsx` — display component for weather data.

If you want Tailwind instead of plain CSS, I can update the project to include it.
