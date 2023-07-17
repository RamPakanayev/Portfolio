export function isAndroid() {
  console.log(navigator.userAgent);
  return /Android/i.test(navigator.userAgent);
}
