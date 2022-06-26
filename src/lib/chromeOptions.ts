import chromium from 'chrome-aws-lambda'

export async function getOptions (isDev: boolean) {
  return isDev
    ? {}
    : {
        args: chromium.args,
        executablePath: await chromium.executablePath,
        headless: chromium.headless
      }
}
