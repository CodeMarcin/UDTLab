export const mainMenuArray = [
  {
    id: 1,
    title: 'Home',
  },
  {
    id: 2,
    title: 'Wytyczne egzaminów',
    subMenu: [
      {
        id: '2-1',
        title: 'Cięgniki',
        subMenu: [
          {
            id: '2-1-1',
            title:
              'Wciągniki i wciągarki sterowane z poziomu roboczego lub z kabiny oraz żurawie stacjonarne warsztatowe.',
            code: 'I W',
          },
          {
            id: '2-1-2',
            title:
              'Wciągniki i wciągarki sterowane z poziomu roboczego oraz żurawie stacjonarne warsztatowe.',
            code: 'II W',
          },
        ],
      },
      {
        id: '2-2',
        title: 'Suwnice',
        subMenu: [
          {
            id: '2-2-1',
            title:
              'Suwnice, wciągniki i wciągarki sterowane z poziomu roboczego lub z kabiny oraz żurawie stacjonarne warsztatowe.',
            code: 'I S',
          },
          {
            id: '2-2-2',
            title:
              'Suwnice, wciągniki i wciągarki sterowane z poziomu roboczego oraz żurawie stacjonarne warsztatowe.',
            code: 'II S',
          },
        ],
      },
      {
        id: '2-3',
        title: 'Żurawie',
        subMenu: [
          {
            id: '2-3-1',
            title: 'Żurawie wieżowe, szubkomontujące oraz szynowe.',
            code: 'I Ż',
          },
          {
            id: '2-3-1',
            title:
              'Żurawie stacjonarne, przewoźne, przenośne (HDS) oraz samojezdne.',
            code: 'II Ż',
          },
        ],
      },
      {
        id: '2-4',
        title: 'Podesty ruchome',
        subMenu: [
          {
            id: '2-4-1',
            title:
              'Podesty ruchome przejezdne: wolnobieżne, samojezdne montowane na pojeździe, przewoźne.',
            code: 'I P',
          },
          {
            id: '2-4-2',
            title: 'Podesty ruchome wiszące, masztowe, stacjonarne.',
            code: 'II P',
          },
        ],
      },
      {
        id: '2-5',
        title: 'Dźwigi',
        subMenu: [
          {
            id: '2-5-1',
            title:
              'Dźwigi (windy) towarowo - osobowe ze sterowaniem wewnętrznym i szpitalne.',
            code: 'I D',
          },
          {
            id: '2-5-2',
            title:
              'Dźwigi budowlane: towarowe, wyciągi towarowe, przewoźne, przenośne oraz towarowo - osobowe.',
            code: 'II D',
          },
        ],
      },
      {
        id: '2-6',
        title: 'Wózki jezdniowe',
        subMenu: [
          {
            id: '2-6-1',
            title: 'Wózki jezdniowe podnośnikowe, w tym specjalizowane.',
            code: 'I WJO',
          },
          {
            id: '2-6-2',
            title:
              'Wózki jezdniowe podnośniowe z wyłączeniem specjalizowanych oraz wózki podnośnikowe prowadzone i zdalnie sterowane.',
            code: 'II WJO',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Egzaminy',
    subMenu: [
      {
        id: '3-1',
        title: 'Wózki jezdniowe',
        subMenu: [
          {
            id: '3-1-1',
            title: 'Wózki jezdniowe I WJO #2',
          },
          {
            id: '3-1-2',
            title: 'Wózki jedzniowe II WJO #2',
          },
        ],
      },
    ],
  },
];
