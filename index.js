#!/usr/bin/env node

import { program } from 'commander';
import * as fg from 'fast-glob';

program
  .name('dnsdaddy')
  .description('Dyanmic DNS for GoDaddy')
  .version('1.0')
  .argument('date', 'meh')
  .argument('dir', 'meh')
  .action(async (date, dir) => {
    console.log(date, dir);
    const files = [dir, ...(await fg(`${dir}/*`))];
  });

program.parse(process.argv);
