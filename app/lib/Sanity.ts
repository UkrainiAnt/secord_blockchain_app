import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "ukq2rgg4",
  dataset: "production",
  apiVersion: "v1",
  token:
    "sk4USTahQNZq0ZvP4rq5RcftTNvnZHQmOLd394ZyGt82TMrM4JdLRCcFWWKVtTsKyDQytdGAHG5HmzZEVjfzEh9VlMogO2kU7Gsj6QTySyqdtrmQJ7PFWdv50sAxYRsW89ANMyMECXV2gbu6iYON2gyLKNe6ZpfjLX2Cv9hu6qUHFOzrT7hC",
});

export default client;
