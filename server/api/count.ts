let count = 0;

export default async () => {
    await new Promise(resolve => setTimeout(() => resolve(count++), 2000));
    return {count};
}
