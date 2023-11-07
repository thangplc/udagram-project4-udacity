import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  aws_region: process.env.AWS_REGION,
  AWS_DEFAULT_REGION: process.env.AWS_DEFAULT_REGION,
  aws_profile: "",
  aws_media_bucket: "",
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  accessKeyId : "ASIAWWU24ASOB2GZJ2PT",
  secretAccessKey : "P8E/Eqgh4OPgCpTnPNHPlOwfz1ni1AdF5kceWnfR"
};
