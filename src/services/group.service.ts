import { api } from './api';

export const GroupsService = {
  getGroups: async () => {
    const response = await api.get('/group');
    return response.data;
  },
};