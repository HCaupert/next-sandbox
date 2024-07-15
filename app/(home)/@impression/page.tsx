export default async function ImpressionPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  throw new Error();
}
