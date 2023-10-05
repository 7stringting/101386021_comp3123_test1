const resolvedPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let success = { 'message': 'delayed success!' };
        resolve(success);
      }, 500);
    });
  };
  
  const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          throw new Error('error: delayed exception!');
        } catch (e) {
          reject(e);
        }
      }, 500);
    });
  };
  
  // Calling the promises separately and handling their results
  resolvedPromise()
    .then((result) => {
      console.log('Resolved Promise Result:', result);
    })
    .catch((error) => {
      console.error('Error in Resolved Promise:', error);
    });
  
  rejectedPromise()
    .then((result) => {
      console.log('Resolved Promise Result:', result); // This won't execute
    })
    .catch((error) => {
      console.error('Error in Rejected Promise:', error);
    });
  