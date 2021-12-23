const resemble = require('resemblejs');
const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	try{
		await page.goto('http://localhost:3000');
		await page.setViewport({
		width:1200,
		height:800,
		})	
		await page.waitForSelector('#title', {timeout : 1500});
		await page.waitForSelector('#desc', {timeout : 1500});
		await page.waitForSelector('#addNotes', {timeout : 1500});
		console.log('TESTCASE:test_case1:success');
	}
	 catch(e){
		console.log('TESTCASE:test_case1:failure');
	}finally{
	  await page.close();
	  await browser.close();
	}

})();
(async () => {
const browser = await puppeteer.launch();
const page = await browser.newPage();
try{
	await page.goto('http://localhost:3000');
	await page.setViewport({
	width:1200,
	height:800,
	})
	
	await page.type('#title','user1');
	await page.type('#desc','Neo.ai emphasized my coding knowledge.');
	await page.click('#addNotes');
	await page.waitForSelector('#user1', {timeout : 1500});
	console.log('TESTCASE:test_case2:success');
}
 catch(e){
	console.log('TESTCASE:test_case2:failure');
}finally{
  await page.close();
  await browser.close();
}

})();