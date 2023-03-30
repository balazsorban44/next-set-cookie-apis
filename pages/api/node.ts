import { NextApiResponse } from "next";
export default function handler(_: any, res: NextApiResponse) {
  res.setHeader("set-cookie", [
    "foo=bar; Expires=Wed, 01 Jan 2044 00:00:00 GMT",
    "bar=foo; Expires=Wed, 01 Jan 2044 00:00:00 GMT",
  ]);
  res.json(null);
}
