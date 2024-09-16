import { STSClient, GetCallerIdentityCommand } from '@aws-sdk/client-sts';

const sts = new STSClient();
sts.send(new GetCallerIdentityCommand())
    .then(res => console.log(res.Arn))