function createError(message: string, status: number, headers: any) {
  const messages = {
    isError: true,
    message,
  };
  const header = {
    status: status,
    headers: headers,
  };

  return { messages, header };
}
export default createError;
