import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const showsData = [
    {
      id: 'cloxriwrd0000uwhwlqio4tw4',
      name: 'Game of Thrones',
      description: 'Trouble is brewing in Westeros. For the inhabitants of this world, control of the Iron Throne holds the lure of great power. But in a land where seasons can last a lifetime, winter is coming...and beyond the Great Wall that protects them, a forgotten evil has returned. HBO presents this epic series based on the book series \'A Song of Ice and Fire\' by George R.R. Martin.',
      image: '/shows/game-of-thrones.webp',
      genre: 'Fantasy',
    },
    {
      id: 'cloxrjk6r0001uwhw9cl96ksg',
      name: 'The North Water',
      description: 'Patrick Sumner, hoping to escape the horrors of his past, finds himself on an ill-fated journey to the arctic that throws him into the path of brutish harpooner Henry Drax.',
      image: '/shows/the-north-water.webp',
      genre: 'Mystery',
    },
  ];

  for (const showData of showsData) {
    await prisma.show.create({
      data: showData,
    });
  }

  console.log('Seed data for shows created successfully');

  const episodesData = [
    {
      showId: 'cloxriwrd0000uwhwlqio4tw4',
      name: 'Winter Is Coming',
      description: 'Series Premiere. A Night\'s Watch deserter is tracked down outside of Winterfell, prompting swift justice from Lord Eddard \'Ned\' Stark, and raising concerns about the dangers in the lawless lands north of the Wall. Returning home, Ned learns from his wife Catelyn that his mentor, Jon Arryn, has died in the Westeros capital of King\'s Landing, and that King Robert is on his way north to offer Ned the position as the King\'s Hand. Meanwhile, across the Narrow Sea in Pentos, Viserys Targaryen hatches a plan to win back the throne by forging an allegiance with the nomadic Dothraki warriors by giving its leader, Khal Drogo, his lovely sister Daenerys\'s hand in marriage. Robert arrives at Winterfell with his wife, Queen Cersei, and other members of the Lannister family: her twin brother Jaime, dwarf brother Tyrion, and Cersei\'s son and heir to the throne, 12-year-old Joffrey. Unable to refuse his old friend and king, Ned prepares to leave for King\'s Landing, as Jon Snow decides to travel north to Black Castle to join the Night\'s Watch, accompanied by a curious Tyrion. But a startling act of treachery directed at young Bran may end up postponing their respective departures.',
      image: '/episodes/VfFgFpStzTr6VjhdjsVnkg.jpg',
    },
    {
      showId: 'cloxriwrd0000uwhwlqio4tw4',
      name: 'The Kingsroad',
      description: 'Bran\'s fate remains in doubt. Having agreed to become the King\'s Hand, Ned leaves The North with daughters Sansa and Arya, while Catelyn stays behind to tend to Bran. Jon Snow heads north to join the brotherhood of the Night\'s Watch. Tyrion decides to forego the trip south with his family, instead joining Jon in the entourage heading to the Wall. Viserys bides his time in hopes of winning back the throne, while Dany focuses her attention on learning how to please her new husband, Drogo.',
      image: '/episodes/PRAXnOKGDw.jpg',
    },
    {
      showId: 'cloxriwrd0000uwhwlqio4tw4',
      name: 'Lord Snow',
      description: 'Arriving at King\'s Landing after his long journey, Ned is shocked to learn of the Crown\'s profligacy from his new advisors. At Castle Black, Jon Snow impresses Tyrion at the expense of greener recruits. Suspicious the Lannisters had a hand in Bran\'s fall, Catelyn covertly follows her husband to King\'s Landing, where she is intercepted by Petyr Baelish, aka \'Littlefinger,\' a shrewd longtime ally and brothel owner. Cersei and Jaime ponder the implications of Bran\'s recovery; Arya studies swordsmanship. On the road to Vaes Dothrak, Daenerys finds herself at odds with Viserys.',
      image: '/episodes/jRu_FREjdrKrBVW8xuaAlw.jpg',
    },
    {
      showId: 'cloxriwrd0000uwhwlqio4tw4',
      name: 'Cripples, Bastards, and Broken Things',
      description: 'Ned looks to a book for clues to the death of his predecessor, and uncovers one of King Robert\'s bastards. Robert and his guests witness a tournament honoring Ned. Jon takes measures to protect Sam from further abuse at Castle Black; a frustrated Viserys clashes with Daenerys in Vaes Dothrak; Sansa imagines her future as a queen, while Arya envisions a far different future. Catelyn rallies her husband\'s allies to make a point, while Tyrion finds himself caught in the wrong place at the wrong time.',
      image: '/episodes/BdMj7GJZDaRAuXWrB_H3Aw.jpg',
    }
  ];

  for (const episodeData of episodesData) {
    await prisma.episode.create({
      data: episodeData,
    });
  }

  console.log('Seed data for episodes created successfully');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
