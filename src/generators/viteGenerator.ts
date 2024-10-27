import fs from 'fs';

export function generateViteConfig(configData: any, outputPath: string): void {
  // На основе configData создайте строку с конфигурацией Vite
  const viteConfigContent = `export default { /* ваша конфигурация */ }`;
  fs.writeFileSync(outputPath, viteConfigContent);
}