//Made by Ali Al Aoraebi
// Student Number: 101386021

// Question 3

const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

// Function to create log files
const createLogFiles = () => {
  if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
  }

  // Change the process's current working directory to the Logs directory
  process.chdir(logsDirectory);

  // Create 10 log files and write some text
  for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    const filePath = path.join(logsDirectory, fileName);
    fs.writeFileSync(filePath, `Log file ${i} content`);
    console.log(`Created ${fileName}`);
  }
};

createLogFiles();
