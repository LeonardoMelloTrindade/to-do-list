export interface Task {
  id: number,
  name: string,
  description?: string,
  timePeriod: string,
  status: 'A Fazer' | 'Em Progresso' | 'Concluído',
  priority: 1 | 2 | 3 | 4
}
