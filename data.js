export const elections = [
  {
    id: 1,
    userId: 1,
    title: "President of the United States",
    description: "Election 1 Description",
    randomizedOptions: true,
    allowSustain: true,
    startDate: "2024-11-01T00:25:00.000Z",
    endDate: "2024-11-30T02:00:00.000Z",
    minChoice: 1,
    maxChoice: 1,
    voters: [1, 2, 3],
    status: "Building",
    attachments: ["", "", ""], // Changed from attachment1, 2, 3 to an array for scalability
  },

  {
    id: 2,

    userId: 1,

    title: "Vice-President of the United States",

    description: "Election 2 Description",

    randomizedOptions: false,

    allowSustain: false,

    startDate: "2024-10-10T13:00:00.000Z",

    endDate: "2024-10-12T16:00:00.000Z",

    minChoice: 1,

    maxChoice: 1,

    voters: [1, 2, 3],

    status: "Building",

    attachments: ["", "", ""], // Changed from attachment1, 2, 3 to an array for scalability
  },
];

export const ballots = [
  {
    id: 1,

    electionId: 1,

    userId: 1,

    options: {
      rankedChoice: [
        {
          id: 1,

          questions_candidates: [
            {
              id: 1,

              options: [
                {
                  id: 1,

                  title: "Kamala Harris",

                  shortDescription:
                    "Current Vice President of the United States",

                  description:
                    "Kamala Harris is the current Vice President of the United States. She is a member of the Democratic Party.",

                  photo:
                    "/img/Kamala_Harris_Vice_Presidential_Portrait.jpg.webp",

                  voterSelections: [1, 2, 3], // Changed voterId_votes to voterSelections for clarity
                },

                {
                  id: 2,

                  title: "Donald Trump",

                  shortDescription: "Former President of the United States",

                  description:
                    "Donald Trump is the former President of the United States. He is a member of the Republican Party.",

                  photo: "/img/trump",

                  voterSelections: [4, 5, 6], // Changed voterId_votes to voterSelections for clarity
                },
              ],
            },
          ],
        },
      ],

      multipleChoice: [
        {
          id: 1,

          questions_candidates: [
            {
              id: 1,

              options: [
                {
                  id: 1,

                  title:
                    "Idaho Constitutional Amendment: HJR 5, Citizenship Requirement for Voting Amendment (2024)",

                  description:
                    "Shall Section 2, Article VI of the Constitution of the State of Idaho be amended to provide that individuals who are not citizens of the United States may not be qualified electors in any election held within the state of Idaho?",

                  maxChoices: 1,

                  minChoices: 1,

                  answers: {
                    standard: [
                      {
                        id: 1,

                        title: "Yes",

                        shortDescription: "Yes, I support the amendment.",

                        description:
                          "A 'yes' vote supports amending the Idaho Constitution to provide that only a citizen of the United States can vote in the state.",

                        photo: "",

                        voterSelections: [4, 5, 6], // Changed voterId_votes to voterSelections for clarity
                      },

                      {
                        id: 2,

                        title: "No",

                        shortDescription: "No, I do not support the amendment.",

                        description:
                          "A 'no' vote does not support amending the Idaho Constitution to provide that only a citizen of the United States can vote in the state.",

                        photo: "",

                        voterSelections: [4, 5, 6], // Changed voterId_votes to voterSelections for clarity
                      },
                    ],

                    write_in: [
                      {
                        id: 1,

                        title: "Write-In",

                        userId: 1,

                        submittedText: "", // Added a field for the write-in text submission
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },
];

export const voters = [
  {
    id: 1,

    userId: 1,

    voters: [
      {
        voterId: 1,

        firstName: "John",

        lastName: "Doe",

        email: "john@example.com",

        voterKey: "123456",

        voteWeight: 1, // Changed voteWeight from 0 to 1 as a default value
      },

      {
        voterId: 2,

        firstName: "Jane",

        lastName: "Doe",

        email: "jane@example.com",

        voterKey: "7890",

        voteWeight: 1, // Changed voteWeight from 0 to 1 as a default value
      },

      {
        voterId: 3,

        firstName: "John",

        lastName: "Doe",

        email: "john@example.com",

        voterKey: "258743",

        voteWeight: 1, // Changed voteWeight from 0 to 1 as a default value
      },
    ],
  },
];
