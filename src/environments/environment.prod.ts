export const environment = {
  production: true,
  auth0: {
    domain: 'dev-z3z23qam2lr3gsku.us.auth0.com',
    clientId: 'h0vagAbseMlO1yUe9w0FePm2Fh0wAYGw',
    authorizationParams: {
      audience: 'https://dev-z3z23qam2lr3gsku.us.auth0.com/api/v2/',
      redirect_uri: 'https://otto-interactive-test.azurewebsites.net/callback',
    },
    errorPath: '/callback',
  },
  api: {
    serverUrl: 'https://ottoapi.azurewebsites.net',
  },
};
