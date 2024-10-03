const { writeFile } = require('fs');
const { promisify } = require('util');

const dotenv = require('dotenv');
const dotenvFilePath = `.env.${process.env['NODE_ENV']}`;
dotenv.config({ path: dotenvFilePath });

const writeFilePromisified = promisify(writeFile);
const targetPath = './src/environments/environment.ts';

const isProduction = process.env['NODE_ENV'] === 'production';


const envConfigFile = `export const environment = {
  production: ${isProduction},
  auth0: {
    domain: '${process.env['AUTH0_DOMAIN']}',
    clientId: '${process.env['AUTH0_CLIENT_ID']}',
    authorizationParams: {
      audience: '${process.env['AUTH0_AUDIENCE']}',
      redirect_uri: '${process.env['AUTH0_CALLBACK_URL']}',
    },
    errorPath: '/callback',
  },
  tinyMCE: {
    api_key:'${process.env['TINYMCE_API_KEY']}'
  },
  api: {
    serverUrl: '${process.env['API_SERVER_URL']}',
  },
  adminPass: {
    serverUrl: '${process.env['OTTO_ADMIN_SECRET']}',
  };
`;

(async () => {
  try {
    await writeFilePromisified(targetPath, envConfigFile);
    console.log(`Environment file created for ${process.env['NODE_ENV']}: ${targetPath}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
