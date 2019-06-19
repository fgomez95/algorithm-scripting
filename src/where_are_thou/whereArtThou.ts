interface normalizeInterface {
  [key: string]: any;
}
export default function whereArtThou(
  x: Array<normalizeInterface>,
  y: normalizeInterface
): Array<any> {
  let res: Array<normalizeInterface>;
  let keys: Array<string> = Object.keys(y);
  res = x.filter((el: normalizeInterface) => {
    let flag: boolean = true;
    keys.forEach((key: string) => {
      if (el[key] !== y[key]) flag = false;
    });
    return flag;
  });
  return res;
}
