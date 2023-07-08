module.exports.helloEarth = async (event) => {

  return {
    statusCode: 200,
    headers: {
        "Content-Type": "text/html"
    },
    body: {"message" : "Hello Earth!"}
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
