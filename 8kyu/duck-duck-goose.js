// 7/31/2023

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name
// // PHP only
// duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
// duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
// duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]

function duckDuckGoose(players, goose) {
  // Adjusting goose index to be 0-based
  const gooseIndex = (goose - 1) % players.length;
  return players[gooseIndex].name;
}