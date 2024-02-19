import fs, { PathLike } from 'fs';

// work out the current working directory
const cwd = process.cwd();
const filePath: PathLike = `${cwd}/package.json`;

// rewrite the first argument to use current working directory
fs.readFile(filePath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
  if (err) {
    console.error("An error occurred!", err);
  }
  console.log(data.toString());
});

const foo = () => {
  console.log(
    `just to trigger a change in the file and see if the watcher picks it up!`
  );
};
