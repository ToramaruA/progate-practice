export const breadthFirstSearch = (
  relationships: number[][],
  startUser: number,
  targetUser: number,
): number => {
  const queue = [[startUser, 0]];
  const visited = new Set();

  while (queue.length > 0) {
    const [currentUser, steps] = queue.shift()!;

    if (currentUser === targetUser) return steps;
    if (visited.has(currentUser)) continue;

    visited.add(currentUser);
    for (const friend of relationships[currentUser]) {
      queue.push([friend, steps + 1]);
    }
  }
  return -1;
};
