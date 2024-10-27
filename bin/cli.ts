#!/usr/bin/env node

import { Command } from 'commander';
import { parseWebpackConfig } from '../src/parsers/webpackParser';
import { generateViteConfig } from '../src/generators/viteGenerator';

const program = new Command();

program
  .version('0.1.0')
  .description('Конвертирует конфигурацию webpack в конфигурацию Vite')
  .argument('<webpackConfig>', 'Путь к файлу конфигурации webpack')
  .option('-o, --output <viteConfig>', 'Путь для сохранения конфигурации Vite', 'vite.config.js')
  .action((webpackConfig, options) => {
    const webpackConfigData = parseWebpackConfig(webpackConfig);
    generateViteConfig(webpackConfigData, options.output);
    console.log('Конвертация завершена!');
  });

program.parse(process.argv);