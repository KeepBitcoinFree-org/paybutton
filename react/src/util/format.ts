export const amount = (x?: number | null): string | undefined => {
  const clean = +x!;
  return clean
    ?.toFixed(8)
    .replace(/\.0*$/, '')
    .replace(/(\.\d*?)0*$/, '$1');
};

export default {
  amount,
};
