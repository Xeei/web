import fs from 'fs';
import path from 'path';

const writeLog = (logMessage: string, apiPath: string) => {
  const dir = path.join(process.cwd(), 'logs', apiPath);
  
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }

  const filePath = path.join(dir, 'api.log');
  const logStream = fs.createWriteStream(filePath, {flags: 'a'});
  logStream.write(`${new Date().toISOString()} | ${logMessage}\n`);
  logStream.end();
}

export default writeLog;
