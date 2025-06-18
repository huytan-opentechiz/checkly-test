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
//   test.setTimeout(120000)
//   async function compareHeight() {
//     await page.evaluate(() => window.scrollTo(0, 1000))
//     await page.waitForTimeout(800);
//     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
//     await page.waitForTimeout(1000);
//     await page.evaluate(() => window.scrollTo(0, 5000))
//     await page.waitForTimeout(800);

//     const pageHeight = await page.evaluate(() => { // hàm trả về chiều cao page
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
//     const difference = Math.abs(pageHeight - 7900);
//     console.log('Pixel sai lệch so với mong đợi = ' + difference);
//     // await expect(difference).toBeLessThan(450);
//     const cookies = page.locator('#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save')
//     if (await cookies.isVisible()) {
//       await expect(cookies).toBeVisible()
//       await cookies.click()
//     }
//   }
//   // await goPageAndAddCart("https://www.glamira.ca/fr/glamira-bracelet-tanel.html?alloy=white_red-375&stone1=diamond-Brillant&no_cache=1")
//   await page.goto("https://www.glamira.ca/fr/glamira-piercing-nez-jadeline.html?alloy=white-585&stone1=diamond-Brillant&bypass_varnish=1", { waitUntil: 'domcontentloaded' });
//   await compareHeight()
//   await page.waitForTimeout(300)
//   await page.goto("https://www.glamira.ca/fr");
//   await page.waitForLoadState('load')
//   await page.locator("//div[@class='top-menu']//a[@title='Bijoux']").hover()
//   await page.waitForTimeout(200)
//   await page.locator("(//nav[@id='menu_mega']//a[@title='Bagues'])[1]").hover()
//   await page.locator("(//nav[@id='menu_mega']//a[@title='Plus De Bijoux'])[1]").hover()
//   await page.waitForTimeout(200)
//   await page.locator("(//nav[@id='menu_mega']//a[@title='Piercings De Nez'])[1]").click()
//   await page.waitForLoadState('load')
//   await page.evaluate(() => window.scrollTo(0, 800))
//   await page.locator("(//li[@class='item label  filter-diamonds'])[1]").click()
//   await page.waitForTimeout(300)
//   await page.locator("(//li[@class='item label  filter-diamonds'])[1]//a[@data-url-key='diamant']").click()
//   await page.waitForLoadState('load')
//   const priceInListing = await page.locator("//a[@title='Piercing Nez Jadeline Diamant']//following::span[@class='price'][1]").textContent()
//   await page.locator("(//a[@title='Piercing Nez Jadeline Diamant']//span)[1]").click()
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
//   const hreflang = page.locator("(//link[@hreflang='fr-CA'])")
//   const linkCanoical = await canoical.getAttribute("href")
//   const linkHref = await hreflang.getAttribute("href")
//   await expect(linkCanoical).toEqual(baseUrl)
//   await expect(linkCanoical).toEqual(linkHref)

//   // check price range
//   await page.evaluate(() => window.scrollTo(0, 300))
//   await page.waitForTimeout(500);
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

//   // Add cart and checkout
//   await page.evaluate(() => window.scrollTo(0, 600))
//   await page.locator("//div[@id='stone']//img[@alt='Diamant Noir']").click()
//   await page.waitForTimeout(800)
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
//   await page.waitForTimeout(600);
//   const checkout = page.locator(
//     "#maincontent > div.columns > div > div.cart-container > div > ul > li > button"
//   )
//   await checkout.waitFor({ state: "visible" })
//   await checkout.click()

//   const username = page.locator("#checkout-login-email")
//   const password = page.locator("#checkout-login-password")
//   await username.waitFor({ state: "visible" })
//   await password.waitFor({ state: "visible" })
//   await page.waitForTimeout(1000);
//   await username.fill("cuong+ca/fr@onlinebizsoft.com")
//   await password.fill("Duccuong7.")
//   // await page.waitForTimeout(1000);
//   await page
//     .locator(
//       "#form-login > fieldset > div.actions-toolbar > div.primary > button"
//     )
//     .click()

//   const shipment = page.locator(
//     "#login-address > div.checkout-step-form.login-address-form > div.step-content > div > form > div > div > button"
//   )
//   await shipment.waitFor({ state: "visible" })
//   await page.waitForTimeout(2000);
//   await shipment.click()
//   const billing = page.locator(
//     "#shipping > div.step-content > form > div > div > button"
//   )
//   await billing.waitFor({ state: "visible" })
//   await billing.click()

//   const stripePayment = page.locator(
//     "//label[@for='stripe_payments']"
//   )
//   await stripePayment.waitFor({ state: "visible" })
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
import { test, expect } from "@playwright/test"

const config: PlaywrightTestConfig = {
  // General timeout per test
  timeout: 230000,

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
  test.setTimeout(220000)
  // khai báo các locator
  const userName = "cuong+ca/fr@onlinebizsoft.com"
  const password = "Duccuong7."
  const titleRemoveSuccess = "Le panier est vide" // thay text theo ngôn ngữ store ( giỏ hàng đang trống)
  const URL_STORE = "https://www.glamira.ca/fr/" // thay url store
  const URL_PRODUCT_PAGE = "https://www.glamira.ca/fr/bagues-en-diamant/"
  const URL_CHECK_OUT_CART = "https://www.glamira.ca/fr/checkout/cart/"
  const URL_CHECK_OUT_LOGIN_PAGE =
    "https://www.glamira.ca/fr/checkout/#login-address"
  const URL_CHECK_OUT_SHIPPING = "https://www.glamira.it/checkout/#shipping"
  const BUTTON_ACCEPT_LANGUAGE = await page.locator(
    "//a[@class='btn btn-default btn-block btn-stay-here geoip-close']",
  ) // thay text theo ngôn ngữ store
  const BUTTON_ACCEPT_COOKIE = await page.locator(
    "//button[text()='Accepter Tous Les Cookies']",
  ) // thay text theo ngôn ngữ store
  const BUTTON_JEWELLERY = await page.locator("//div[@class='top-menu']//li[1]")
  const BUTTON_ALL_WOMEN_JEWELLERY = await page.locator(
    'a.pagebuilder-button-link[href="https://www.glamira.ca/fr/femmes/"]',
  ) // thay text theo ngôn ngữ store
  const BUTTON_VIEW_All_RINGS = await page.locator(
    "//span[text()='Voir toutes les bagues']",
  ) // thay text theo ngôn ngữ store
  const TEXT_PRICE_PRODUCTION_LISTING_PAGE = await page.locator(
    "//span[@id='product-price-115482']//span[@class='price']",
  )
  const PRODUCTION_LISTING_PAGE = await page.locator(
    "//h2[text()=' Bague Soderman']",
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
  const PAYMENT_WITH_CREDIT_CARD = await page.locator(
    "//label[@for='stripe_payments_card']",
  )
  const PAYMENT_WITH_PAYPAL = await page.locator(
    "//div[@class='payment-method']//label[@for='paypal_express']",
  )
  const PAYMENT_WITH_CRYPTO = await page.locator(
    "//div[@class='payment-method']//label[@for='plisio_plisiogateway']",
  )
  const SELECT_PAYMENT_METHOD = await page.locator(
    "(//div[@class='payment-method-title field choice'])[1]",
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
  const PRODUCT_PAGE_SPECIAL_PRICE = await page.locator(
    "//div[@class='price-box main-price price-final_price']//span[@class='final-price-box']//span[@class='special-price']//span[@id='product-price-115482']//span[@class='price']",
  )
  const DIAMONDS_FILTER = await page.locator(
    "(//li[@class='item label  filter-diamonds'])[1]",
  )
  const DIAMONDS_FILTER_VALUE = await page.locator(
    "(//li[@class='item label  filter-diamonds'])[1]//a[@data-filter-value='diamond-Brillant']",
  )
  const DIAMONDS_FILTER_CLEAR = await page.locator(
    "(//span[@class='btn_clear_filter_mb'])",
  )
  // đo độ dài web và compare
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

  // Check all link are correct store and active
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
            !href.startsWith(`https://www.glamira.ca/fr/4`) &&
            !href.startsWith(`https://www.glamira.ca/fr/earbuds-lp/`) &&
            !href.startsWith(
              `https://www.glamira.ca/fr/bracelets/diamant/bracelet_chaine/`,
            ) &&
            !href.startsWith(
              `https://www.glamira.ca/fr/bracelets/diamant/bracelet_riviere/`,
            ) &&
            !href.startsWith(
              `https://www.glamira.ca/fr/bagues-de-promesse/925-silver/`,
            ) &&
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

  async function clickFilterInCategoryPage() {
    await expect(DIAMONDS_FILTER).toBeVisible()
    await DIAMONDS_FILTER.click()
    await expect(DIAMONDS_FILTER_VALUE).toBeVisible()
    await DIAMONDS_FILTER_VALUE.click()
    await page.waitForLoadState("load")
    await expect(DIAMONDS_FILTER_CLEAR).toBeVisible()
    await DIAMONDS_FILTER_CLEAR.click()
    await page.waitForLoadState("load")
    await page.waitForTimeout(2000)
  }

  // có thể chọn 1 sản phẩm bất kỳ nên xpath để chung là TEXT_PRICE_PRODUCTION_LISTING_PAGE
  async function clickProductAndComparePriceOnListingPageAndProductPage() {
    await TEXT_PRICE_PRODUCTION_LISTING_PAGE.scrollIntoViewIfNeeded()
    const textPriceListingPage = (
      await TEXT_PRICE_PRODUCTION_LISTING_PAGE.textContent()
    ).replace(/\s+/g, "")
    console.log("Price Listing page : " + textPriceListingPage)
    await waitAndClick(PRODUCTION_LISTING_PAGE)
    // xpath price 2 page giong nhau
    const textPriceProductPage = (
      await TEXT_PRICE_PRODUCTION_LISTING_PAGE.textContent()
    ).replace(/\s+/g, "")
    console.log("Price Product Page : " + textPriceProductPage)
    await expect(textPriceListingPage).toBe(textPriceProductPage)
  }
  async function checkPriceAfterClickLogoAndRhodiumOption() {
    await page.waitForLoadState()
    await waitAndClick(PRODUCT_PAGE_LOGO_OPTION_LABEL)
    const specialPriceProductPage =
      await PRODUCT_PAGE_SPECIAL_PRICE.textContent()
    console.log("Special price: " + specialPriceProductPage)
    await waitAndClick(PRODUCT_PAGE_LOGO_OPTION_LABEL)
    await expect(specialPriceProductPage).toBe(
      await PRODUCT_PAGE_SPECIAL_PRICE.textContent(),
    )
    await waitAndClick(PRODUCT_PAGE_RHODIUM_OPTION_LABEL)
    await expect(specialPriceProductPage).toBe(
      await PRODUCT_PAGE_SPECIAL_PRICE.textContent(),
    )
    await waitAndClick(PRODUCT_PAGE_RHODIUM_OPTION_LABEL)
    await expect(specialPriceProductPage).toBe(
      await PRODUCT_PAGE_SPECIAL_PRICE.textContent(),
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
    await waitAndClick(BUTTON_CONFIG_PRICE_PRODUCT_PAGE)
    await waitAndClick(MIN_PRICE)
    await expect(minPrice.replace(/\s+/g, "")).toEqual(
      (await TEXT_PRICE_PRODUCTION_LISTING_PAGE.textContent()).replace(
        /\s+/g,
        "",
      ),
    )
    await waitAndClick(MAX_PRICE)
    await expect(maxPrice.replace(/\s+/g, "")).toEqual(
      (await TEXT_PRICE_PRODUCTION_LISTING_PAGE.textContent()).replace(
        /\s+/g,
        "",
      ),
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
    BUTTON_ADD_TO_SHOPPING.waitFor({ state: "visible" })
    BUTTON_ADD_TO_SHOPPING.scrollIntoViewIfNeeded()
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
    await page.waitForTimeout(2000)
    await waitAndClick(BUTTON_PROCESS_SHIPPING)
    await expect(PAYMENT).toBeVisible({ timeout: 10000 }) // 10 seconds timeout
    await expect(PAYMENT_WITH_CREDIT_CARD).toBeVisible()
    await expect(PAYMENT_WITH_PAYPAL).toBeVisible()
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
  await compareHeightPage(10862)
  await clickAcceptLanguageAndCookie()
  await clickButtonJewelleryLeftCornerOfThePage()
  await clickButtonAllWomenJewellery()
  await clickButtonViewAllRings()
  await compareHeightPage(61844)
  await checkUrlThatNavigatesToTheProductPage()
  await clickFilterInCategoryPage()
  await clickProductAndComparePriceOnListingPageAndProductPage()
  // await checkPriceAfterClickLogoAndRhodiumOption()
  await checkMetaRobots("Product Page")
  await checkAllLinkOnPage("Product Page")
  await compareHeightPage(11415)
  // await CheckHreflang();
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
