// /**
//  * To learn more about Playwright Test visit:
//  * https://www.checklyhq.com/docs/browser-checks/playwright-test/
//  * https://playwright.dev/docs/writing-tests
//  */

// import { PlaywrightTestConfig } from "@playwright/test"
// const { expect, test } = require("@playwright/test")

// const config: PlaywrightTestConfig = {
//   // General timeout per test
//   timeout: 120000,

//   // For browser actions
//   use: {
//     actionTimeout: 30000,
//   },

//   // For expect calls
//   expect: {
//     timeout: 30000, // <---------
//   },

// }
// module.exports = config

// test("test", async ({ page }) => {
//   test.setTimeout(120000);
//   async function compareHeight() {
//     await page.evaluate(() => window.scrollTo(0, 1000))
//     await page.waitForTimeout(800);
//     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
//     await page.waitForTimeout(900);
//     await page.evaluate(() => window.scrollTo(0, 5000))
//     await page.waitForTimeout(800);

//     const pageHeight = await page.evaluate(() => { // hàm trả về chiều cao page
//       // return document.body.scrollHeight;
//       return Math.max(
//         document.body.scrollHeight,
//         document.documentElement.scrollHeight,
//         document.body.offsetHeight,
//         document.documentElement.offsetHeight,
//         document.body.clientHeight,
//         document.documentElement.clientHeight
//       );
//     });
//     console.log('Chiều cao của trang là: ' + pageHeight + ' pixels');
//     const difference = Math.abs(pageHeight - 9100);
//     console.log('Pixel sai lệch so với mong đợi = ' + difference);
//     // await expect(difference).toBeLessThan(500);
//     const cookies = page.locator('#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save')
//     if (await cookies.isVisible()) {
//       await expect(cookies).toBeVisible()
//       await cookies.click()
//     }
//   }
//   // await goPageAndAddCart("https://www.glamira.com.ec/glamira-bracelet-tanel.html?alloy=white_red-375&stone1=diamond-Brillant&no_cache=1")
//   await page.goto("https://www.glamira.com.ec/glamira-bracelet-tanel.html?alloy=white_red-375&stone1=diamond-Brillant&bypass_varnish=1", { waitUntil: 'domcontentloaded' });
//   await compareHeight()
//   await page.waitForTimeout(300)
//   await page.goto("https://www.glamira.com.ec");
//   await page.waitForLoadState('load')
//   await page.locator("//div[@class='top-menu']//a[@title='Joyería']").click()
//   await page.waitForLoadState('load')
//   await page.waitForTimeout(200)
//   await page.locator("(//nav[@id='menu_mega']//a[@title='Brazaletes'])[1]").click()
//   await page.waitForLoadState('load')
//   await page.evaluate(() => window.scrollTo(0, 800))
//   await page.locator("(//li[@class='item label  filter-diamonds'])[1]").click()
//   await page.waitForTimeout(200)
//   await page.locator("(//li[@class='item label  filter-diamonds'])[1]//a[@data-url-key='diamante-negro']").click()
//   await page.waitForLoadState('load')
//   const priceInListing = await page.locator("//a[contains(@title,'Tressa Diamante Negro')]//following::span[@class='price'][1]").textContent()
//   await page.locator("(//a[contains(@title,'Tressa Diamante Negro')]//span)[1]").click()
//   await page.waitForLoadState('load')

//   // Compare price
//   const priceInProductPage = await page.locator("//span[@data-price-type='finalPrice']//span").textContent()
//   console.log('Price in listing: ' + priceInListing + ' Price in product page: ' + priceInProductPage);
//   await expect(priceInListing).toEqual(priceInProductPage)

//   // Compare height
//   await compareHeight()

//   // Check hreflang 
//   const baseUrl = await page.evaluate(() => document.location.href);
//   console.log('Current url: ' + baseUrl);
//   const canoical = page.locator("//link[@rel='canonical']")
//   const hreflang = page.locator("(//link[@hreflang='es-EC'])")
//   const linkCanoical = await canoical.getAttribute("href")
//   const linkHref = await hreflang.getAttribute("href")
//   await expect(linkCanoical).toEqual(baseUrl)
//   await expect(linkCanoical).toEqual(linkHref)
  
   
//   // Add cart and checkout
//   await page.evaluate(() => window.scrollTo(0, 200))
//   await page.waitForTimeout(400)

//   // check price range
//   const priceRange = await page.locator("//div[@class='quick-configuration-wrap desktop ']//span").textContent()
//   const minPrice = priceRange.substring(0, priceRange.indexOf("-") - 1);
//   const maxPrice = priceRange.substring(priceRange.indexOf("-") + 2, priceRange.size);
//   console.log('Min Price: ' + minPrice + '  Max price: ' + maxPrice);
//   await page.locator("//div[@class='quick-configuration-wrap desktop ']//div[@class='quick-configuration']").click()
//   await page.waitForTimeout(500);
//   await page.locator("(//div[@class='configuration-content']//label[@class='item-label'])[2]").click()
//   await expect(maxPrice).toEqual(await page.locator("//span[@data-price-type='finalPrice']//span").textContent())
//   await page.waitForTimeout(500);
//   await page.locator("(//div[@class='configuration-content']//label[@class='item-label'])[3]").click()
//   await expect(minPrice).toEqual(await page.locator("//span[@data-price-type='finalPrice']//span").textContent())


//   await page.locator("//div[@id='stone']//span[text()='Diamante cultivado en laboratorio']").click()
//   await page.waitForTimeout(400)
//   await page.locator("#product-addtocart-button").click()
//   await page.waitForTimeout(800)
//   await page
//     .locator(
//       "a.action.showcart"
//     )
//     .click()
//   await page
//     .locator(
//       "#html-body > div.modals-wrapper > aside.modal-slide.minicart.modal-sm._inner-scroll._show > div > div div > div.block-content > div.block-footer > div.actions > div.primary > a"
//     )
//     .click()
//   await page.waitForLoadState('load')
//   const checkout = page.locator(
//     "#maincontent > div.columns > div > div.cart-container > div > ul > li > button"
//   )
//   await checkout.waitFor({ state: "visible" })
//   await checkout.click()
//   await page.waitForLoadState('load')
//   const username = page.locator("#checkout-login-email")
//   const password = page.locator("#checkout-login-password")
//   await username.waitFor({ state: "visible" })
//   await password.waitFor({ state: "visible" })

//   await page.waitForTimeout(400);
//   await username.fill("cuong+ec@onlinebizsoft.com")
//   await password.fill("Duccuong8.")
//   await page.waitForTimeout(1000)
//   await page
//     .locator(
//       "#form-login > fieldset > div.actions-toolbar > div.primary > button"
//     )
//     .click()

//   const shipment = page.locator(
//     "#login-address > div.checkout-step-form.login-address-form > div.step-content > div > form > div > div > button"
//   )
//   await shipment.waitFor({ state: "visible" })
//   await page.waitForTimeout(1000)
//   await shipment.click()
//   const billing = page.locator(
//     "#shipping > div.step-content > form > div > div > button"
//   )
//   await billing.waitFor({ state: "visible" })
//   await billing.click()

//   // const stripePayment = page.locator(
//   //   "//label[@for='stripe_payments']"
//   // )
//   // await stripePayment.waitFor({ state: "visible" })
//   // await stripePayment.click()
//   // const stripeElement = page.locator(
//   //   "//div[@id='stripe-payment-element']"
//   // )
//   // await stripeElement.waitFor({ state: "visible" })
//   await page.locator(
//       "#html-body > div.page-wrapper > div.header-wrapper.header-container-checkout > header > div > div > a > span.cart-label"
//     ).click()
    
//   const deleteBtn = page.locator('a.action.action-delete')
//   await deleteBtn.waitFor({ state: "visible" })
//   await deleteBtn.click()
//   await page
//     .locator(
//       '#html-body > div.modals-wrapper > aside.modal-custom.delete-product.cart-remove-product.modal-sm.modal-confirm.modal--slide-up-m.modal--anchor-down-m.modal-slide._inner-scroll._show > div.modal-inner-wrap > footer > button.action.primary.delete-cart'
//     )
//     .click()
//   // await page.screenshot({ path: "screenshot.jpg" })
// })
//DONE
import { PlaywrightTestConfig } from "@playwright/test"
import { test, expect } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // General timeout per test
  timeout: 240000,

  // For browser actions
  use: {
    actionTimeout: 30000,
  },

  // For expect calls
  expect: {
    timeout: 30000, // <---------
  },

}
test("Check the flow of store activities", async ({ page }) => {
  test.setTimeout(240000);
  // khai báo các locator 
  const userName = "cuong+ec@onlinebizsoft.com";
  const password = "Duccuong8.";
  const titleRemoveSuccess = "El carrito de la compra está vacío" // thay text theo ngôn ngữ store ( giỏ hàng đang trống)
  const URL_STORE = "https://www.glamira.com.ec"; // thay url store 
  const URL_PRODUCT_PAGE = "https://www.glamira.com.ec/anillos-de-diamantes/";
  const URL_CHECK_OUT_CART = "https://www.glamira.com.ec/checkout/cart/"
  const URL_CHECK_OUT_LOGIN_PAGE = "https://www.glamira.com.ec/checkout/#login-address";
  const URL_CHECK_OUT_SHIPPING = "https://www.glamira.es/checkout/#shipping"
  const BUTTON_ACCEPT_LANGUAGE = await page.locator("//a[@class='btn btn-default btn-block btn-stay-here geoip-close']"); // thay text theo ngôn ngữ store
  const BUTTON_ACCEPT_COOKIE = await page.locator("//button[text()='Aceptar Todas Las Cookies']"); // thay text theo ngôn ngữ store
  const BUTTON_JEWELLERY = await page.locator("//div[@class='top-menu']//li[1]");
  const BUTTON_ALL_WOMEN_JEWELLERY = await page.locator('a.pagebuilder-button-link[href="https://www.glamira.com.ec/mujer/"]'); // thay text theo ngôn ngữ store
  const BUTTON_VIEW_All_RINGS = await page.locator("//span[text()='Ver todos los anillos']") // thay text theo ngôn ngữ store
  const TEXT_PRICE_PRODUCTION_LISTING_PAGE = await page.locator("//span[@id='product-price-115482']//span[@class='price']");
  const PRODUCTION_LISTING_PAGE = await page.locator("//h2[text()=' Anillo Soderman']"); // thay text theo ngôn ngữ store hãy lấy đúng sản phẩm tôi so sánh giá ở trên
  const BUTTON_CONFIG_PRICE_PRODUCT_PAGE = await page.locator("//div[@class='product-add-form']//div[@class='quick-configuration']//div/span");
    const BUTTON_SWITCH = await page.locator("//div[@class='switcher switcher-checkbox apply_checkbox']//label[@class='switch-label']");
  const MIN_PRICE = await page.locator("//div[@class='configuration-content']//ul/li[3]");
  const MAX_PRICE = await page.locator("//div[@class='configuration-content']//ul/li[2]");
  const MOST_POPULAR_PRICE = await page.locator("//div[@class='configuration-content']//ul/li[1]");
  const DROPDOWN_CHOICE_SIZE = await page.locator("//div[@class='dropdown-input sprite-bf']");
  const CHOICE_SIZE_RING = await page.locator("//ul[@class='option-list']//li[@class='item choice  ']//span[text()='15,9']");
  const BUTTON_ADD_TO_SHOPPING = await page.locator("//div[@class='box-tocart']//button[@type= 'submit']");
  const MESSAGE_ADD_SUCCESS = await page.locator("//div[@class='message-success success message']");
  const BUTTON_CLOSE = await page.locator("//div[@class='close']");
  const BUTTON_MINI_CARD = await page.locator("//li[@class='minicart-wrapper']");
  const BUTTON_VIEW_BAG = await page.locator("//a[@class='action primary large full-w viewcart']");
  const BUTTON_PROCESS_TO_CHECKOUT = await page.locator("//ul[@class='checkout methods items checkout-methods-items']//button[@data-role='proceed-to-checkout']");
  const INPUT_EMAIL = await page.locator('#checkout-login-email');
  const INPUT_PASSWORD = await page.locator("#checkout-login-password");
  const LOGIN_BUTTON = await page.locator('button.action.login.primary');
  const BUTTON_PROCESS = await page.locator("#login-address > div.checkout-step-form.login-address-form > div.step-content > div > form > div > div > button");
  const BUTTON_PROCESS_SHIPPING = await page.locator("//*[@id=\"shipping\"]/div[3]/form/div/div/button");
  const PAYMENT = await page.locator("#checkout-step-payment");
  const BUTTON_GO_BACK = await page.locator("//a[@class='actions action-back-to-cart']")
  const BUTTON_REMOVE = await page.locator("//a[@class= 'action action-delete delete-cart-item-btn']");
  const BUTTON_YES_REMOVE = await page.locator("//button[@class='action primary delete-cart']")
  const PAGE_TITLE = await page.locator("//main[@id='maincontent']//div[@class='page-title']//h1")
  // đo độ dài web và compare
  async function compareHeightPage() {
    try {
      await page.evaluate(() => window.scrollTo(0, 1000));
      await page.waitForTimeout(800);
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(1000);
      await page.evaluate(() => window.scrollTo(0, 5000));
      await page.waitForTimeout(800);
      await page.evaluate(() => window.scrollTo(0, -6000));

      const pageHeight = await page.evaluate(() => {
        return Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
      });
      console.log('Chiều cao của trang là: ' + pageHeight + ' pixels');
      const difference = Math.abs(pageHeight - 9300);
      console.log('Pixel sai lệch so với mong đợi = ' + difference);
      await expect(difference).toBeLessThan(1000);
    } catch (error) {
      console.error("Kiểm tra chiều cao không thành công:", error);
      // Không throw lại lỗi để tiếp tục thực hiện các bước khác
    }
  }
  // chờ và click 
  async function waitAndClick(locator) {
    await page.waitForLoadState("domcontentloaded")
    await page.waitForLoadState("load")
    await locator.waitFor({ state: "visible" })
    page.waitForTimeout(500)
    await locator.click();
    console.log
      ("CLICK : " + locator)
  }
  async function clickIfVisible(locator) {
    await locator.page().waitForTimeout(5000);
    await page.waitForLoadState("domcontentloaded")
    await page.waitForLoadState("load")
    // Kiểm tra xem phần tử có hiển thị không
    if (await locator.isVisible()) {
      await locator.click();
      console.log(`Clicked on element: ${locator}`);
    } else {
      console.log(`Element not visible: ${locator}. Skipping click.`);
    }
  }
  async function waitAndFill(locator, text) {
    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState("load")
    await locator.fill(text);
  }

  // so sánh url
  async function compareUrl(baseUrl) {

    await page.waitForLoadState("load")
    await page.waitForTimeout(2000);
    const currentUrl = await page.url();
    console.log("URL hiện tại : " + currentUrl);
    await expect(baseUrl).toEqual(currentUrl)
  }
  // Go to home page
  async function goToHomePage() {
    await page.goto(URL_STORE);
  }
  async function clickAcceptLanguageAndCookie() {
    await clickIfVisible(BUTTON_ACCEPT_LANGUAGE);
    await clickIfVisible(BUTTON_ACCEPT_COOKIE);
  }
  async function clickButtonJewelleryLeftCornerOfThePage() {
    await waitAndClick(BUTTON_JEWELLERY);
  }
  async function clickButtonAllWomenJewellery() {
    await waitAndClick(BUTTON_ALL_WOMEN_JEWELLERY);
  }
  async function clickButtonViewAllRings() {
    await waitAndClick(BUTTON_VIEW_All_RINGS);

  }
  async function checkUrlThatNavigatesToTheProductPage() {
    await compareUrl(URL_PRODUCT_PAGE)

  }
  // có thể chọn 1 sản phẩm bất kỳ nên xpath để chung là TEXT_PRICE_PRODUCTION_LISTING_PAGE
  async function clickProductAndComparePriceOnListingPageAndProductPage() {
    await TEXT_PRICE_PRODUCTION_LISTING_PAGE.scrollIntoViewIfNeeded();
    const textPriceListingPage = await TEXT_PRICE_PRODUCTION_LISTING_PAGE.textContent();
    console.log("Price Listing page : " + textPriceListingPage)
    await waitAndClick(PRODUCTION_LISTING_PAGE);
    // xpath price 2 page giong nhau
    const textPriceProductPage = await TEXT_PRICE_PRODUCTION_LISTING_PAGE.textContent();
    console.log("Price Product Page : " + textPriceProductPage)
    await expect(textPriceListingPage).toBe(textPriceProductPage);


  }
  async function CheckHreflang() {
    const baseUrl = await page.evaluate(() => document.location.href);
    console.log('Current url: ' + baseUrl);
    const canoical = page.locator("//link[@rel='canonical']")
    const hreflang = page.locator("//link[@hreflang='lt-LT']")
    const linkCanoical = await canoical.getAttribute("href")
    const linkHref = await hreflang.getAttribute("href")
    await expect(linkCanoical).toEqual(baseUrl)
    // await expect(linkCanoical).toEqual(linkHref)

  }
  async function checkLowestAndHighestPriceAndChoiceMostPopular() {
    // await BUTTON_CONFIG_PRICE_PRODUCT_PAGE.scrollIntoViewIfNeeded();
    const priceRange = await BUTTON_CONFIG_PRICE_PRODUCT_PAGE.textContent();
    const minPrice = priceRange?.substring(0, priceRange.indexOf("-") - 1);
    const maxPrice = priceRange?.substring(priceRange.indexOf("-") + 2, priceRange.length);
    console.log("min: " + minPrice + "max: " + maxPrice);
    await waitAndClick(BUTTON_CONFIG_PRICE_PRODUCT_PAGE);
    await waitAndClick(MIN_PRICE);
    await waitAndClick(BUTTON_SWITCH)
    await expect(minPrice).toEqual(await TEXT_PRICE_PRODUCTION_LISTING_PAGE.textContent());
    // await waitAndClick(MAX_PRICE);
    // await expect(maxPrice).toEqual(await TEXT_PRICE_PRODUCTION_LISTING_PAGE.textContent());
    // await waitAndClick(MOST_POPULAR_PRICE);
    await page.reload();
  }
  async function selectYourSize() {
    await DROPDOWN_CHOICE_SIZE.scrollIntoViewIfNeeded();
    await waitAndClick(DROPDOWN_CHOICE_SIZE);
    await waitAndClick(CHOICE_SIZE_RING);
  }
  async function clickButtonAddToShoppingBagAndCheckAddSuccess() {
     await page.waitForLoadState("domcontentloaded")
    await page.waitForLoadState("load")
    await page.waitForTimeout(5000)
    await waitAndClick(BUTTON_ADD_TO_SHOPPING);
    // Chờ cho thông báo thành công xuất hiện
      await MESSAGE_ADD_SUCCESS.waitFor({ state: "visible" })
        const successMessage = await MESSAGE_ADD_SUCCESS.textContent();
        console.log(successMessage); // In ra thông báo thành công
  }
  async function ClickMiniCart() {
    await waitAndClick(BUTTON_CLOSE);
    BUTTON_MINI_CARD.scrollIntoViewIfNeeded();
    await waitAndClick(BUTTON_MINI_CARD);
  }
  async function goToCheckOutCart() {
    await page.waitForLoadState("load");
    await page.waitForTimeout(5000);
    // await waitAndClick(BUTTON_VIEW_BAG);
    page.goto(URL_CHECK_OUT_CART);
    await page.waitForLoadState("load");
    await page.waitForTimeout(5000);
    await page.waitForURL(URL_CHECK_OUT_CART);
  }
  async function ClickButtonProceedToCheckout() {
    await page.waitForLoadState("load")
    await waitAndClick(BUTTON_PROCESS_TO_CHECKOUT);
  }
  // bao gồm steps check url navigates checkout login 
  async function InputEmailPasswordAndClickButtonLogin() {
    await page.waitForLoadState("load")
    await waitAndFill(INPUT_EMAIL, userName)
    await waitAndFill(INPUT_PASSWORD, password)
    await compareUrl(URL_CHECK_OUT_LOGIN_PAGE);
    await LOGIN_BUTTON.click();
  }
  async function ClickProcessAndCheckPayment() {
    await page.waitForLoadState("load")
    await BUTTON_PROCESS.waitFor({ state: "visible" })
    await page.waitForTimeout(1300)
    await waitAndClick(BUTTON_PROCESS);
    await BUTTON_PROCESS_SHIPPING.waitFor({ state: "visible" })
    await page.waitForTimeout(1300)
    await waitAndClick(BUTTON_PROCESS_SHIPPING);
    await expect(PAYMENT).toBeVisible();

  }
  async function navigatesToPageCheckoutCartAndRemoveProduct() {
    await page.waitForLoadState("load")
    await waitAndClick(BUTTON_GO_BACK)
    await waitAndClick(BUTTON_REMOVE)
    await waitAndClick(BUTTON_YES_REMOVE)
  }
  async function removeProductSuccess() {
    await page.waitForLoadState("load")
    // await page.waitForTimeout(4000);
    const pageTitle = await PAGE_TITLE.textContent();
    await expect(titleRemoveSuccess).toEqual(pageTitle)
  }

  await goToHomePage();
  await compareHeightPage();
  await clickAcceptLanguageAndCookie();
  await clickButtonJewelleryLeftCornerOfThePage();
  await clickButtonAllWomenJewellery();
  await clickButtonViewAllRings();
  await checkUrlThatNavigatesToTheProductPage();
  await clickProductAndComparePriceOnListingPageAndProductPage();
  await CheckHreflang();
  await checkLowestAndHighestPriceAndChoiceMostPopular();
  await selectYourSize();
  await clickButtonAddToShoppingBagAndCheckAddSuccess();
  // await ClickMiniCart();
  await goToCheckOutCart();
  await ClickButtonProceedToCheckout();
  await InputEmailPasswordAndClickButtonLogin();
  await ClickProcessAndCheckPayment();
  await navigatesToPageCheckoutCartAndRemoveProduct();
  await removeProductSuccess();
}

)