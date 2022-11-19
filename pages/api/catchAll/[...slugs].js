const handler = (req, res) => {
  const { slugs } = req.query;
  res.json({
    message: slugs,
  });
};

export default handler;
