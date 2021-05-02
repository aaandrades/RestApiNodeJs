import * as jwt from "jsonwebtoken";

// Verify Token
const verifyTokenMiddleware = (req: any, res: any, next: any) => {
  let token = req.get("Authorization");
  jwt.verify(token, process.env.SEED, (err: any, decode: any) => {
    // if exist some error, throw exception in validation of token
    if (err) {
      return res.status(401).json({
        ok: false,
        err,
      });
    }

    req.user = decode.user;
    next();
  });
};

const verifyAdminRole = (req: any, res: any, next: any) => {
  const {role} = req.user;
  return role === "ADMIN_ROLE"
    ? next()
    : res.status(401).json({ ok: false, message: "Restricted Access just for Admins" });
};

export { verifyTokenMiddleware, verifyAdminRole };
