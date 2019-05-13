export default function destroyer(...arr:Array<any>):Array<any>{
  let result:Array<any> = [...arr[0]];
  let variables:Array<any> = arr.filter(el => !Array.isArray(el));
  result = result.filter(el => !variables.includes(el));
  return result;
}