interface Pointlike {
  x: number;
  y: number;
}

interface Named {
  name: string;
}

function logPoint(point: Pointlike) {
  console.log(`x = ${point.x}, y = ${point.y}`);
}

function logName(n: Named) {
  console.log(`Hello ${n.name}`);
}

// this object has no explicit type
// but meets the requirements of Pointlike
// and also meets the requirements of Named
// because of its structure (properties)
const obj = {
  x: 0,
  y: 0,
  name: "origin",
};

logPoint(obj);
logName(obj);
// Typescript's type system is structural
// and also not reified (no types present at runtime)
logName({ name: "n" });
