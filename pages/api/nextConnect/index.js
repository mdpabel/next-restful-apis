import nc from 'next-connect';

// Controller
const createUser = (req, res) => {
  res.json('Created!');
};

const getUser = (req, res) => {
  res.json('Created!');
};

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  },
})
  // .use(middleware)
  .get(getUser)
  .post(createUser);

export default handler;
