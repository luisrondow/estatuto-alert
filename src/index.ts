import { PrismaClient } from '@prisma/client'
import * as fs from 'fs';
import * as path from 'path';

const outputDir = './output';

const prisma = new PrismaClient()

async function main() {
  fs.readdir(outputDir, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    const txtFiles = files.filter((file) => path.extname(file) === '.txt');

    txtFiles.forEach((file) => {
      const filePath = path.join(outputDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      console.log(`File ${file} content:`, fileContent);
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })