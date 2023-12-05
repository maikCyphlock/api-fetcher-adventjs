import * as cheerio  from "cheerio";
export async function GET() {
    const res = await fetch('https://adventjs.dev/es#retos')
    const html = await res.text()
    const $ = cheerio.load(html);
        const retos = []
       $('a[href^="/es/challenges/2023"]').each((i, element) => {
        const text = $(element).text();
            retos[i] = {
                day: text
            }
       });
       
       $('[alt="Challenge\'s image"]')
       .each((i, element) => {
        const src = 'https://adventjs.dev'+element.attribs.src
        console.log();
        retos[i] = {
            ...retos[i],
            src
        }
       });
       
       
    return Response.json({ retos })
  }