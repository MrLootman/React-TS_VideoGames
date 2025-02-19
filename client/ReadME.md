import { test, expect } from "@playwright/test";
import { execSync } from "node:child_process";
import path from "node:path";

// Avant chaque test, réinitialiser la base de données
// test.afterAll(async () => {
//   try {
//     const serverDir = path.resolve(process.cwd(), "../");

//     execSync("npm run db:migrate", { stdio: "inherit", cwd: serverDir });
//   } catch (error) {
//     console.error("Erreur lors de la réinitialisation de la base :", error);
//   }
// });

test("The creation video game page has a form", async ({ page }) => {
  await page.goto("http://localhost:3000/create");

  // Expect a title "to contain" a substring.
  const formElement = page.locator("form");

  await expect(formElement).toBeVisible();
});

test("Create a video game and check if it exists in the home page", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/create");

  await page.fill('input[name="name"]', "Le tout petit chat trop mignon");

  const fileInput = await page.locator('input[type="file"]');
  await fileInput.setInputFiles("./tests/petit-chat.jpg");

  await page.click('button[type="submit"]');

  await expect(page.locator(".Toastify__toast")).toHaveText(
    "Tu as réussi à créer un jeu !",
  );

  await page.goto("http://localhost:3000/");

  await expect(page.locator("figure:last-of-type > figcaption")).toHaveText(
    "Le tout petit chat trop mignon",
  );
});
