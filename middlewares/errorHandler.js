module.exports = (err, req, res, next) => {
  res.status(err?.status || 500);
  res.send({
    message: err?.message,
    code: err?.code || err?.name,
    details: err?.details,
  });
};
