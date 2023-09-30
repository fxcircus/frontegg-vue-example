# Frontegg-vue-with-admin-portal
Implementation of [Frontegg's Hosted VueJS SDK](https://docs.frontegg.com/docs/vue-hosted-login-guide)

## Project setup
```
npm install
```

Navigate to `Frontegg Portal ➜ [ENVIRONMENT] ➜ Env Settings page`
Add your environment settings to the code:
```
// src/main.js
contextOptions: {
    baseUrl: "baseUrl",     // Login URL from Frontegg Portal ➜ [ENVIRONMENT] ➜ Env Settings page
    clientId: 'clientId'    // Client ID from Frontegg Portal ➜ [ENVIRONMENT] ➜ Env Settings page
}
```

Change `App URL` to-
```
http://localhost:8080
```

Navigate to `Frontegg Portal ➜ [ENVIRONMENT] ➜ Authentication ➜ Login Method`
Add the following value to the list of URLs-
```
http://localhost:8080/oauth/callback
```


### Compile and run the server
```
npm run serve
```
