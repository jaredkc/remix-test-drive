function randomCharacters(characters: string, count: number): string[] {
  const items = [];
  const array = characters.toString().split('');
  for (let i = 0; i < count; i++) {
    items.push(array[Math.floor(Math.random() * array.length)]);
  }
  return items;
}

export function generatePassword(): string {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialCharacters = '_!@#$%^&*()+?><.=';

  const password = [
    ...randomCharacters(letters, 4),
    ...randomCharacters(letters.toUpperCase(), 4),
    ...randomCharacters(numbers, 3),
    ...randomCharacters(specialCharacters, 3),
  ];

  const shuffled = password.sort(() => 0.5 - Math.random());
  return shuffled.join('');
}

export function generateIdAttr(value: string): string {
  return value.replace(/\W+/g, '-').toLowerCase();
}

