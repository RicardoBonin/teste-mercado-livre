import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req?.method !== 'GET') {
    res?.status(405)?.json({ message: `Method ${req?.method} not allowed.` });
    return;
  }

  try {
    const data = req?.query;

    const search = data?.q || '';

    const response = await fetch(
      `${process.env.API_ENDPOINT}/items?q=${search}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

    const json = await response?.json();

    if (!response?.ok) {
      throw new Error('Error trying to make a request.');
    }

    if (!search) {
      throw new Error('Error trying to make a request. Query invalid');
    }

    return res?.status(200)?.send({
      results: json.results,
      formSubmitted: true,
      message: 'Request successfully.',
    });
  } catch (error) {
    if (error instanceof Error) {
      return res?.status(500)?.json({
        formSubmitted: false,
        message: error.message,
      });
    }
  }
};
export default handler;
