/**
 * Helper function to extract query parameters from the request.
 *
 * @param {Request} req - The HTTP request object.
 * @returns {{ id: string | null, limit: number }} - An object containing extracted query parameters.
 */
function extractQueryFromRequest(req: Request) {
  const url = new URL(req.url || "");
  const params = new URLSearchParams(url.search || "");
  return {
    id: params.get("id"),
    limit: parseInt(params.get("limit") || "10", 10),
  };
}
export default extractQueryFromRequest;
