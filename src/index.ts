
const enum Color {
  RED,
  YELLOW,
  BLUE
}

function uai(greeting: string): string {
  return `${greeting}, uai ${Color.RED}`;
}

export = uai;
