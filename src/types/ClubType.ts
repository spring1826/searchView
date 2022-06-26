export type ClubType = {
  club: {
    coverUrl: string;
    description: string;
    id: string;
    meetings: { endedAt: string; startedAt: string; order: number }[];
    name: string;
    place: string;
    type: string;
  };
  createdAt: string;
  leaders: { name: string }[];
  partners: { name: string }[];
};
