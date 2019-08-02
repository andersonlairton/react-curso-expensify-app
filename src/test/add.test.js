//criando casos de test

const add = (a, b) => a + b;
const generationGreeting = (name) => `hello ${name}`;

test('some dois numeros', () => {
    const result = add(3, 4);
    expect(result).toBe(7)
});

test('nome esperado', () => {
    const result = generationGreeting('anderson');
    expect(result).toBe('hello anderson');
})