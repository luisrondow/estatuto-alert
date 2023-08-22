import fs from 'fs';

const isName = (line) => line.match(/(\. ){10,}/) && !!line.replace(/\. /g, '').trim()

const parseDate = (date) => {
  const [day, month, year] = date.split('/');

  return `${year}-${month}-${day}`;
}

/**
 * Take a the document content as a string, exctract the name and date of birth
 * and return this data in an array of objects.
 *
 * @param {String} content
 *
 * @returns {Array<{ name: String, dateOfBirth: String }>}
 */
export const processDocumentText = (content) => {
  console.log(`[PROCESS SCRIPT] - Start to process document text...`)

  const lines = content.split('\n');
  const results = [];

  lines.forEach((line, i) => {
    console.log(`[PROCESS SCRIPT] - Processing line ${i} of ${lines.length}...`)
    if (!isName(line)) return;

    const name = line.replace(/\./g, '').trim()

    if (!name) return;

    const birthDate = lines[i+2].trim();

    results.push({ name, birthDate: parseDate(birthDate) });
  })

  console.log(`[PROCESS SCRIPT] - Processed ${results.length} persons.`)

  return results;
}

/**
 * Read a PDF file and process its content.
 *
 * @param {String} filePath
 *
 * @returns {Promise<Array<{ name: String, dateOfBirth: String }>>}
 */
export const processPdfOutputText = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        reject(err);
        return;
      }

      const lines = content.split('\n');
      const results = processText(content);

      resolve(results);
    });
  });
}
