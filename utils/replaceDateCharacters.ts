const replaceDateCharacters = (inputString: string) => {
  const withZeroes = inputString.replace(/ /g, "");
  const withDots = withZeroes.replace(/,/g, ".");
  return withDots;
};

export default replaceDateCharacters;
