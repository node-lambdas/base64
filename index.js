import { lambda, Format } from '@node-lambdas/core';

const configutation = {
  version: 1,
  input: Format.Buffer,
};

lambda(configutation, (input, output) => {
  switch (input.url) {
    case '/':
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
