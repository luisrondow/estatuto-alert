import fs from 'fs';

const isName = (line) => line.match(/(\. ){10,}/) && !!line.replace(/\. /g, '').trim()

/**
 * Take a the document content as a string, exctract the name and date of birth
 * and return this data in an array of objects.
 *
 * @param {String} content
 *
 * @returns {Array<{ name: String, dateOfBirth: String }>}
 */
const processText = (content) => {
  const lines = content.split('\n');
  const results = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const twoLinesAhead = lines[i+2];

    if (isName(line)) {
      const name = line.replace(/\./g, '').trim()
      const dateOfBirth = twoLinesAhead.trim();

      if (isName(lines[i+3])) {  // Ensure that there is a new name
        results.push({ name, dateOfBirth });
        i+3;  // Skip the nexts lines since we already processed it
      }
    }
  }

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
