const getUserName = () => {
  const args = process.argv;
  let name;
  for (let i = 0; i < args.length; i++) {
    if (/^--username/.test(args[i])) {
      name = args[i].slice(11);
      i = args.length;
    }
  }
  return name || 'Anonymous';
};

export default getUserName;