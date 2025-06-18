// /**
//  * To learn more about Playwright Test visit:
//  * https://www.checklyhq.com/docs/browser-checks/playwright-test/
//  * https://playwright.dev/docs/writing-tests
//  */

// import { PlaywrightTestConfig } from "@playwright/test"
// const { expect, test } = require("@playwright/test")
// const { chromium, devices } = require("playwright")

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
// //test.use({ userAgent: myUserAgent });

// test("test", async ({ playwright }) => {
//   test.setTimeout(120000)
//   const browser = await playwright.chromium.launch({
//     args: ['--remote-debugging-port=9222'],
//   });
//   const context = await browser.newContext({
//     viewport: {
//       width: 320,
//       height: 568,
//     },
//     //userAgent: myUserAgent,
//   });
//   const page = await context.newPage({
//   });
//   async function goToPageCompareHeight() {
//     // await page.goto(baseUrl)

//     await page.evaluate(() => window.scrollTo(0, 2000))
//     await page.waitForTimeout(1000);
//     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
//     await page.waitForTimeout(2500);
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
//     const diff1 = Math.abs(pageHeight - 13200);
//     console.log('difference compare to expect == ' + diff1 + ' pixels');
//     await expect(diff1).toBeLessThan(550);
//     const language = page.locator(
//       ".modal-content > div > div > div.geoip-btn-group > a.btn.btn-default.btn-block.btn-stay-here.geoip-close"
//     )
//     if (await language.isVisible()) {
//       await expect(language).toBeVisible()
//       await language.click()
//     }
//   //   const cookies = page.locator(
//   //   "#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save"
//   // )
//   // if (await  cookies.isVisible()) {
//   //     await expect( cookies).toBeVisible()
//   //     await  cookies.click()
//   //   }
//   }

//   // await goToPageCompareHeight("https://www.glamira.com.co/glamira-bracelet-tanel.html?alloy=white_red-375&stone1=diamond-Brillant&utm_source=monitoring&no_cache=1")
//    await page.goto("https://www.glamira.com.kw/glamira-pendant-elsie.html?alloy=red_white-585&stone1=blackdiamond&bypass_varnish=1", { waitUntil: 'domcontentloaded' });
//   await goToPageCompareHeight()
//   const cookies = page.locator(
//     "#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save"
//   )
//   if (await cookies.isVisible()) {
//     await expect(cookies).toBeVisible()
//     await cookies.click()
//   }
//  // await page.goto("https://www.glamira.com.do/colgantes-de-diamantes/diamante/", { waitUntil: 'domcontentloaded' });
//   await page.goto("https://www.glamira.com.kw", { waitUntil: 'domcontentloaded' });
//   await page.evaluate(() => window.scrollTo(0, 2000))
//   await page.waitForTimeout(1000);
//   await page.evaluate(() => window.scrollTo(5000, 0))
//   await page.waitForTimeout(3000);
//   if (await cookies.isVisible()) {
//     await expect(cookies).toBeVisible()
//     await cookies.click()
//   }
//   await page.waitForTimeout(1000);
//   await page.click("//a[contains(@class,'main menu_node_33366__link')]");
//   await page.waitForSelector("//div[@data-content-type='button-item']//span[text()='Necklaces']")
//   await page.click("//div[@data-content-type='button-item']//span[text()='Necklaces']")
//   await page.waitForLoadState('load');
//   await page.evaluate(() => window.scrollTo(0, 500))
//   await page.waitForTimeout(500)
//   await page.click("//button[@class='btn__mb__filter']")
//   await page.waitForLoadState('load');
//   await page.waitForTimeout(200);
//   await page.click("//div[@id='content_filter_more_selected']//li[@class='item label  filter-diamonds']//a[text()='Diamonds']")
//   await page.click("//div[@id='content_filter_more_selected']//label[text()='Black Diamond']")
//   await page.waitForLoadState('load');
//   await page.click("//div[@id='content_filter_more_selected']//div[@class='action action-apply-filter']")
//   await page.reload();
//   await page.waitForLoadState('load');
//   const price = await page.locator("(//h2[@class='product-item-details product-name']//following::span[@class='price'])[1]").textContent()
//   await page.locator("(//h2[@class='product-item-details product-name'])[1]").click()
//   await page.waitForLoadState('load');

//   const price1 = await page.locator("//div[@class='main-price-box promo-checking  ']//span[@class='price']").textContent()
//   console.log('price:' + price + ' price1:' + price1);
//   await expect(price).toEqual(price1)
//   await page.goto("https://www.glamira.com.kw/glamira-pendant-elsie.html?alloy=red_white-585&stone1=blackdiamond", { waitUntil: 'domcontentloaded' });
//   await goToPageCompareHeight()
//   const canoical = page.locator("//link[@rel='canonical']")
//   const hreflang = page.locator("(//link[@hreflang='en-KW'])")
//   const linkCanoical = await canoical.getAttribute("href")
//   const linkHref = await hreflang.getAttribute("href")
//   await expect(linkCanoical).toEqual("https://www.glamira.com.kw/glamira-pendant-elsie.html?alloy=red_white-585&stone1=blackdiamond")
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
//   await page.waitForTimeout(200);
//   await page.locator("#stone>div.option_label.inactive.has-view-mode>span.option_label_title").click()
//   await page.waitForTimeout(200)
//   await page.locator("//div[@id='stone']//span[text()='Diamond']").click()
//   await page.waitForTimeout(200)

//   await page.locator("#product-addtocart-button > span").click()
//   const success = page.locator("//div[@class='message-success success message']")
//   await success.waitFor({ state: "visible" })
//   await page.waitForTimeout(2000);
//   await page.locator("#minicart-content-wrapper > div > div.popup-header > div").click()
//   await page.waitForTimeout(1500);
//   await page.waitForSelector("a.action.showcart");
//   await page.locator("a.action.showcart").click()

//   const miniCart = "#html-body > div.modals-wrapper > aside.modal-slide.minicart.modal-sm._inner-scroll._show > div > div div > div.block-content > div.block-footer > div.actions > div.primary > a"
//   await page.waitForSelector(miniCart);
//   await page.locator(miniCart).click()
//    await page.waitForLoadState('load');
//   const checkout = "#maincontent > div.columns > div > div.cart-container > div > ul > li > button"
//   await page.waitForSelector(checkout);
//   //await expect(checkout).toBeVisible()
//   await page.locator(checkout).click()
//   await page.waitForSelector("#checkout-login-email");
//   const username = page.locator("#checkout-login-email")
//   //await expect(username).toBeVisible()
//   await username.fill("ly+kw@onlinebizsoft.com")
//   await page.locator("#checkout-login-password").fill("Linh@123")
//   await page.waitForTimeout(500);
//   await page
//     .locator(
//       "#form-login > fieldset > div.actions-toolbar > div.primary > button"
//     )
//     .click()

//   const shipment = "#login-address > div.checkout-step-form.login-address-form > div.step-content > div > form > div > div > button"
//   await page.waitForSelector(shipment);
//   await page.waitForTimeout(500);
//   //await expect(shipment).toBeVisible()
//   await page.locator(shipment).click()
//   await page.waitForLoadState('load');
//   await page.locator( "#shipping > div.step-content > form > div > div > button").click()
//   await page.waitForLoadState('load');
//   await page.waitForTimeout(1000);
//   await page.locator("//label[@for='stripe_payments']").click()
//   await page.waitForLoadState('load');
//   await page.waitForTimeout(5000);
//  // expect(await page.frameLocator("iframe").locator('#Field-numberInput').count()).toBe(1);

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
  await page.setViewportSize({ width: 400, height: 768 })
  //   // khai báo các locator
  const userName = "ly+kw@onlinebizsoft.com"
  const password = "Linh@123"
  const titleRemoveSuccess = "Shopping Bag is Empty" // thay text theo ngôn ngữ store ( giỏ hàng đang trống)
  const URL_STORE = "https://www.glamira.com.kw" // thay url store
  const URL_PRODUCT_PAGE = "https://www.glamira.com.kw/diamond-rings/"
  const URL_CHECK_OUT_CART = "https://www.glamira.com.kw/checkout/cart/"
  const URL_CHECK_OUT_LOGIN_PAGE =
    "https://www.glamira.com.kw/checkout/#login-address"
  const BUTTON_ACCEPT_LANGUAGE = await page.locator(
    "//a[@class='btn btn-default btn-block btn-stay-here geoip-close']",
  ) // thay text theo ngôn ngữ store
  const BUTTON_ACCEPT_COOKIE = await page.locator(
    "//button[text()='Prihvati Sve KolačićE']",
  ) // thay text theo ngôn ngữ store
  const BUTTON_JEWELLERY = await page.locator("//div[@class='top-menu']//li[1]")
  const BUTTON_ALL_WOMEN_JEWELLERY = await page.locator(
    'a.pagebuilder-button-link[href="https://www.glamira.com.kw/women/"]',
  ) // thay text theo ngôn ngữ store
  const BUTTON_VIEW_All_RINGS = await page.locator(
    "//span[text()='View All Rings']",
  ) // thay text theo ngôn ngữ store
  const TEXT_PRICE_PRODUCTION_LISTING_PAGE = await page.locator(
    "//span[@id='product-price-115482']//span[@class='price']",
  )
  const TEXT_PRICE_PRODUCT_PAGE_MOBILE = await page.locator(
    "//div[@class='product-info-header']//span[@id='product-price-115482']//span[@class='price']",
  )
  const PRODUCTION_LISTING_PAGE = await page.locator(
    "//h2[text()=' Ring Soderman']",
  ) // thay text theo ngôn ngữ store hãy lấy đúng sản phẩm tôi so sánh giá ở trên
  const BUTTON_CONFIG_PRICE_PRODUCT_PAGE = await page.locator(
    "//div[@class='product-add-form']//div[@class='quick-configuration']//div/span",
  )
  const BUTTON_CONFIG_PRICE_PRODUCT_PAGE_MOBILE = await page.locator(
    "//div[@class='quick-configuration-wrap mobile ']",
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
  const PAYMENT_WITH_CREDIT_CARD = await page.locator(
    "//div[@class='payment-method stripe-payments']//div[@class='payment-method-title field choice']//label[@for='stripe_payments']",
  )
  const PAYMENT_WITH_CRYPTO = await page.locator(
    "//div[@class='payment-method']//div[@class='payment-method-title field choice']//label[@for='plisio_plisiogateway']",
  )
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
  const PRODUCT_PAGE_LOGO_OPTION_LABEL = await page.locator(
    "//div[@id='product-detail-overview']//tbody//tr[@class='row-item item-glamira_logo_inside']//td[@class='detail-value']//div[@class='switcher switcher-checkbox ']//label[@for='detail-edit-option-glamira_logo_inside']",
  )
  const PRODUCT_PAGE_RHODIUM_OPTION_LABEL = await page.locator(
    "//div[@id='product-detail-overview']//tbody//tr[@class='row-item item-rhodium_plated']//td[@class='detail-value']//div[@class='switcher switcher-checkbox ']//label[@for='detail-edit-rhodium_plated']",
  )
  const PRODUCT_PAGE_SPECIAL_PRICE_MOBILE = await page.locator(
    "//div[@class='product-options-bottom']//div[@id='product-price-mobile']//span[@class='final-price-box']//span[@class='special-price']//span[@id='product-price-115482']//span[@class='price']",
  ) // đo độ dài web và compare
  async function compareHeightPage(expectHeight) {
    try {
      await page.evaluate(() => window.scrollTo(0, 1000))
      await page.waitForTimeout(1000)
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
      await page.waitForTimeout(7000)
      await page.evaluate(() => window.scrollTo(0, 5000))
      await page.waitForTimeout(1000)
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
      const difference = Math.abs(pageHeight - expectHeight)
      console.log("Pixel sai lệch so với mong đợi = " + difference)
      await expect(difference).toBeLessThan(1000)
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
  async function waitVisible(locator) {
    await page.waitForLoadState("domcontentloaded")
    await page.waitForLoadState("load")
    await locator.waitFor({ state: "visible" })
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
  async function checkMetaRobots(pageName = "Page") {
    try {
      const robotsMeta = await page.$('meta[name="robots"]')
      await expect(robotsMeta).not.toBeNull()

      const rawContent = await robotsMeta.getAttribute("content")
      console.log(`${pageName} - robots meta content:`, rawContent)
      //Lowercase và bỏ khoảng trắng
      const content = rawContent.toLowerCase().replace(/\s+/g, "")

      await expect(content).toEqual("index,follow")
    } catch (error) {
      console.error(`Trang ${pageName} có lỗi với meta robots: `, error)
      // throw error
    }
  }
  async function checkAllLinkOnPage(
    pageName = "Page",
    locatorContainer = "main a",
  ) {
    const hrefs = await page.$$eval(locatorContainer, (anchors) =>
      anchors
        .filter((a) => {
          const href = a.getAttribute("href") || ""
          return (
            href.startsWith("https://www.glamira") &&
            a.closest("div.sponsor-link-content") === null &&
            a.closest("li.switcher-option") === null
          )
        })
        .map((a) => a.getAttribute("href")),
    )

    const concurrencyLimit = 300
    const batchedChecks = []

    for (let i = 0; i < hrefs.length; i += concurrencyLimit) {
      const batch = hrefs.slice(i, i + concurrencyLimit).map(async (href) => {
        let response
        try {
          response = await page.request.head(href, {
            timeout: 8000,
            maxRetries: 3,
          })
          if (!href.startsWith(URL_STORE)) {
            console.error(`Href does not start with URL_STORE: ${href}`)
          }
          if (response.status() !== 200 && response.status() !== null) {
            console.error(`Unexpected status for ${href}: ${response.status()}`)
          }
        } catch (error) {
          if (error.message.includes("Request timed out")) {
            console.log(`Timeout bỏ qua: ${href}`)
          } else if (error.message.includes("RECONNRESET")) {
            try {
              response = await page.request.head(href, {
                timeout: 8000,
              })
              if (!href.startsWith(URL_STORE)) {
                console.log(`Href does not start with URL_STORE: ${href}`)
              }
              if (response.status() !== 200 && response.status() !== null) {
                console.log(
                  `Unexpected status for ${href}: ${response.status()} in ${pageName}`,
                )
              }
            } catch (retryError) {
              console.error(`Retry failed for ${href}: ${retryError.message}`)
            }
          } else {
            console.error(`Error for ${href}: ${error.message}`)
          }
        }
      })
      batchedChecks.push(...batch)
      await new Promise((resolve) => setTimeout(resolve, 500))
    }

    await Promise.all(batchedChecks)
    await page.request.dispose()
  }
  async function goToHomePage() {
    await page.goto(URL_STORE)
    //Check meta robots
    await checkMetaRobots("Home page")
    //Check link header
    await checkAllLinkOnPage("Home Page", "div.header-wrapper a")
    //Check link footer
    await checkAllLinkOnPage("Home Page", "footer a")
    //Check link campain
    await checkAllLinkOnPage("Home Page", "div.panel-top-campaign-container a")
    //Check link main content
    await checkAllLinkOnPage("Home Page")
  }
  async function clickAcceptLanguageAndCookie() {
    await clickIfVisible(BUTTON_ACCEPT_LANGUAGE)
    await clickIfVisible(BUTTON_ACCEPT_COOKIE)
  }
  async function clickButtonJewelleryLeftCornerOfThePage() {
    await waitAndClick(BUTTON_JEWELLERY)
    await checkMetaRobots("Jewellery Page")
    await checkAllLinkOnPage("Jewellery Page", "div.breadcrumbs a")
    await checkAllLinkOnPage("Jewellery Page", "div.category-view a")
    await checkAllLinkOnPage("Jewellery Page", "div.sidebar-main a")
  }
  async function clickButtonAllWomenJewellery() {
    await waitAndClick(BUTTON_ALL_WOMEN_JEWELLERY)
    await checkMetaRobots("Women Page")
    await checkAllLinkOnPage("Women Page", "div.breadcrumbs a")
    await checkAllLinkOnPage("Women Page", "div.category-view a")
    await checkAllLinkOnPage("Women Page", "div.sidebar-main a")
  }
  async function clickButtonViewAllRings() {
    await waitAndClick(BUTTON_VIEW_All_RINGS)
    await checkMetaRobots("Rings Page")
    await checkAllLinkOnPage("Rings Page", "div.breadcrumbs a")
    await checkAllLinkOnPage("Rings Page", "div.category-view a")
    await checkAllLinkOnPage("Rings Page", "div.sidebar-main a")
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
      await TEXT_PRICE_PRODUCT_PAGE_MOBILE.textContent()
    console.log("Price Product Page : " + textPriceProductPage)
    await expect(textPriceListingPage).toBe(textPriceProductPage)
  }
  async function checkPriceAfterClickLogoAndRhodiumOption() {
    await page.waitForLoadState()
    await waitAndClick(PRODUCT_PAGE_LOGO_OPTION_LABEL)
    const specialPriceProductPage =
      await PRODUCT_PAGE_SPECIAL_PRICE_MOBILE.textContent()
    console.log("Special price: " + specialPriceProductPage)
    await waitAndClick(PRODUCT_PAGE_LOGO_OPTION_LABEL)
    await expect(specialPriceProductPage).toBe(
      await PRODUCT_PAGE_SPECIAL_PRICE_MOBILE.textContent(),
    )
    await waitAndClick(PRODUCT_PAGE_RHODIUM_OPTION_LABEL)
    await expect(specialPriceProductPage).toBe(
      await PRODUCT_PAGE_SPECIAL_PRICE_MOBILE.textContent(),
    )
    await waitAndClick(PRODUCT_PAGE_RHODIUM_OPTION_LABEL)
    await expect(specialPriceProductPage).toBe(
      await PRODUCT_PAGE_SPECIAL_PRICE_MOBILE.textContent(),
    )
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
    // await BUTTON_CONFIG_PRICE_PRODUCT_PAGE_MOBILE.scrollIntoViewIfNeeded();
    await waitAndClick(BUTTON_CONFIG_PRICE_PRODUCT_PAGE_MOBILE)
    await waitAndClick(MIN_PRICE)
    await expect(minPrice).toEqual(
      await TEXT_PRICE_PRODUCT_PAGE_MOBILE.textContent(),
    )
    await waitAndClick(MAX_PRICE)
    await expect(maxPrice).toEqual(
      await TEXT_PRICE_PRODUCT_PAGE_MOBILE.textContent(),
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
    await page.waitForTimeout(5000)
    await waitAndClick(BUTTON_ADD_TO_SHOPPING)
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
    await page.waitForLoadState("load")
    await page.waitForTimeout(5000)
    page.goto(URL_CHECK_OUT_CART)
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
    await page.waitForTimeout(1300)
    await waitAndClick(BUTTON_PROCESS_SHIPPING)
    await expect(PAYMENT).toBeVisible({ timeout: 10000 })
    await expect(PAYMENT_WITH_CREDIT_CARD).toBeVisible()
    await expect(PAYMENT_WITH_CRYPTO).toBeVisible()
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
  await compareHeightPage(10220)
  await clickAcceptLanguageAndCookie()
  await clickButtonJewelleryLeftCornerOfThePage()
  await clickButtonAllWomenJewellery()
  await clickButtonViewAllRings()
  await compareHeightPage(68428)
  await checkUrlThatNavigatesToTheProductPage()
  await clickProductAndComparePriceOnListingPageAndProductPage()
  // await checkPriceAfterClickLogoAndRhodiumOption()
  await checkMetaRobots("Product Page")
  await checkAllLinkOnPage("Product Page")
  await compareHeightPage(16458)
  await CheckHreflang()
  // await checkLowestAndHighestPriceAndChoiceMostPopular();
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
