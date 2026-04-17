
const getStoredInteractions = () => {
  const stored = localStorage.getItem("interactions");

  if (stored) {
    return JSON.parse(stored);
  }

  return [];
};


const saveInteraction = (interactionData) => {
  const storedInteractions = getStoredInteractions();

  storedInteractions.push(interactionData);

  localStorage.setItem(
    "interactions",
    JSON.stringify(storedInteractions)
  );
};

export { getStoredInteractions, saveInteraction };