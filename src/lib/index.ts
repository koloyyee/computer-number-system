function getKeyByValue(map: Map<string, number>, value: string | number) {
	const result = [...map.entries()].find(([, val]) => val === value);
	return result ? result[0] : '';
}
export { getKeyByValue };
