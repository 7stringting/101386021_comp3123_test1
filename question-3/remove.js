//Made by Ali Al Aoraebi
// Student Number: 101386021

// Question 3

const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

// Function to remove log files
const removeLogFiles = () => {
  if (fs.existsSync(logsDirectory)) {
    console.log('Files to delete:');
    const files = fs.readdirSync(logsDirectory);
    files.forEach((file) => {
      const filePath = path.join(logsDirectory, file);
      console.log(filePath);
      fs.unlinkSync(filePath);
    });

    // Remove the Logs directory
    fs.rmdirSync(logsDirectory);
    console.log('Logs directory removed.');
  } else {
    console.log('Logs directory does not exist.');
  }
};

removeLogFiles();
