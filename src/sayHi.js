const sayHi = () => {
  const args = process.argv;
  let name;
  for (let i = 0; i < args.length; i++) {
    if (/^--username/.test(args[i])) {
      name = args[i].slice(11);
      i = args.length;
    }
  }
  return `Welcome to the File Manager, ${name || 'Anonymous'}!`;
};

export default sayHi;