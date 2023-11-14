// @ts-check
const { test, expect } = require('@playwright/test');
import loginPage from '../modules/login-page';
import addToCart from '../modules/add-to-cart';
import Scroll from '../modules/scroll';
import Search from '../modules/search';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.bewakoof.com/');
});

// test.describe('Login to Bewakoof', () => {
//     test('has title', async ({ page }) => {
//         await expect(page).toHaveTitle('Online Fashion Shopping for Men, Women, Accessories - Bewakoof.com');
//     });

//     test('Login with Email', async({page}) => {
//         await page.waitForURL('https://www.bewakoof.com/');
//         await page.locator("[id='loginLink']").click();

//         await page.locator("[id='web_email_login']").click();
//         await page.waitForURL("https://www.bewakoof.com/login/email");
//         await page.waitForTimeout(5000);

//         const login_Page = new loginPage(page);
//         await login_Page.login("pathak.anurag@tftus.com","Anurag123@");
//         await page.locator("[class='close_popup_target icon_close']").click();
//         await page.locator("[class='icon_user']").hover();
//         const logout = await page.locator("[id='web_logout']").isVisible();
//         expect(logout).toBe(true);
//     });

//     test('Login with phone', async ({ page }) => {

//         const Login = await page.locator("[id='loginLink']");
//         await Login.click();
//         await page.waitForTimeout(1000);
//         const mobile_no = await page.locator("[id='mobile_number']");
//         await mobile_no.fill("9525500039");

//         const button = await page.locator("[id='web_continue_submit']");
//         await button.click();  
  
//         await page.waitForTimeout(7000);
//         const sumbit = await page.locator("[class='loginSubmit ']");
//         await sumbit.click();
//         await page.waitForURL('https://www.bewakoof.com/');
//         await page.locator("[class='icon_user']").hover();
//         const logout = await page.locator("[id='web_logout']").isVisible();
//         expect(logout).toBe(true);
//     });
// });

// test.describe('Going through Collections', () => {
//     test('Going through mens collections', async ({ page }) => {

//         await page.waitForURL('https://www.bewakoof.com/');

//         const men = await page.locator("//a[.='Men']");
//         await men.click();
//         await expect(page).toHaveURL('https://www.bewakoof.com/campaign/mens-home');
//         const scroll = new Scroll(page);

//         scroll.scroll(1);
//         const tshirt = await page.locator("//img[@alt='Printed t shirts']");
//         scroll.scroll(2);
//         await tshirt.click();

//         await page.waitForURL('https://www.bewakoof.com/men-printed-tshirts?manufacturer_brand=bewakoof%C2%AE_bewakoof__air%C2%AE__1.0');
//         await page.mouse.wheel(0, 1000);
//         await page.waitForTimeout(5000);
//         scroll.scroll(4);
//         await page.waitForTimeout(5000);
//         await page.goBack();
//         await page.waitForTimeout(5000);

//         const fshirt = await page.locator("//img[@alt='Full Sleeve Tshirts']");
//         scroll.scroll(1);
//         await fshirt.click();

//         await page.waitForURL('https://www.bewakoof.com/men-full-sleeve-t-shirts?manufacturer_brand=bewakoof%C2%AE');
//         scroll.scroll(3);
//         await page.waitForTimeout(5000);
//         await page.goBack();
//         await page.waitForTimeout(5000);
//         await expect(page).toHaveURL('https://www.bewakoof.com/campaign/mens-home');

//         const oshirt = await page.locator("//img[@alt='Oversized T- Shirts']");
//         // await tshirt.scrollIntoViewIfNeeded();
//         scroll.scroll(1);
//         await oshirt.click();
//         await expect(page).toHaveURL('https://www.bewakoof.com/oversized-t-shirts-for-men?manufacturer_brand=bewakoof%C2%AE_bewakoof__air%C2%AE__1.0');
//         await page.mouse.wheel(0, 1000);
//         await page.waitForTimeout(5000);
//         scroll.scroll(1);
//         await page.waitForTimeout(5000);
//         await page.goBack();
//         await expect(page).toHaveURL('https://www.bewakoof.com/campaign/mens-home');
//     });
    
//     test('Going through womens collections', async ({page}) => {
//         const scroll = new Scroll(page);
//         await page.waitForURL('https://www.bewakoof.com/');

//         const women = await page.locator("//a[.='Women']");
//         await women.click();

//         await expect(page).toHaveURL('https://www.bewakoof.com/campaign/womens-home');

//         scroll.scroll(1);
//         const bshirt = await page.locator("//img[@alt='Boyfriend T Shirts']");
//         await page.mouse.wheel(0, 1000);
//         await bshirt.click();

//         await page.waitForURL('https://www.bewakoof.com/women-boyfriend-tshirts?manufacturer_brand=bewakoof%C2%AE_bewakoof__air%C2%AE__1.0');
//         await page.mouse.wheel(0, 1000);
//         await page.waitForTimeout(5000);
//         scroll.scroll(4);
//         await page.waitForTimeout(5000);
//         await page.goBack();
//         await page.waitForTimeout(5000);

//         const fshirt = await page.locator("//img[@alt='Printed T-shirt']");
//         // await tshirt.scrollIntoViewIfNeeded();
//         await page.mouse.wheel(0, 1000);
//         await fshirt.click();

//         await page.waitForURL('https://www.bewakoof.com/women-printed-t-shirts?manufacturer_brand=bewakoof%C2%AE_bewakoof__air%C2%AE__1.0');
//         scroll.scroll(1);
//         await page.waitForTimeout(5000);
//         await page.goBack();
//         await expect(page).toHaveURL('https://www.bewakoof.com/campaign/womens-home');

//         const oshirt = await page.locator("//img[@alt='Oversized T- Shirts']");
//         // await tshirt.scrollIntoViewIfNeeded();
//         await page.mouse.wheel(0, 1000);
//         await oshirt.click();
//         await page.waitForURL('https://www.bewakoof.com/oversized-t-shirts-for-women?manufacturer_brand=bewakoof%C2%AE_bewakoof__air%C2%AE__1.0');
//         await page.mouse.wheel(0, 1000);
//         await page.waitForTimeout(5000);
//         scroll.scroll(3);
//         await page.waitForTimeout(5000);
//         await page.goBack();
//         await expect(page).toHaveURL('https://www.bewakoof.com/campaign/womens-home');
//     });
// });

test.describe('Add product to cart', () => {
    test('Add winter wear to cart', async({page}) => {
        await page.waitForURL('https://www.bewakoof.com/');

        const p_path = await page.locator("//img[@alt='Winterwearimage']");
        await p_path.click();
        await page.waitForTimeout(5000);

        const item = await page.locator("//a[@href='/p/mens-pink-oversized-hoodies-13-men']//h3[@class='brand-name  undefined']");
        await item.click();
        await page.waitForURL('https://www.bewakoof.com/p/mens-pink-oversized-hoodies-13-men');
        await page.locator("//span[.='M']").click();

        const add_cart = new addToCart(page);
        await add_cart.addCart();
        
    });

    test('Add Bestsellers to cart', async({page}) => {
        await page.waitForURL('https://www.bewakoof.com/');

        await page.locator("//img[@alt='Bestsellersimage']").click();
        await page.waitForTimeout(5000);
        await page.waitForURL("https://www.bewakoof.com/bestseller?sort=new");

        await page.locator("//a[@href='/p/men-black-01-itachi-of-sharingan-printed-sweatshirt']//div[@class='tag_label_plp']").click();
        await page.waitForTimeout(5000);

        await page.locator("//span[.='M']").click();

        const add_cart = new addToCart(page);
        await add_cart.addCart();
    });

    test('Add NewArrivals to Cart', async({page}) => {
        await page.waitForURL('https://www.bewakoof.com/');

        await page.locator("//img[@alt='New Arrivalsimage']").click();
        await page.waitForTimeout(5000);
        await page.waitForURL("https://www.bewakoof.com/new-arrivals?sort=new");

        await page.locator("div.plp-product-card:nth-child(2) a").click();
        await page.waitForTimeout(5000);

        await page.locator("//span[.='M']").click();

        const add_cart = new addToCart(page);
        await add_cart.addCart();
    });
});

// test.describe('Deleting Cart Item', () => {
//     test('Add a winterwear and delete', async({page}) => {
//         await page.waitForURL('https://www.bewakoof.com/');

//         const p_path = await page.locator("//img[@alt='Winterwearimage']");
//         await p_path.click();
//         await page.waitForTimeout(5000);

//         const item = await page.locator("//a[@href='/p/mens-pink-oversized-hoodies-13-men']//h3[@class='brand-name  undefined']");
//         await item.click();
//         await page.waitForURL('https://www.bewakoof.com/p/mens-pink-oversized-hoodies-13-men');
//         await page.locator("//span[.='M']").click();

//         const add_cart = new addToCart(page);
//         await add_cart.addCart();

//         await page.locator("//div[@id='testRemoveCart']").click();
//         await page.waitForTimeout(5000);
//     });

//     test('Add Bestseller to cart and delete', async({page}) => {
//         await page.waitForURL('https://www.bewakoof.com/');

//         await page.locator("//img[@alt='Bestsellersimage']").click();
//         await page.waitForTimeout(5000);
//         await page.waitForURL("https://www.bewakoof.com/bestseller?sort=new");

//         await page.locator("//a[@href='/p/men-black-01-itachi-of-sharingan-printed-sweatshirt']//div[@class='tag_label_plp']").click();
//         await page.waitForTimeout(5000);

//         await page.locator("//span[.='M']").click();

//         const add_cart = new addToCart(page);
//         await add_cart.addCart();

//         await page.locator("//div[@id='testRemoveCart']").click();
//         await page.waitForTimeout(5000);
//     });

//     test('Add newarrivals to cart and delete', async({page}) => {
//         await page.waitForURL('https://www.bewakoof.com/');

//         await page.locator("//img[@alt='New Arrivalsimage']").click();
//         await page.waitForTimeout(5000);
//         await page.waitForURL("https://www.bewakoof.com/new-arrivals?sort=new");

//         await page.locator("//a[@href='/p/womens-black-the-view-graphic-printed-oversized-t-shirt-women']//div[@class='tag_label_plp']").click();
//         await page.waitForTimeout(5000);

//         await page.locator("//span[.='M']").click();

//         const add_cart = new addToCart(page);
//         await add_cart.addCart();

//         await page.locator("//div[@id='testRemoveCart']").click();
//         await page.waitForTimeout(5000);
//     });
// });

test.describe('Searching a product', () =>{
    test('Searching a jacket', async({page}) => {
        await page.waitForURL('https://www.bewakoof.com/');

        const search = new Search(page);
        search.search_q("jacket", 3);
        await page.waitForTimeout(5000);
    });
});
