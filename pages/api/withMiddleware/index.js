const handler = (req, res) => {
  res.json('Hello');
};

// function, return function, first func rec handler, then run some codes, return handler with req, res
const middleware = (handlerFnc) => (req, res) => {
  if (!req.headers.auth == 'true') {
    return res.status(401).json('Authentication failed!');
  }

  return handlerFnc(req, res);
};

// wrap up handler with middleware
export default middleware(handler);
