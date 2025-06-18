/**
  * To learn more about Playwright Test visit:
  * https://www.checklyhq.com/docs/browser-checks/playwright-test/
  * https://playwright.dev/docs/writing-tests
  */

const { expect, test } = require('@playwright/test')

// Set the action timeout to 10 seconds to quickly identify failing actions.
// By default Playwright Test has no timeout for actions (e.g. clicking an element).
// Learn more here: https://www.checklyhq.com/docs/browser-checks/timeouts/
test.use({ actionTimeout: 10000 })

test('wait for a new page to load and screenshot it', async ({ page }) => {
  // Change checklyhq.com to your site's URL,
  // or, even better, define a ENVIRONMENT_URL environment variable
  // to reuse it across your browser checks
  await page.goto(process.env.ENVIRONMENT_URL || 'https://stage.glamira.co.uk/glamira-bracelet-tanel.html?alloy=white_red-375&stone1=diamond-Brillant&utm_source=monitoring')

  // Locate the Pricing link
 
  await page.evaluate(() => window.scrollTo(0, 600))
  // await page.waitForTimeout(5000)
    const language = page.locator(
      ".modal-content > div > div > div.geoip-btn-group > a.btn.btn-default.btn-block.btn-stay-here.geoip-close"
    )
  await page.waitForTimeout(3000)
    if (await language.isVisible()) {
      await expect(language).toBeVisible()
      await language.click()
    }
    const cookies = page.locator('#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save')
    await cookies.click()
    await page.waitForTimeout(5000)

    await page.evaluate(() => window.scrollTo(0, 300))
    await page.locator("#product-addtocart-button").click()
    await page.waitForTimeout(1000)


  // Take a screenshot of the current page
  await page.screenshot({ path: 'screenshot.jpg' })
  await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 50000, maxDiffPixelRatio: 0.2
      }

    );
})
