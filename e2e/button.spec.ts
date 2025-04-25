import { test, expect } from '@playwright/test';

test('ボタンの表示と基本的なスタイルのテスト', async ({ page }) => {
  // トップページに移動
  await page.goto('http://localhost:3000');

  // ボタンが表示されていることを確認
  const button = page.getByRole('button', { name: 'Button' });
  await expect(button).toBeVisible();

  // ボタンのクラスを確認
  const buttonClasses = await button.evaluate((el) => el.className);
  expect(buttonClasses).toContain('bg-danger-primary');
  expect(buttonClasses).toContain('text-danger-text');
  expect(buttonClasses).toContain('border-danger-hover');
  expect(buttonClasses).toContain('hover:bg-danger-hover');

  // 基本的なスタイルの確認
  const buttonStyles = await button.evaluate((el) => {
    const styles = window.getComputedStyle(el);
    return {
      display: styles.display,
    };
  });

  expect(buttonStyles.display).toBe('flex');
}); 