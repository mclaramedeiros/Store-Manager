const validateProducts = (res, req, next) => {
  const { name } = req.body;
  if (!name) {
    return next({
      status: 400,
      message: { message: '"name" is required' },
    });
  }
  if (name.length < 5) {
    next({
      status: 422,
      message: { message: '"name" length must be at least 5 characters long' },
    });
  }
  next();
};

module.exports = { validateProducts };
