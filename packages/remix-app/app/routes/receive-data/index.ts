import { json } from '@remix-run/node';
import type { ActionArgs } from '@remix-run/node';

import { addDocument, type CrawlerDocument } from '~/models/document.server';
import { addJob, type CrawlerJob } from '~/models/job.server';

export const action = async ({ request }: ActionArgs) => {
  switch (request.method) {
    case 'POST': {
      const queryParameters = new URL(request.url).searchParams;

      if (queryParameters.get('type') === 'job') {
        const payload = (await request.json()) as { job: CrawlerJob };

        try {
          await addJob(payload?.job);

          return json({ message: 'success' }, 201);
        } catch (error) {
          console.error(error);
          return json({ message: 'error', error }, 500);
        }
      } else if (queryParameters.get('type') === 'document') {
        const payload = (await request.json()) as { document: CrawlerDocument };

        try {
          await addDocument(payload?.document);

          return json({ message: 'success' }, 201);
        } catch (error) {
          console.error(error);
          return json({ message: 'error', error }, 500);
        }
      } else {
        return json(
          {
            message:
              'the query param type is required and accept the values: "document" or "job"',
          },
          422,
        );
      }
    }
  }
};
