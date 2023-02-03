export const routes = {
  habits: {
    post: '/habits',
    getDay: '/habits/day',
    get: '/habits',
    habitToggle: (id: string) => `/habits/${id}/toggle`,
    summary: '/summary',
  },
};
