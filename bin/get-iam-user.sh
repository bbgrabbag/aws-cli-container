#!/bin/sh

# get iam user ARN
ARN=$(aws sts get-caller-identity --query Arn --output text)

echo $ARN
