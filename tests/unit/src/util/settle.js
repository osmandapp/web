/** the app does not await its storage writes and router answers, give them a tick */
export const settle = () => new Promise((resolve) => setTimeout(resolve, 0));
