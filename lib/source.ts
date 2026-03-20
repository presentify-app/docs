import { docs } from 'collections/server';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/',
  source: docs.toFumadocsSource(),
  i18n: {
    defaultLanguage: 'en',
    languages: ['en', 'de'],
  },
});
