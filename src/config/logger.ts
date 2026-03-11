import pino from 'pino';

export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',

  transport: {
    targets: [
      {
        target: 'pino-pretty',
        options: {
          colorize: true,
        },
        level: 'debug',
      },
      {
        target: 'pino/file',
        options: { destination: './logs/error.log' },
        level: 'error',
      },
      {
        target: 'pino/file',
        options: { destination: './logs/app.log' },
      },
    ],
  },
});
