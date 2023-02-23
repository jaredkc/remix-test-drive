export function isSecurePassword(password: string): boolean {
  // Password must be at least 8 characters long, contain at least one uppercase letter,
  // one lowercase letter, one number, and can have special characters.
  // (?=.*[a-z]) - at least one lowercase letter
  // (?=.*[A-Z]) - at least one uppercase letter
  // (?=.*\d) - at least one number
  // [a-zA-Z0-9_!@#$%^&*()+?><.=\d]{8,} - at least 8 characters, special characters are optional
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9_!@#$%^&*()+?><.=\d]{8,}$/;
  const passwordTest = re.test(password);
  return passwordTest;
}

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

/**
 * Find all form data keys that start with a prefix ('variety--',
 * and return an array without the prefix.
 */
export function manyFormDataToArray(formData: FormData, find: string) {
  const result = [];
  const findName = find + '--';
  for (let key of formData.keys()) {
    if (key.startsWith(findName)) {
      result.push(key.replace(findName, ''));
    }
  }
  return result;
}

/**
 * Find all form data keys that start with a prefix ('country--'),
 * and return comma separated string without the prefix.
 */
export function manyFormDataToString(formData: FormData, find: string) {
  const result = [];
  const findName = find + '--';
  for (let key of formData.keys()) {
    if (key.startsWith(findName)) {
      result.push(key.replace(findName, ''));
    }
  }
  return result.join(', ');
}
