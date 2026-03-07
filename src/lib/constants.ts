import { schemas } from '@vasugrover/hono-openapi';
import { phrases } from '@vasugrover/http-status';

export const ZOD_ERROR_MESSAGES = {
  REQUIRED: 'Required',
  EXPECTED_NUMBER: 'Invalid input: expected number, received NaN',
  NO_UPDATES: 'No updates provided',
  EXPECTED_STRING: 'Invalid input: expected string, received undefined',
};

export const ZOD_ERROR_CODES = {
  INVALID_UPDATES: 'invalid_updates',
};

export const notFoundSchema = schemas.createMessageObjectSchema(phrases.NOT_FOUND);
