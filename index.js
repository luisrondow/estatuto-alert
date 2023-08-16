import puppeteer from 'puppeteer';
import { PdfReader } from "pdfreader";
import pdfjs from 'pdfjs-dist';
import fs from 'fs';

const INPUT_SELECTOR = '#b2-b2-Input_ActiveItem2';
const SEARCH_BUTTON_SELECTOR = 'button[type="submit"]';

const ORDER_BY_SELECTOR = '.popover';
const ORDER_BY_POPOVER_SELECTOR = '#transitionContainer > div > div.popover'
const ORDER_BY_MOST_RECENT_ANCHOR_SELECTOR = '#transitionContainer > div > div.popover > div > div > div:nth-child(3) > a > span';
const RESULTS_PER_PAGE_200_ANCHOR_SELECTOR = '#transitionContainer > div > div.popover > div > div > div:nth-child(4) > a > span';

const ACT_SELECTOR = '#Tipo_Ato_Titulo';
const ACT_ANCHOR_SELECTOR = 'a[title="Despacho (extrato)"]';

const FROM_DATE_SELECTOR = '#Input_dataPublicacaoDe';
const FROM_DATE_BUTTON_SELECTOR = '#Pesquisa2 > div:nth-child(5) > button';

const RESULT_TITLE_SELECTOR = '.itm-title';

const TEXT_SECTION_SELECTOR = '#b7-Texto_Conteudo';

const SEARCH_CONTENT = 'concede o estatuto de igualdade de direitos e deveres a vários cidadãos brasileiros';
const FROM_DATE = '2023-06-01';

async function initialSearch(page) {
  try {
    await page.locator(INPUT_SELECTOR).click();

    await page.type(INPUT_SELECTOR, SEARCH_CONTENT);
    console.log('Input typed');

    await page.locator(SEARCH_BUTTON_SELECTOR).click();
    console.log('Search button clicked');
  } catch (error) {
    throw error;
  }
}

async function postMostRecentResults(page) {
  try {
    await page.waitForSelector(ORDER_BY_SELECTOR);

    setTimeout(async () => {
      await page.locator(ORDER_BY_SELECTOR).click();

      console.log('Order by clicked');
    }, 500);

    await page.waitForSelector(ORDER_BY_POPOVER_SELECTOR);
    console.log('Popover loaded');

    await page.locator(ORDER_BY_MOST_RECENT_ANCHOR_SELECTOR).click();
    console.log('Most recent clicked');
  } catch (error) {
    throw error;
  }
}

async function post200Results(page) {
  try {
    await page.waitForSelector(ORDER_BY_SELECTOR);

    setTimeout(async () => {
      const orderByElements = await page.$$(ORDER_BY_SELECTOR);
      await orderByElements[1].click();

      console.log('Results per page clicked');
    }, 500);

    await page.waitForSelector(ORDER_BY_POPOVER_SELECTOR);
    console.log('Popover loaded');

    await page.locator(RESULTS_PER_PAGE_200_ANCHOR_SELECTOR).click();
    console.log('200 clicked');
  } catch (error) {
    throw error;
  }
}

async function postFromDate(page) {
  try {
    await page.waitForSelector(FROM_DATE_SELECTOR);
    console.log('From date loaded');

    await page.locator(FROM_DATE_SELECTOR).fill(FROM_DATE);
    console.log('From date filled');

    await page.locator(FROM_DATE_BUTTON_SELECTOR).click();
    console.log('From date button clicked');
  } catch (error) {
    throw error;
  }
}

async function filterPerAct(page) {
  try {
    await page.waitForSelector(ACT_SELECTOR);
    console.log('Act loaded');

    await page.locator(ACT_SELECTOR).click();
    console.log('Act clicked');

    await page.waitForSelector(ACT_ANCHOR_SELECTOR);
    await page.locator(ACT_ANCHOR_SELECTOR).click();
    console.log('Act link clicked');
  } catch (error) {
    throw error;
  }
}

async function getResults(page) {
  try {
    await page.waitForSelector('#ListaResultados > table');
    console.log('Results loaded');

    const elements = await page.$$(RESULT_TITLE_SELECTOR);

    return elements;
  } catch (error) {
    throw error;
  }
}

async function interectWithResult(page) {
  try {
    await page.waitForSelector(TEXT_SECTION_SELECTOR);
    console.log('[DESPACHO PAGE] - Text section loaded');

    const originalDocument = await page.$(`${TEXT_SECTION_SELECTOR} a`);
    const href = await originalDocument.getProperty('href');
    const hrefValue = await href.jsonValue();
    await page.goto(hrefValue);

    // TODO: DOWNLOAD PDF
    fs.readFile("sample.pdf", (err, pdfBuffer) => {
      // pdfBuffer contains the file content
      new PdfReader().parseBuffer(pdfBuffer, (err, item) => {
        if (err) console.error("error:", err);
        else if (!item) console.warn("end of buffer");
        else if (item.text) {
          // TODO: PROCESS TEXT
          console.log(item.text);
        }
      });
    });

    // Navigate to the PDF URL
    // await page.close()

    // Wait for the download to complete
  } catch (error) {
    throw error;
  }
}

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://diariodarepublica.pt/dr/pesquisa');

  // Set screen size
  await page.setViewport({width: 1280, height: 720});

  try {
    console.log('\n#### INITIAL SEARCH ####');
    await initialSearch(page);

    console.log('\n#### POST MOST RECENT RESULTS ####');
    await postMostRecentResults(page);

    console.log('\n#### POST 200 RESULTS ####');
    await post200Results(page);

    console.log('\n#### POST FROM DATE ####');
    await postFromDate(page);

    console.log('\n#### FILTER PER ACT ####');
    await filterPerAct(page);

    const pageTarget = page.target();
    console.log('\n#### CLICK ON RESULT ####');
    const resultElements = await getResults(page);

    console.log('\n#### INTERACT WITH RESULT ####');

    await resultElements[0].click();
    const newTarget = await browser.waitForTarget(target => target.opener() === pageTarget);
    const newPage = await newTarget.page();

    await interectWithResult(newPage);

    // for (const element of resultElements) {
    //   await element.click();
    //   const newTarget = await browser.waitForTarget(target => target.opener() === pageTarget);
    //   const newPage = await newTarget.page();

    //   await interectWithResult(newPage);
    // }
  } catch (error) {
    console.error(error);
  }
})();