export default function spinalCase(str: string): string {
  const spinalCaseRegex = /\s+|_+/g;
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(spinalCaseRegex, "-")
    .toLowerCase();
}
