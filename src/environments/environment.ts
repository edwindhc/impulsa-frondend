// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const server: string = 'http://localhost:8000/api/';
const max_file_size: number = (1024 * 1024) * 2;

export const environment = {
  production: false,
  category:            server + 'category',
  test:            server + 'test',
  question:            server + 'test',
  answer:            server + 'answer'
};
