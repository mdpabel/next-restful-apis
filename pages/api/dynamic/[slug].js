const handler = (req, res) => {
  const { slug } = req.query;
  res.json({
    message: slug,
  });
};

export default handler;
