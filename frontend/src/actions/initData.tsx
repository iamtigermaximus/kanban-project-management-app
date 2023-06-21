export const initData = [
  {
    id: 1,
    name: 'Project 1',
    data: [
      {
        id: 1,
        categoryTitle: 'Todo',
        cards: [
          {
            id: 1,
            title: 'Task1',
            labels: [{ color: '#cf61a1', text: 'Urgent' }],
            date: '2022-05-05',
            tasks: [
              {
                id: 1,
                completed: true,
                text: 'Task1_subtask1',
              },
              {
                id: 2,
                completed: true,
                text: 'Task1_subtask2',
              },
              {
                id: 3,
                completed: true,
                text: 'Task1_subtask3',
              },
            ],
            desc: 'Task1 Detail Description',
          },
          {
            id: 2,
            title: 'Task2',
            labels: [{ color: '#1ebffa', text: 'Frontend' }],
            date: '',
            tasks: [],
            desc: 'Task2 Detail Description',
          },
          {
            id: 3,
            title: 'Task4',
            labels: [{ color: '#cf61a1', text: 'Urgent' }],
            date: '2022-05-05',
            tasks: [
              {
                id: 1,
                completed: true,
                text: 'Task4_subtask1',
              },
              {
                id: 2,
                completed: true,
                text: 'Task4_subtask2',
              },
              {
                id: 3,
                completed: true,
                text: 'Task4_subtask3',
              },
            ],
            desc: 'Task4 Detail Description',
          },
          {
            id: 4,
            title: 'Task6',
            labels: [{ color: '#cf61a1', text: 'Urgent' }],
            date: '2022-05-05',
            tasks: [
              {
                id: 1,
                completed: true,
                text: 'Task6_subtask1',
              },
              {
                id: 2,
                completed: true,
                text: 'Task6_subtask2',
              },
              {
                id: 3,
                completed: true,
                text: 'Task6_subtask3',
              },
            ],
            desc: 'Task6 Detail Description',
          },
        ],
      },
      {
        id: 2,
        categoryTitle: 'In Progress',
        cards: [
          {
            id: 1,
            title: 'Task3',
            labels: [{ color: '#9975bd', text: 'Database' }],
            date: '',
            tasks: [{ id: 1, completed: false, text: 'restore db' }],
            desc: 'Task3 Detail Description',
          },
          {
            id: 2,
            title: 'Task7',
            labels: [{ color: '#9975bd', text: 'Database' }],
            date: '',
            tasks: [{ id: 1, completed: false, text: 'restore db' }],
            desc: 'Task7 Detail Description',
          },
          {
            id: 3,
            title: 'Task8',
            labels: [{ color: '#9975bd', text: 'Database' }],
            date: '',
            tasks: [{ id: 1, completed: false, text: 'restore db' }],
            desc: 'Task8 Detail Description',
          },
        ],
      },
      {
        id: 3,
        categoryTitle: 'Completed',
        cards: [
          {
            id: 1,
            title: 'Task5',
            labels: [{ color: '#4fcc25', text: 'Payment API' }],
            date: '2022-05-04',
            tasks: [
              { id: 1, completed: false, text: 'GraphQl' },
              { id: 2, completed: true, text: 'Restful API' },
            ],
            desc: 'Task5 Detail Description',
          },
        ],
      },
    ],
  },
];
