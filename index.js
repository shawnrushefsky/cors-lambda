const {
  ALLOW_HEADERS = "*",
  ALLOW_ORIGINS = "*",
  ALLOW_METHODS = "OPTIONS,GET",
} = process.env;

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: "OK",
    headers: {
      "Access-Control-Allow-Headers": ALLOW_HEADERS,
      "Access-Control-Allow-Origin": ALLOW_ORIGINS,
      "Access-Control-Allow-Methods": ALLOW_METHODS,
    },
  };
};
