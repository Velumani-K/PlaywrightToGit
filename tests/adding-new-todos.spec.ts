// spec: ### 1. Adding New Todos
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Adding New Todos', () => {
  test('Add several valid todos', async ({ page }) => {
    // 1. Navigate to the TodoMVC demo page.
    await page.goto('https://demo.playwright.dev/todomvc');
 
    // 2. Type `Buy milk` into the input and submit with Enter.
    const todoInput = page.getByPlaceholder('What needs to be done?');
    await todoInput.fill('Buy milk');
    await todoInput.press('Enter');

    // 3. Verify the todo is visible and the count updates to `1 item left`.
    await expect(page.getByText('Buy milk')).toBeVisible();
    await expect(page.locator('.todo-count')).toContainText('1 item left');

    // 4. Type `Write tests` into the input and submit with Enter.
    await todoInput.fill('Write tests');
    await todoInput.press('Enter');

    // 5. Verify the second todo is visible and the count updates to `2 items left`.
    await expect(page.getByText('Write tests')).toBeVisible();
    await expect(page.locator('.todo-count')).toContainText('2 items left');

    // 6. Type `Deploy app` into the input and submit with Enter.
    await todoInput.fill('Deploy app');
    await todoInput.press('Enter');

    // 7. Verify the third todo is visible and the count updates to `3 items left`.
    await expect(page.getByText('Deploy app')).toBeVisible();
    await expect(page.locator('.todo-count')).toContainText('3 items left');
  });
});
