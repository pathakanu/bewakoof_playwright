// @ts-check
const { test, expect } = require('@playwright/test');
import loginPage from '../pages/login-page';
import addToCart from '../pages/add-to-cart';
import Scroll from '../pages/scroll';
import Search from '../pages/search';
import Size from '../pages/size-select';
import scrapPage from '../pages/scrapingPage';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Login to Bewakoof', () => {
    test('has title', async ({ page }) => {
        await expect(page).toHaveTitle('Online Fashion Shopping for Men, Women, Accessories - Bewakoof.com');
    });

    test('Login with Email', async({page}) => {

        const login_Page = new loginPage(page);
        await login_Page.login("pathak.anurag@tftus.com","Anurag123@");
        const logout = await page.locator("[id='web_logout']").isVisible();
        expect(logout).toBe(true);
    });

    test('Login with phone', async ({ page }) => {

        const Login = await page.locator("[id='loginLink']");
        await Login.click();
        await page.waitForTimeout(1000);
        const mobile_no = await page.locator("[id='mobile_number']");
        await mobile_no.fill("9525500039");

        const button = await page.locator("[id='web_continue_submit']");
        await button.click();  
  
        await page.waitForTimeout(7000);
        const sumbit = await page.locator("[class='loginSubmit ']");
        await sumbit.click();
        await page.waitForURL('https://www.bewakoof.com/');
        await page.locator("[class='icon_user']").hover();
        const logout = await page.locator("[id='web_logout']").isVisible();
        expect(logout).toBe(true);
    });
});

test.describe('Going through Collections', () => {
    test('Going through mens collections', async ({ page }) => {
        const Scrap = new scrapPage(page);
        await Scrap.scrap('Men');     
    });
    
    test('Going through womens collections', async ({page}) => {
        const Scrap = new scrapPage(page);
        await Scrap.scrap('Women'); 
    });
});

test.describe('Add product to cart', () => {
    test('Add winter wear to cart', async({page}) => {
        await page.waitForURL('https://www.bewakoof.com/');

        const p_path = await page.locator("//img[@alt='Winterwearimage']");
        await p_path.click();
        await page.waitForTimeout(1000);

        const item = await page.locator("div.plp-product-card:nth-child(2) a");
        await item.click();
        const size_select = new Size(page);
        const n = await size_select.select();

        await size_select.click(n);

        const add_cart = new addToCart(page);
        await add_cart.addCart();
        
    });

    test('Add Bestsellers to cart', async({page}) => {
        await page.waitForURL('https://www.bewakoof.com/');

        await page.locator("//img[@alt='Bestsellersimage']").click();
        await page.waitForTimeout(1000);
        await page.waitForURL("https://www.bewakoof.com/bestseller?sort=new");

        await page.locator("div.plp-product-card:nth-child(2) a").click();
        await page.waitForTimeout(1000);

        const size_select = new Size(page);
        const n = await size_select.select();

        await size_select.click(n);

        const add_cart = new addToCart(page);
        await add_cart.addCart();
    });

    test('Add NewArrivals to Cart', async({page}) => {
        await page.waitForURL('https://www.bewakoof.com/');

        await page.locator("//img[@alt='New Arrivalsimage']").click();
        await page.waitForTimeout(1000);
        await page.waitForURL("https://www.bewakoof.com/new-arrivals?sort=new");

        await page.locator("div.plp-product-card:nth-child(2) a").click();
        await page.waitForTimeout(1000);

        const size_select = new Size(page);
        const n = await size_select.select();

        await size_select.click(n);

        const add_cart = new addToCart(page);
        await add_cart.addCart();
    });
});

test.describe('Deleting Cart Item', () => {
    test('Add a winterwear and delete', async({page}) => {
        const p_path = await page.locator("//img[@alt='Winterwearimage']");
        await p_path.click();
        await page.waitForTimeout(1000);

        const item = await page.locator("div.plp-product-card:nth-child(2) a");
        await item.click();
        await page.locator("//span[.='XL']").click();

        const add_cart = new addToCart(page);
        await add_cart.addCart();

        await page.locator("[id='testRemoveCart']").click();
        await page.waitForTimeout(1000);
    });

    test('Add Bestseller to cart and delete', async({page}) => {
        await page.locator("//img[@alt='Bestsellersimage']").click();
        await page.waitForTimeout(1000);
        await page.waitForURL("https://www.bewakoof.com/bestseller?sort=new");

        await page.locator("div.plp-product-card:nth-child(2) a").click();
        await page.waitForTimeout(1000);

        await page.locator("//span[.='XL']").click();

        const add_cart = new addToCart(page);
        await add_cart.addCart();

        await page.locator("[id='testRemoveCart']").click();
        await page.waitForTimeout(1000);
    });

    test('Add newarrivals to cart and delete', async({page}) => {
        await page.locator("//img[@alt='New Arrivalsimage']").click();
        await page.waitForTimeout(1000);
        await page.waitForURL("https://www.bewakoof.com/new-arrivals?sort=new");

        await page.locator("div.plp-product-card:nth-child(2) a").click();
        await page.waitForTimeout(1000);

        await page.locator("//span[.='XL']").click();

        const add_cart = new addToCart(page);
        await add_cart.addCart();

        await page.locator("[id='testRemoveCart']").click();
        await page.waitForTimeout(1000);
    });
});

test.describe('Searching a product', () =>{
    test('Searching a jacket', async({page}) => {
        const search = new Search(page);
        const scroll = new Scroll(page);
        search.search_q("jacket", 3);
        await page.waitForTimeout(5000);
        scroll.scroll(2);
        await page.waitForTimeout(5000);
    });
});

test.describe('Verify product by api', () =>{
    test('Add to Cart', async({page}) =>{
        await page.locator("//img[@alt='New Arrivalsimage']").click();
        await page.waitForTimeout(1000);
        await page.waitForURL("https://www.bewakoof.com/new-arrivals?sort=new");

        await page.locator("div.plp-product-card:nth-child(2) a").click();
        await page.waitForTimeout(1000);
        page.on('request',async data => {
            // const post_data = data.();
            // console.log(post_data);
            // console.log(data.url());
            // console.log(data.method());
            if(data.url().includes("carts") && data.method() == 'POST'){
                const postResponse = await data.postData();
                console.log(JSON.stringify(postResponse));
            }
            // console.log(data.url());
        });

        const product_name = await page.textContent("[id='testProName']");
        await page.locator("//span[.='XL']").click();
        await page.locator("//span[.='ADD TO BAG']").click();
        // await page.waitForTimeout(5000);
        await page.waitForLoadState('domcontentloaded');
		await page.waitForLoadState('networkidle');

        // const response = await page.waitForResponse(request => {
        //     return request.method() === 'POST' && request.url() === '/api/posts';
        //   });

        // const response = await page.waitForResponse(response => response.url().includes('/carts/') && response.status() === 200);
        //     console.log('RESPONSE ' + (await response.body()));

        // const route_assert = await page.route('https://www.bewakoof.com/v1/carts/*', async route =>{
        //     const response = await route.fetch();
        //     console.log("here",response);
        //     const json = await response.json();
        //     console.log(json);
        //     // return json;
        // });

        // console.log(route_assert);
    });
});