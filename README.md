- [ ] clone this repo `git clone git@github.com:pierre-phil/next.js_firebase_starter.git`
- [ ] install dependencies `cd next.js_firebase_starter` `npm install`

- [ ] create a new app in the [Firebase console](https://console.firebase.google.com)

- [ ] copy the app config vars into a `.env.local` file at the root of the project :

```javascript
./.env.local

NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=...
NEXT_PUBLIC_DATABASE_URL=...
```

- [ ] activate the [reCAPTCHA Enterprise API](https://console.cloud.google.com/apis/api/recaptchaenterprise.googleapis.com/metrics?project=...rapid-vtc) in the Google Cloud console

- [ ] create a new [reCAPTCHA website key](https://console.cloud.google.com/security/recaptcha), see this [screenshot for the config of the key](./screenshot.png)

- [ ] add the created reCAPTCHA API key to `.env.local` :

```javascript
./.env.local

NEXT_PUBLIC_RECAPTCHA_SITE_KEY=...
```

- [ ] activate App Check in the Firebase Console and add the reCAPTCHA API key created in the Google Cloud Console [like this](./screenshot_2.png)

- [ ] run the app `npm run dev`

- [ ] the following error message should appear in the browser console :

```
POST https://content-firebaseappcheck.googleapis.com/v1/projects/your_firebase_project/apps/your_firebase_app_id:exchangeRecaptchaV3Token?key=your_firebase_api_key 400 (Bad Request)

 @firebase/app-check: AppCheck: Requests throttled due to 400 error. Attempts allowed again after 00m:01s (appCheck/throttled).
```

Optional, too make sure Firebase is working properly :

- [ ] create a Relatime Database instance from the Firebase Console with a key/value `test: 1234` in the root of the database

- [ ] uncomment the `getData()` function in `page.js`. You should see `data : 1234` in the browser console.
