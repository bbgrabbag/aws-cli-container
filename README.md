# AWS CLI Container Environment
Portable VS Code container environment for making AWS CLI commands and running Node scripts. Includes Node.js, Amazon Q, and AWS extensions.

### Overview
Execute AWS CLI commands and write Node.js scripts in a container to interact with and manage AWS resources.

### Requirements
Make sure you have [Docker](https://www.docker.com/products/docker-desktop/) and [ VS Code Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) extension installed.

### Get Started
- Clone project and open in VS Code. 
    - Run task `Dev Containers: Reopen in Container`.

-   Install dependencies (if not using in a VS Code devcontainer):
    - `npm i`

- Verify AWS is installed:
    - `aws --version`

- Configure credentials (This will prompt you for credentials. Get these from the AWS IAM console). All configuration files will be stored in container `.aws/` directory:
    - `aws configure` 

- Login to [Amazon Q](https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.amazon-q-vscode) and [AWS VS Code](https://aws.amazon.com/visualstudiocode/)
    - Click on extensions and follow the prompts to login. Check out the documentation to see how you can use them to suit your needs.

- Add `.ts` files to `/scripts` folder and run:
    - `npx ts-node ./scripts/<filename>.ts`

- Add `.sh` files to `/bin` folder and run:
    - `./bin/<filename>.sh`