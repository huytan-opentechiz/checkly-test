// /**
//   * To learn more about Playwright Test visit:
//   * https://www.checklyhq.com/docs/browser-checks/playwright-test/
//   * https://playwright.dev/docs/writing-tests
//   */
// import { PlaywrightTestConfig } from "@playwright/test"
// const { expect, test } = require("@playwright/test")
// const { chromium, devices } = require("playwright")

// // Set the action timeout to 10 seconds to quickly identify failing actions.
// // By default Playwright Test has no timeout for actions (e.g. clicking an element).
// // Learn more here: https://www.checklyhq.com/docs/browser-checks/timeouts/
// const config = {
//   timeout: 120000,
//   use: {
//     actionTimeout: 30000
//   },
//   expect: {
//     timeout: 30000,
//   }
// }

// module.exports = config

// test("test", async ({ playwright }) => {
//   test.setTimeout(120000);
//   const browser = await playwright.chromium.launch({
//     args: ['--remote-debugging-port=9222'],
//   })

//   const context = await browser.newContext({
//     viewport: {
//       width: 320,
//       height: 568,
//     },
//   })

//   const page = await context.newPage({})
//   async function goToPageCompareHeight() {
//     // await page.goto(baseUrl)

//     await page.evaluate(() => window.scrollTo(0, 2000))
//     await page.waitForTimeout(1000);
//     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
//     await page.waitForTimeout(3000);
//     await page.evaluate(() => window.scrollTo(5000, 0))
//     await page.waitForTimeout(3000);
//     const pageHeight = await page.evaluate(() => {
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

//     console.log('The height of page: ' + pageHeight + ' pixels');
//     const diff1 = Math.abs(pageHeight - 13800);
//     console.log('difference compare to expect == ' + diff1 + ' pixels');
//     await expect(diff1).toBeLessThan(550);
//     const language = page.locator(
//       ".modal-content > div > div > div.geoip-btn-group > a.btn.btn-default.btn-block.btn-stay-here.geoip-close"
//     )
//     // if (await language.isVisible()) {
//     //   await expect(language).toBeVisible()
//     //   await language.click()
//     // }
//     // const cookie = page.locator("#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save")
//     // if (await cookie.isVisible()) {
//     //   await expect(cookie).toBeVisible()
//     //   await cookie.click()
//     // }
//   }

//   // await goToPageCompareHeight("https://www.glamira.com.co/glamira-bracelet-tanel.html?alloy=white_red-375&stone1=diamond-Brillant&utm_source=monitoring&no_cache=1")
//   await page.goto("https://www.glamira.md/glamira-pendant-elsie.html?alloy=red_white-585&stone1=blackdiamond?bypass_varnish=1", { waitUntil: 'domcontentloaded' });
//   await goToPageCompareHeight()
//   const cookie = page.locator("#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save")
//   if (await cookie.isVisible()) {
//     await expect(cookie).toBeVisible()
//     await cookie.click()
//   }
//   await page.goto("https://www.glamira.md", { waitUntil: 'domcontentloaded' });
//   await page.evaluate(() => window.scrollTo(0, 2000))
//   await page.waitForTimeout(3000);
//   await page.evaluate(() => window.scrollTo(5000, 0))
//   await page.waitForTimeout(3000);
//   if (await cookie.isVisible()) {
//     await expect(cookie).toBeVisible()
//     await cookie.click()
//   }
//   await page.click("//a[contains(@class,'main menu_node_33366__link')]");
//   await page.waitForSelector("//div[@data-content-type='button-item']//span[text()='Coliere']")
//   await page.click("//div[@data-content-type='button-item']//span[text()='Coliere']")
//   await page.waitForLoadState('load');
//   await page.evaluate(() => window.scrollTo(0, 550))
//   await page.waitForTimeout(500);
//   await page.click("//button[@class='btn__mb__filter']")
//   await page.waitForLoadState('load');
//   await page.waitForTimeout(300);
//   await page.click("//div[@id='content_filter_more_selected']//li[@class='item label  filter-diamonds']//a[text()='Diamant']")
//   await page.click("//div[@id='content_filter_more_selected']//label[text()='Diamant Negru']")
//   await page.waitForLoadState('load');
//   await page.click("//div[@id='content_filter_more_selected']//div[@class='action action-apply-filter']")
//   await page.reload();
//   await page.waitForLoadState('load');
//   const price = await page.locator("//h2[contains(text(),'Elsie')]//following::span[@class='price'][1]").textContent()
//   await page.locator("//h2[contains(text(),'Elsie')]").click()
//   await page.waitForLoadState('load');

//   await goToPageCompareHeight()
//   const price1 = await page.locator("//div[@class='main-price-box promo-checking  ']//span[@class='price']").textContent()
//   console.log('price:' + price + ' price1:' + price1);
//   await expect(price).toEqual(price1)
//   const canoical = page.locator("//link[@rel='canonical']")
//   const hreflang = page.locator("(//link[@hreflang='ro-MD'])")
//   const linkCanoical = await canoical.getAttribute("href")
//   const linkHref = await hreflang.getAttribute("href")
//   await expect(linkCanoical).toEqual("https://www.glamira.md/glamira-pendant-elsie.html?alloy=red_white-585&stone1=blackdiamond")
//   await expect(linkCanoical).toEqual(linkHref)

//     // check price range
//   await page.evaluate(() => window.scrollTo(0, 300))
//   await page.waitForTimeout(500);
//   const priceRange = await page.locator("//div[@class='quick-configuration-wrap mobile ']//span").textContent()
//   const minPrice = priceRange.substring(0, priceRange.indexOf("-") - 1);
//   const maxPrice = priceRange.substring(priceRange.indexOf("-") + 2, priceRange.size);
//   console.log('Min Price: ' + minPrice + '  Max price: ' + maxPrice);
//   await page.locator("//div[@class='quick-configuration-wrap mobile ']//div[@class='quick-configuration']").click()
//   await page.waitForTimeout(500);
//   await page.locator("(//div[@class='configuration-content']//label[@class='item-label'])[2]").click()
//   await expect(maxPrice).toEqual(await page.locator("//div[@class='product-info-price']//span[@data-price-type='finalPrice']//span").textContent())
//   await page.waitForTimeout(500);
//   await page.locator("(//div[@class='configuration-content']//label[@class='item-label'])[3]").click()
//   await expect(minPrice).toEqual(await page.locator("//div[@class='product-info-price']//span[@data-price-type='finalPrice']//span").textContent())

//   // Add to cart
//   await page.locator("#product-addtocart-button > span").click()
//   const success = page.locator("//div[@class='message-success success message']")
//   await success.waitFor({ state: "visible" })
//   await page.waitForTimeout(1500);
//   await page.locator("#minicart-content-wrapper > div > div.popup-header > div").click()
//   await page.waitForTimeout(1500);
//   await page.waitForSelector("a.action.showcart");
//   await page.locator("a.action.showcart").click()

//   const miniCart = "#html-body > div.modals-wrapper > aside.modal-slide.minicart.modal-sm._inner-scroll._show > div > div div > div.block-content > div.block-footer > div.actions > div.primary > a"
//   await page.waitForSelector(miniCart);
//   await page.locator(miniCart).click()
//   await page.waitForLoadState('load');
//   const checkout = "#maincontent > div.columns > div > div.cart-container > div > ul > li > button"
//   await page.waitForSelector(checkout);
//   await page.waitForTimeout(500);
//   //await expect(checkout).toBeVisible()
//   await page.locator(checkout).click()
//   await page.waitForSelector("#checkout-login-email");
//   const username = page.locator("#checkout-login-email")
//   //await expect(username).toBeVisible()
//   await username.fill("ly+md@onlinebizsoft.com")
//   await page.locator("#checkout-login-password").fill("Linh@123")
//   await page
//     .locator(
//       "#form-login > fieldset > div.actions-toolbar > div.primary > button"
//     )
//     .click()

//   const shipment = "#login-address > div.checkout-step-form.login-address-form > div.step-content > div > form > div > div > button"

//   await page.waitForSelector(shipment);

//   //await expect(shipment).toBeVisible()
//    await page.locator(shipment).click()
//   await page.waitForLoadState('load');
//   // await page.locator( "#shipping > div.step-content > form > div > div > button").click()
//   // await page.waitForLoadState('load');
//   // await page.waitForTimeout(1000);
//   // await page.waitForSelector("//label[@for='stripe_payments']");
//   // await page.locator( "//label[@for='stripe_payments']").click()
//   // await page.waitForLoadState('load');
//   // await page.waitForTimeout(5000);
//   // expect(await page.frameLocator("iframe").locator('#Field-numberInput').count()).toBe(1);

//   await page
//     .locator(
//       "span.icon.icon-arrow-left"
//     )
//     .click()
//   await page.waitForTimeout(1000)

//   await page
//     .locator(
//       "a.action.action-delete.delete-cart-item-btn"
//     )
//     .click()

//   await page.locator("button.action.primary.delete-cart").click()
//   await page.screenshot({ path: "screenshot.jpg" })

// })

//DONE
import { PlaywrightTestConfig } from "@playwright/test"
import { test, expect } from "@playwright/test"

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
  test.setTimeout(240000)
  await page.setViewportSize({ width: 350, height: 768 })
  // khai báo các locator
  const userName = "cuong+uk@onlinebizsoft.com"
  const password = "Duccuong7."
  const titleRemoveSuccess = "Shopping Bag is Empty" // thay text theo ngôn ngữ store ( giỏ hàng đang trống)
  const URL_STORE = "https://www.glamira.co.uk/" // thay url store
  const URL_PRODUCT_PAGE = "https://www.glamira.co.uk/diamond-rings/"
  const URL_CHECK_OUT_CART = "https://www.glamira.co.uk/checkout/cart/"
  const URL_CHECK_OUT_LOGIN_PAGE =
    "https://www.glamira.co.uk/checkout/#login-address"
  const URL_CHECK_OUT_SHIPPING = "https://www.glamira.it/checkout/#shipping"
  const BUTTON_ACCEPT_LANGUAGE = await page.locator(
    "//a[@class='btn btn-default btn-block btn-stay-here geoip-close']",
  ) // thay text theo ngôn ngữ store
  const BUTTON_ACCEPT_COOKIE = await page.locator(
    "//button[text()='Accept All Cookies']",
  ) // thay text theo ngôn ngữ store
  const BUTTON_JEWELLERY = await page.locator("//div[@class='top-menu']//li[1]")
  const BUTTON_ALL_WOMEN_JEWELLERY = await page.locator(
    'a.pagebuilder-button-link[href="https://www.glamira.co.uk/women/"]',
  ) // thay text theo ngôn ngữ store
  const BUTTON_VIEW_All_RINGS = await page.locator(
    "//span[text()='View All Rings']",
  ) // thay text theo ngôn ngữ store
  const TEXT_PRICE_PRODUCTION_LISTING_PAGE = await page.locator(
    "//span[@id='product-price-115482']//span[@class='price']",
  )
  const PRODUCTION_LISTING_PAGE = await page.locator(
    "//h2[text()=' Ring Soderman']",
  ) // thay text theo ngôn ngữ store hãy lấy đúng sản phẩm tôi so sánh giá ở trên
  const BUTTON_CONFIG_PRICE_PRODUCT_PAGE = await page.locator(
    "//div[@class='product-add-form']//div[@class='quick-configuration']//div/span",
  )
  const MIN_PRICE = await page.locator(
    "//div[@class='configuration-content']//ul/li[3]",
  )
  const MAX_PRICE = await page.locator(
    "//div[@class='configuration-content']//ul/li[2]",
  )
  const MOST_POPULAR_PRICE = await page.locator(
    "//div[@class='configuration-content']//ul/li[1]",
  )
  const DROPDOWN_CHOICE_SIZE = await page.locator(
    "//div[@class='dropdown-input sprite-bf']",
  )
  const CHOICE_SIZE_RING = await page.locator(
    "//ul[@class='option-list']//li[@class='item choice  ']//span[text()='15,9']",
  )
  const BUTTON_ADD_TO_SHOPPING = await page.locator(
    "//div[@class='box-tocart']//button[@type= 'submit']",
  )
  const MESSAGE_ADD_SUCCESS = await page.locator(
    "//div[@class='message-success success message']",
  )
  const BUTTON_CLOSE = await page.locator("//div[@class='close']")
  const BUTTON_MINI_CARD = await page.locator("//li[@class='minicart-wrapper']")
  const BUTTON_VIEW_BAG = await page.locator(
    "//a[@class='action primary large full-w viewcart']",
  )
  const BUTTON_PROCESS_TO_CHECKOUT = await page.locator(
    "//ul[@class='checkout methods items checkout-methods-items']//button[@data-role='proceed-to-checkout']",
  )
  const INPUT_EMAIL = await page.locator("#checkout-login-email")
  const INPUT_PASSWORD = await page.locator("#checkout-login-password")
  const LOGIN_BUTTON = await page.locator("button.action.login.primary")
  const BUTTON_PROCESS = await page.locator(
    "#login-address > div.checkout-step-form.login-address-form > div.step-content > div > form > div > div > button",
  )
  const BUTTON_PROCESS_SHIPPING = await page.locator(
    '//*[@id="shipping"]/div[3]/form/div/div/button',
  )
  const PAYMENT = await page.locator("#checkout-step-payment")
  const BUTTON_GO_BACK = await page.locator(
    "//a[@class='actions action-back-to-cart']",
  )
  const BUTTON_REMOVE = await page.locator(
    "//a[@class= 'action action-delete delete-cart-item-btn']",
  )
  const BUTTON_YES_REMOVE = await page.locator(
    "//button[@class='action primary delete-cart']",
  )
  const PAGE_TITLE = await page.locator(
    "//main[@id='maincontent']//div[@class='page-title']//h1",
  )
  // đo độ dài web và compare
  async function compareHeightPage() {
    try {
      await page.evaluate(() => window.scrollTo(0, 1000))
      await page.waitForTimeout(800)
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
      await page.waitForTimeout(1000)
      await page.evaluate(() => window.scrollTo(0, 5000))
      await page.waitForTimeout(800)
      await page.evaluate(() => window.scrollTo(0, -6000))

      const pageHeight = await page.evaluate(() => {
        return Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight,
        )
      })
      console.log("Chiều cao của trang là: " + pageHeight + " pixels")
      const difference = Math.abs(pageHeight - 8900)
      console.log("Pixel sai lệch so với mong đợi = " + difference)
      await expect(difference).toBeLessThan(700)
    } catch (error) {
      console.error("Kiểm tra chiều cao không thành công:", error)
      // Không throw lại lỗi để tiếp tục thực hiện các bước khác
    }
  }
  // chờ và click
  async function waitAndClick(locator) {
    await page.waitForLoadState("domcontentloaded")
    await page.waitForLoadState("load")
    await locator.waitFor({ state: "visible" })
    page.waitForTimeout(500)
    await locator.click()
    console.log("CLICK : " + locator)
  }
  async function clickIfVisible(locator) {
    await locator.page().waitForTimeout(5000)
    await page.waitForLoadState("domcontentloaded")
    await page.waitForLoadState("load")
    // Kiểm tra xem phần tử có hiển thị không
    if (await locator.isVisible()) {
      await locator.click()
      console.log(`Clicked on element: ${locator}`)
    } else {
      console.log(`Element not visible: ${locator}. Skipping click.`)
    }
  }
  async function waitAndFill(locator, text) {
    await page.waitForLoadState("domcontentloaded")
    await page.waitForLoadState("load")
    await locator.fill(text)
  }

  // so sánh url
  async function compareUrl(baseUrl) {
    await page.waitForLoadState("load")
    await page.waitForTimeout(2000)
    const currentUrl = await page.url()
    console.log("URL hiện tại : " + currentUrl)
    await expect(baseUrl).toEqual(currentUrl)
  }
  // Go to home page
  async function goToHomePage() {
    await page.goto(URL_STORE)
  }
  async function clickAcceptLanguageAndCookie() {
    await clickIfVisible(BUTTON_ACCEPT_LANGUAGE)
    await clickIfVisible(BUTTON_ACCEPT_COOKIE)
  }
  async function clickButtonJewelleryLeftCornerOfThePage() {
    await waitAndClick(BUTTON_JEWELLERY)
  }
  async function clickButtonAllWomenJewellery() {
    await waitAndClick(BUTTON_ALL_WOMEN_JEWELLERY)
  }
  async function clickButtonViewAllRings() {
    await waitAndClick(BUTTON_VIEW_All_RINGS)
  }
  async function checkUrlThatNavigatesToTheProductPage() {
    await compareUrl(URL_PRODUCT_PAGE)
  }
  // có thể chọn 1 sản phẩm bất kỳ nên xpath để chung là TEXT_PRICE_PRODUCTION_LISTING_PAGE
  async function clickProductAndComparePriceOnListingPageAndProductPage() {
    await TEXT_PRICE_PRODUCTION_LISTING_PAGE.scrollIntoViewIfNeeded()
    const textPriceListingPage =
      await TEXT_PRICE_PRODUCTION_LISTING_PAGE.textContent()
    console.log("Price Listing page : " + textPriceListingPage)
    await waitAndClick(PRODUCTION_LISTING_PAGE)
    // xpath price 2 page giong nhau
    const textPriceProductPage =
      await TEXT_PRICE_PRODUCTION_LISTING_PAGE.textContent()
    console.log("Price Product Page : " + textPriceProductPage)
    await expect(textPriceListingPage).toBe(textPriceProductPage)
  }
  async function CheckHreflang() {
    const baseUrl = await page.evaluate(() => document.location.href)
    console.log("Current url: " + baseUrl)
    const canoical = page.locator("//link[@rel='canonical']")
    const hreflang = page.locator("//link[@hreflang='lt-LT']")
    const linkCanoical = await canoical.getAttribute("href")
    const linkHref = await hreflang.getAttribute("href")
    await expect(linkCanoical).toEqual(baseUrl)
    // await expect(linkCanoical).toEqual(linkHref)
  }
  async function checkLowestAndHighestPriceAndChoiceMostPopular() {
    // await BUTTON_CONFIG_PRICE_PRODUCT_PAGE.scrollIntoViewIfNeeded();
    const priceRange = await BUTTON_CONFIG_PRICE_PRODUCT_PAGE.textContent()
    const minPrice = priceRange?.substring(0, priceRange.indexOf("-") - 1)
    const maxPrice = priceRange?.substring(
      priceRange.indexOf("-") + 2,
      priceRange.length,
    )
    console.log("min: " + minPrice + "max: " + maxPrice)
    await waitAndClick(BUTTON_CONFIG_PRICE_PRODUCT_PAGE)
    await waitAndClick(MIN_PRICE)
    await page.waitForTimeout(1000)
    await expect(minPrice).toEqual(
      await TEXT_PRICE_PRODUCTION_LISTING_PAGE.textContent(),
    )
    await waitAndClick(MAX_PRICE)
    await page.waitForTimeout(1000)
    await expect(maxPrice).toEqual(
      await TEXT_PRICE_PRODUCTION_LISTING_PAGE.textContent(),
    )
    await waitAndClick(MOST_POPULAR_PRICE)
    await page.reload()
  }
  async function selectYourSize() {
    await DROPDOWN_CHOICE_SIZE.scrollIntoViewIfNeeded()
    await waitAndClick(DROPDOWN_CHOICE_SIZE)
    await waitAndClick(CHOICE_SIZE_RING)
  }
  async function clickButtonAddToShoppingBagAndCheckAddSuccess() {
    await page.waitForLoadState("domcontentloaded")
    await page.waitForLoadState("load")
    await waitAndClick(BUTTON_ADD_TO_SHOPPING)
    await page.waitForLoadState("domcontentloaded")
    await page.waitForLoadState("load")
    // Chờ cho thông báo thành công xuất hiện
    await MESSAGE_ADD_SUCCESS.waitFor({ state: "visible" })
    const successMessage = await MESSAGE_ADD_SUCCESS.textContent()
    console.log(successMessage) // In ra thông báo thành công
  }
  async function ClickMiniCart() {
    await waitAndClick(BUTTON_CLOSE)
    BUTTON_MINI_CARD.scrollIntoViewIfNeeded()
    await waitAndClick(BUTTON_MINI_CARD)
  }
  async function ClickButtonViewBag() {
    // await waitAndClick(BUTTON_VIEW_BAG);
    page.goto(URL_CHECK_OUT_CART)
    await page.waitForLoadState("load")
    await page.waitForTimeout(5000)
    await page.waitForURL(URL_CHECK_OUT_CART)
  }
  async function ClickButtonProceedToCheckout() {
    await page.waitForLoadState("load")
    await waitAndClick(BUTTON_PROCESS_TO_CHECKOUT)
  }
  // bao gồm steps check url navigates checkout login
  async function InputEmailPasswordAndClickButtonLogin() {
    await page.waitForLoadState("load")
    await waitAndFill(INPUT_EMAIL, userName)
    await waitAndFill(INPUT_PASSWORD, password)
    await compareUrl(URL_CHECK_OUT_LOGIN_PAGE)
    await LOGIN_BUTTON.click()
  }
  async function ClickProcessAndCheckPayment() {
    await page.waitForLoadState("load")
    await BUTTON_PROCESS.waitFor({ state: "visible" })
    await page.waitForTimeout(1300)
    await waitAndClick(BUTTON_PROCESS)
    await BUTTON_PROCESS_SHIPPING.waitFor({ state: "visible" })
    await waitAndClick(BUTTON_PROCESS_SHIPPING)
    await expect(PAYMENT).toBeVisible()
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
    const pageTitle = await PAGE_TITLE.textContent()
    await expect(titleRemoveSuccess).toEqual(pageTitle)
  }

  await goToHomePage()
  await compareHeightPage()
  await clickAcceptLanguageAndCookie()
  await clickButtonJewelleryLeftCornerOfThePage()
  await clickButtonAllWomenJewellery()
  await clickButtonViewAllRings()
  await checkUrlThatNavigatesToTheProductPage()
  await clickProductAndComparePriceOnListingPageAndProductPage()
  await CheckHreflang()
  await checkLowestAndHighestPriceAndChoiceMostPopular()
  await selectYourSize()
  await clickButtonAddToShoppingBagAndCheckAddSuccess()
  // await ClickMiniCart();
  await ClickButtonViewBag()
  await ClickButtonProceedToCheckout()
  await InputEmailPasswordAndClickButtonLogin()
  await ClickProcessAndCheckPayment()
  await navigatesToPageCheckoutCartAndRemoveProduct()
  await removeProductSuccess()
})
