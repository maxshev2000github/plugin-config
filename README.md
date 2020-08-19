# plugin-config

Plugin for sfdx config commands

## Getting Started

To use, install the [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli) and run the following commands.

```
Verify the CLI is installed
  $ sfdx (-v | --version)
Install the config plugin
  $ sfdx plugins:install config
To run a command
  $ sfdx [command]
```

To build the plugin locally, make sure to have yarn installed and run the following commands:

```
Clone the repository
  $ git clone git@github.com:salesforcecli/plugin-config
Install the dependencies and compile
  $ yarn install
  $ yarn prepack
Link your plugin to the sfdx cli
  $ sfdx plugins:link .
To verify
  $ sfdx plugins
```

## Commands

A list of the available commands

- [`sfdx config:list [--json] [--loglevel]`](#sfdx-configlist)
- [`sfdx config:get [<string> ...] [--json] [--verbose] [--loglevel]`](#sfdx-configget)
- [`sfdx config:set [<string>=<string> ...] [--json] [-g] [--loglevel]`](#sfdx-configset)
- [`sfdx config:unset [<string> ...] [--json] [-g] [--loglevel]`](#sfdx-configunset)

## `sfdx config:list`

Lists the configuration variables for the Salesforce CLI

```
USAGE
$ sfdx config:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLES
  $ sfdx config:list

  $ sfdx config:list --json
```

## `sfdx config:get`

Gets the Salesforce CLI configuration values for your default scratch org, your default Dev Hub org, and more.

```
USAGE
$ sfdx config:get [<string> ...] [--json] [--verbose] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  --verbose                                                                         also output locations to stdout
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLES
  $ sfdx force:config:get defaultusername

  $ sfdx force:config:get defaultdevhubusername instanceUrl --json

  $ sfdx force:config:get apiVersion defaultdevhubusername --verbose
```

## `sfdx config:set`

Sets the local and global configuration variables for the Salesforce CLI.

```
USAGE
$ sfdx config:set [<string>=<string> ...] [--json] [-g] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -g                                                                                sets the variables globally
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLES
  $ sfdx force:config:set defaultusername=me@my.org defaultdevhubusername=me@myhub.org

  $ sfdx force:config:set defaultdevhubusername=me@myhub.org -g
```

## `sfdx config:unset`

Unsets the configuration variables for the Salesforce CLI.

```
USAGE
$ sfdx config:unset [<string> ...] [--json] [-g] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -g                                                                                unsets the variables globally
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLES
  $ sfdx force:config:unset defaultusername defaultdevhubusername

  $ sfdx force:config:set apiVersion -g
```
