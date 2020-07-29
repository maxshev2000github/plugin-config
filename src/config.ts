/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { SfdxCommand } from '@salesforce/command';
import { SfdxError } from '@salesforce/core';
import chalk from 'chalk';

export interface Msg {
  name: string;
  value?: string;
  success: boolean;
  location?: string;
  error?: SfdxError;
}

export abstract class ConfigCommand extends SfdxCommand {
  protected responses: Msg[] = [];

  output(header: string, verbose: boolean) {
    if (this.responses.length === 0) {
      this.ux.log('No results found');
      return;
    }

    this.ux.styledHeader(chalk.blue(header));
    const values = {
      columns: [
        { key: 'name', label: 'Name' },
        { key: 'value', label: 'Value' },
        { key: 'success', label: 'Success' }
      ]
    };

    if (verbose) {
      values.columns.push({ key: 'location', label: 'Location' });
    }

    this.ux.table(this.responses, values);

    this.responses.forEach(response => {
      if (response.error) {
        throw response.error;
      }
    });
  }
}
