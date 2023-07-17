import fs from 'fs';
import path from 'path';

const readLog = (apiPath: string) => {
  const dir = path.join(process.cwd(), 'logs', apiPath);
  const filePath = path.join(dir, 'api.log');
  
  if (fs.existsSync(filePath)){
    const data = fs.readFileSync(filePath, 'utf8');
    return data;
  } else {
    throw new Error('Log file does not exist.');
  }
}

export default readLog;
