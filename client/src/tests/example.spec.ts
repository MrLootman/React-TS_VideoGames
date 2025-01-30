import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page).toHaveTitle(/Video Games/);
});

test("has a h1 element with a specific text in it", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const h1 = page.locator("h1");

  await expect(h1).toContainText(/Time to play the game/);
});

test("the last link can redirect on a /create page", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const a = page.locator("a:last-of-type");

  await expect(a).toContainText(/Create/);

  await a.click();
});

test("the location /create page as an available form", async ({ page }) => {
  await page.goto("http://localhost:3000/create");

  const form = page.locator("form");

  await expect(form).toBeVisible();

  await page.locator("input").nth(0).fill("Diablo");

  await page.locator("input").nth(1).fill("Diablo.png");

  const button = page.locator("button");

  await button.click();

  const toast = page.locator(".Toastify__toast");

  await expect(toast).toBeVisible();
  await expect(toast).toContainText("Diablo");
});
