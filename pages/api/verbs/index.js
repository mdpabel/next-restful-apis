const handler = (req, res) => {
  const { method } = req;

  if (method === 'GET') {
    res.json('GET');
  }

  if (method === 'POST') {
    res.json('POST');
  }
};

export default handler;
