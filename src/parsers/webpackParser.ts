import fs from 'fs';
import acorn from 'acorn';

export function parseWebpackConfig(configPath: string): any {
  const code = fs.readFileSync(configPath, 'utf-8');
  const ast = acorn.parse(code, { ecmaVersion: 2020, sourceType: 'module' });
  // Реализуйте парсинг AST и извлечение нужной информации
  // Возвращайте объект с конфигурационными данными
  return {};
}