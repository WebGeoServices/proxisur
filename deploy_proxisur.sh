#!/usr/bin/env bash
set -e

aws s3 sync . s3://www.proxisur.fr --region "eu-west-1" --acl "public-read" --exclude ".git/*" --exclude ".idea/*"
