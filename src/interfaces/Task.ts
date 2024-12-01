export interface Task {
  id: number,
  name: string,
  groupId?: string,
  categoryId?: string,
  description?: string,
  timePeriod: string,
  status: 'A Fazer' | 'Em Progresso' | 'Concluído',
  priority: 1 | 2 | 3 | 4 | 5
}
