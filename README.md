# AWS CLI Container Environment
Portable VS Code container environment for making AWS CLI commands and running Node scripts. Includes Node.js, Amazon Q, and AWS extensions.

### Overview
Execute AWS CLI commands and write Node.js scripts in a container to interact with and manage AWS resources.

### Requirements
This repo assumes a basic understanding of the [AWS Cloud](https://aws.amazon.com/about-aws/?nc2=h_header) and the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html).

Make sure you have [Docker](https://www.docker.com/products/docker-desktop/) and [ VS Code Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) extension installed.

### Get Started
- Clone project and open in VS Code. 
    - Run task `Dev Containers: Reopen in Container`.

-   Install dependencies (if not using in a VS Code devcontainer):
    - `npm i`

- Verify AWS is installed:
    - `aws --version`

- Configure credentials for detaul profile (This will prompt you for credentials. Get these from the AWS IAM console). All configuration files will be stored in container `.aws/` directory:
    - `aws configure` 

- Login to [Amazon Q](https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.amazon-q-vscode) and [AWS VS Code](https://aws.amazon.com/visualstudiocode/)
    - Click on extensions and follow the prompts to login. Check out the documentation to see how you can use them to suit your needs.

- Add `.ts` files to `/scripts` folder and run:
    - `npx ts-node ./scripts/<filename>.ts`

- Add `.sh` files to `/bin` folder and run:
    - `./bin/<filename>.sh`
> Note: When adding new bash scripts, make sure to make them executable: `chmod +x ./bin/*`

### Using named profiles
The simplest way to configure a new profile is to run `aws configure --profile <name-of-profile>`. It will prompt you to set credentials for this profile, which will be added to the `.aws/credentials` and `.aws/config` files. 

By default, scripts will run using the `[default]` profile in `.aws/credentials`. To execute commands with a specific profile, first update the `AWS_PROFILE` key in `.env`.

To run a node script with the specified profile, run `npx dotenvx run -- ts-node ./scripts/<script-name>.ts`

To run a bash script with the specified profile, run `npx dotenvx run -- ts-node ./bin/<script-name>.sh`

> See [documentation](https://docs.aws.amazon.com/cli/v1/userguide/cli-configure-files.html) for `aws configure` command for more details


    