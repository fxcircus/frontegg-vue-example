# Frontegg-vue-with-admin-portal
Implementation of [Frontegg's Hosted VueJS SDK](https://docs.frontegg.com/docs/vue-hosted-login-guide)

## Project setup
```
npm install
```
Add your environment settings:
```
// src/main.js
contextOptions: {
    baseUrl: "baseUrl",     // Login URL from Frontegg Portal ➜ [ENVIRONMENT] ➜ Env Settings page
    clientId: 'clientId'    // Client ID from Frontegg Portal ➜ [ENVIRONMENT] ➜ Env Settings page
}
```


### Compiles and hot-reloads for development
```
npm run serve
```
