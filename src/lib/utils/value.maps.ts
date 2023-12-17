const hexCharMap = new Map();
hexCharMap.set('A', 10);
hexCharMap.set('B', 11);
hexCharMap.set('C', 12);
hexCharMap.set('D', 13);
hexCharMap.set('E', 14);
hexCharMap.set('F', 15);

const hexMap = new Map();
hexMap.set(0, 8);
hexMap.set(1, 4);
hexMap.set(2, 2);
hexMap.set(3, 1);

const octMap = new Map();
octMap.set(0, 4);
octMap.set(1, 2);
octMap.set(2, 1);

export { hexCharMap, hexMap, octMap };
