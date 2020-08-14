import { lambda } from 'node-lambdas';

lambda({ version: 1, readBody: true }, (input, output) => {
  switch (input.url) {
    case '/encode':
      output.send(Buffer.from(input.body).toString('base64'));
      break;
      
    case '/decode':
      output.send(Buffer.from(input.body.toString('utf8'), 'base64'));
      break;
      
    default:
      output.reject();
  }
});
