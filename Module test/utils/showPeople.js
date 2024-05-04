const showPeople = (people) => {
  const newpeople = people
    .map((person) => {
      const { name, job } = person;
      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join('');
  return newpeople;
};

export default showPeople;
