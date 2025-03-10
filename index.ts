export const mastra = new Mastra({
  ...,
  deployer: new CloudflareDeployer({
    auth: {
      apiToken: String(process.env.CLOUDFLARE_API_KEY),
    },
    scope: String(process.env.CLOUDFLARE_ACCOUNT_ID),
    projectName: 'my-project-name',
  }),
});
