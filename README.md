# BKuponger 🍔 🧾

![Netlify Status](https://api.netlify.com/api/v1/badges/b65bc6e7-4cea-4a3e-aa9f-7f05169d3636/deploy-status)

[Deploy](https://bkupong.netlify.app)

## Bakgrund

Klockan 3 en lördag på Järntorget vill ingen stå och kämpa med Burger Kings app för att få chilli cheese tops för 15kr. Från oväntade utloggningar till kuponger som inte skannas, deras "mobilapp" är inte direkt slipad. Däremot är deras kupong-system/API näst intill lika oslipad och mycket lätt att använda för att kringå deras app.

Denna applikation hämtar deras kuponger varje måndag kl 00.10 och visar dom [här](https://bkupong.netlify.app). Helt utan inlogg, helt utan begränsningar.

## Hur?

En Burger King kupong är inte personlig utan består helt enkelt av en kod såsom BKSE*AP415. API scrapern (under `src/utils/scrape.ts`) hämtar dessa och sparar dom i en MongoDB databas. Appen är byggd på Astro med SSG och med lite hjälp av Svelte. Sidan byggs om när databasen uppdateras och servar nästan bara statisk HTML med väldigt lite JavaScript för \_blazingly fast⚡️* hastigheter.
