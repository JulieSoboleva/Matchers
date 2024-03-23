import sortPersons from "../sorter";

const personList = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
];

test('testing sorted list', () => {
    const result = sortPersons(personList);

    expect(result).toEqual([
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ]);
});
