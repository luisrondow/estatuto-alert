import fs from 'fs'
import https from 'https'
import { PdfReader } from "pdfreader";
import axios from 'axios'

/**
 * Check if a given string is a valid date.
 *
 * @param {Date} date
 *
 * @returns {Boolean}
 */
export function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

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

/**
 * Send data to an API.
 *
 * @param {String} type
 * @param {Object} data
 *
 * @returns {Promise<Object>}
 *
 * */
export async function sendDataToAPI(type, data) {
  const API_URL = `http://localhost:3000/receive-data?type=${type}`;

  try {
      const response = await axios.post(API_URL, data);
      return response.data;
  } catch (error) {
      throw new Error(`Failed to send data to API: ${error.message}`);
  }
}
