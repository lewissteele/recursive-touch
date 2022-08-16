#!/usr/bin/env node

import { program } from 'commander';

program
  .name('dnsdaddy')
  .description('Dyanmic DNS for GoDaddy')
  .version('1.0')
  .argument('date', 'meh')
  .argument('dir', 'meh')
  .action((date, dir) => {
    console.log(date, dir);
    
  });

program.parse(process.argv);
