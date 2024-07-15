export default async function RatePage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  throw new Error();
}
