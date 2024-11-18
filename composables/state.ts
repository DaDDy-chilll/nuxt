export const useColor = () => useState<string>('color', () => 'pink');
export const useCount = () => useState<number>('count', () => 0);
