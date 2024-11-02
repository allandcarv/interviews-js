/**
 * Returns URL with no duplicated params and filtered by denied list
 */

const getFilteredUrl = (url: string, denyList: string[]): string => {
  const [domain, params] = url.split('?');

  if (!params) {
    return domain;
  }

  const uniqueParams = new Map();
  const filteredParams: string[] = [];

  params.split('&').forEach((param) => {
    const [key, value] = param.split('=');

    if (!uniqueParams.has(key)) {
      uniqueParams.set(key, value);
    }
  });

  uniqueParams.forEach((value, key) => {
    if (!denyList.includes(key)) {
      filteredParams.push(`${key}=${value}`);
    }
  });

  const finalParams = filteredParams.length
    ? `?${filteredParams.join('&')}`
    : '';

  return `${domain}${finalParams}`;
};

console.log(getFilteredUrl('http://example.com?', []));
console.log(getFilteredUrl('http://example.com?a=1&b=2&a=3', []));
console.log(getFilteredUrl('http://example.com?a=1&b=2&a=3&c=4&d=5', ['d']));
console.log(
  getFilteredUrl('http://example.com?a=1&b=2&a=3&c=4&d=5', ['a', 'b', 'c', 'd'])
);
