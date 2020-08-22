import { lambda, Format } from '@node-lambdas/core';

const configutation = {
  version: 2,
  actions: {
    encode: {
      default: true,
      input: Format.Buffer,
      output: Format.Text,
      handler: (input, output) => output.send(input.body.toString('base64')),
    },

    decode: {
      input: Format.Text,
      output: Format.Buffer,
      handler: (input, output) => output.send(Buffer.from(input.body, 'base64')),
    },
  },
};

lambda(configutation);
