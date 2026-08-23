const { chromium } = require('playwright');

(async () => {
  // Launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Navigate to todo MVC demo
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.screenshot({ path: 'test-results/01-homepage.png' });
  console.log('Screenshot 1: Homepage loaded');
  
  // Add a todo item
  await page.fill('.new-todo', 'Learn Playwright');
  await page.press('.new-todo', 'Enter');
  await page.screenshot({ path: 'test-results/02-after-add-todo.png' });
  console.log('Screenshot 2: After adding todo');
  
  // Add another todo
  await page.fill('.new-todo', 'Write test scripts');
  await page.press('.new-todo', 'Enter');
  await page.screenshot({ path: 'test-results/03-after-second-todo.png' });
  console.log('Screenshot 3: After second todo');
  
  // Mark first todo as complete
  await page.check('.todo-list li:nth-child(1) .toggle');
  await page.screenshot({ path: 'test-results/04-mark-complete.png' });
  console.log('Screenshot 4: Marked first todo complete');
  
  // Click on "Active" filter
  await page.click('text=Active');
  await page.screenshot({ path: 'test-results/05-active-filter.png' });
  console.log('Screenshot 5: Active filter applied');
  
  // Click on "Completed" filter
  await page.click('text=Completed');
  await page.screenshot({ path: 'test-results/06-completed-filter.png' });
  console.log('Screenshot 6: Completed filter applied');
  
  // Click on "All" filter
  await page.click('text=All');
  await page.screenshot({ path: 'test-results/07-all-filter.png' });
  console.log('Screenshot 7: All filter applied');
  
  // Try to delete a todo (hover to show delete button)
  const secondTodo = page.locator('.todo-list li:nth-child(2)');
  await secondTodo.hover();
  await page.click('.todo-list li:nth-child(2) .destroy');
  await page.screenshot({ path: 'test-results/08-after-delete.png' });
  console.log('Screenshot 8: After deleting todo');
  
  // Clear completed todos
  await page.click('text=Clear completed');
  await page.screenshot({ path: 'test-results/09-after-clear-completed.png' });
  console.log('Screenshot 9: After clearing completed');
  
  // Test failing scenario: try to add empty todo
  await page.fill('.new-todo', '');
  await page.press('.new-todo', 'Enter');
  await page.screenshot({ path: 'test-results/10-empty-todo-attempt.png' });
  console.log('Screenshot 10: Attempted to add empty todo');
  
  // Verify no new todo was added (should still have 1 todo)
  const todoCount = await page.locator('.todo-list li').count();
  console.log(`Todo count after empty attempt: ${todoCount}`);
  
  await browser.close();
  console.log('All tests completed. Screenshots saved in test-results/');
})();
