#!/usr/bin/env node

import fg from 'fast-glob';
import random from 'random';
import touch from 'touch';
import { program } from 'commander';

program
  .name('recursive-touch')
  .argument('date')
  .argument('path')
  .action(async (date, dir) => {
    const hours = random.int(0, 23);
    const minutes = random.int(0, 59);
    const seconds = random.int(0, 59);

    const files = [dir, ...(await fg(`${dir}/*`))];
    const options = {
      time: `${date} ${hours}:${minutes}:${seconds}`,
    };

    files.forEach(async file => await touch(file, options));
  });

program.parse(process.argv);
