/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { flags, FlagsConfig } from '@salesforce/command';
import {
  ConfigAggregator,
  ConfigInfo,
  Messages,
  SfdxError
} from '@salesforce/core';
import * as os from 'os';
import { ConfigCommand } from '../../config';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/plugin-config', 'get');

export class Get extends ConfigCommand {
  public static readonly description = messages.getMessage('description');
  public static readonly examples = messages.getMessage('examples').split(os.EOL);
  public static readonly strict = false;
  public static readonly flagsConfig: FlagsConfig = {
    verbose: flags.builtin()
  };
  public static aliases = ['force:config:get'];

  async run(): Promise<ConfigInfo[]> {
    const argv = this.parseArgs();

    if (!argv || argv.length === 0) {
      throw SfdxError.create(
        '@salesforce/plugin-config',
        'get',
        'NoConfigKeysFound',
        []
      );
    } else {
      const results: ConfigInfo[] = [];
      const aggregator = await ConfigAggregator.create();

      argv.forEach(configName => {
        try {
          const configInfo = aggregator.getInfo(configName);
          results.push(configInfo);
          this.responses.push({
            name: configInfo.key,
            value: configInfo.value as string | undefined,
            success: true,
            location: configInfo.location
          });
        } catch (err) {
          this.responses.push({
            name: configName,
            success: false,
            error: err
          });
        }
      });

      this.output('Get Config', this.flags.verbose);
      return results;
    }
  }
}
