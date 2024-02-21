export default function hasDevPassKey(req, res, next) {
  const passed_key = req.headers.authorization;
  if (passed_key !== dev_pass_key)
    res.status(300).send({ message: "please, provide valid dev_pass_key." });
  next();
}
