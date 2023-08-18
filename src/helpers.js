import fs from 'fs'
import https from 'https'
import { PdfReader } from "pdfreader";

/**
 * Download a file from the given `url` into the `targetFile`.
 *
 * @param {String} url
 * @param {String} targetFile
 *
 * @returns {Promise<void>}
 */
export async function downloadFile (url, targetFile) {
  return await new Promise((resolve, reject) => {
    https.get(url, response => {
      const code = response.statusCode ?? 0

      console.log(`[DOWLOAD SCRIPT] - Downloading ${url} to ${targetFile}...`)

      if (code >= 400) {
        return reject(new Error(response.statusMessage))
      }

      if (code > 300 && code < 400 && !!response.headers.location) {
        return resolve(
          downloadFile(response.headers.location, targetFile)
        )
      }

      const fileWriter = fs
        .createWriteStream(targetFile)
        .on('finish', () => {
          resolve({})
        })

      response.pipe(fileWriter)
    }).on('error', error => {
      console.error(`Error downloading ${url}: ${error.message}`)
      reject(error)
    })
  })
}
/**
 * Read a PDF file and return its content as a string.
 *
 * @param {String} fileName
 *
 * @returns {Promise<string>}
 */
export function readPdfFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(`./pdfs/${fileName}`, (err, pdfBuffer) => {
      if (err) {
        reject(err);
        return;
      }

      const resultArray = [];
      new PdfReader().parseBuffer(pdfBuffer, (err, item) => {
        if (err) {
          reject(err);
          return;
        }

        if (!item) {
          resolve(resultArray);
          return;
        }

        if (item.text) {
          resultArray.push(item.text);
        }
      });
    });
  });
}
