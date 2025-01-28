const createErrorResponse = (status, message, details = null) => {
    const errorResponse = { status, message };
    if (details) {
      errorResponse.details = details;
    }
    return errorResponse;
  };
  
  const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    const details = err.details || null;
  
    console.error(`[Error] ${status}: ${message}`);
    if (details) {
      console.error(`[Details]: ${JSON.stringify(details)}`);
    }
  
    res.status(status).json(createErrorResponse(status, message, details));
  };
  
  const notFoundHandler = (req, res, next) => {
    const message = `Route ${req.originalUrl} not found`;
    res.status(404).json(createErrorResponse(404, message));
  };
  
  module.exports = {
    errorHandler,
    notFoundHandler,
  };
  