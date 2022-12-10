const isUpperCase = val => val === val.toUpperCase();

export const getPriority = val => val.toLowerCase().charCodeAt(0) - 96 + (isUpperCase(val) ? 26 : 0);