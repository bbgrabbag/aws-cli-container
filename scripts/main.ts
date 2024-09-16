import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client();

s3.send(new ListBucketsCommand()).then((res) => console.log(res.Buckets));