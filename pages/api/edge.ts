export default async function handler() {
  const headers = new Headers();
  headers.set("set-cookie", "foo=bar; Expires=Wed, 01 Jan 2044 00:00:00 GMT");
  headers.append(
    "set-cookie",
    "bar=foo; Expires=Wed, 01 Jan 2044 00:00:00 GMT"
  );

  return new Response(null, { headers });
}
export const config = { runtime: "edge" };
