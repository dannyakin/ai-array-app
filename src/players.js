// File: src/players.js

const arrPlayers = [
    {
        id: 1,
        firstName: 'Lionel',
        lastName: 'Messi',
        age: 34,
        club: 'Paris Saint-Germain',
        trophies: 34,
        nationality: 'Argentina',
        bio: 'Lionel Messi is an Argentine professional footballer widely regarded as one of the greatest players of all time. Born on June 24, 1987, in Rosario, Argentina, Messi began his career with FC Barcelona, where he achieved numerous successes, including multiple UEFA Champions League titles and Ballon d\'Or awards. In 2021, he transferred to Paris Saint-Germain, bringing his incredible skills to the French club. Messi is known for his exceptional dribbling, precise finishing, and playmaking abilities. His influence on the pitch goes beyond scoring goals, as he often creates opportunities for his teammates. With his move to PSG, Messi continues to make a significant impact on the global football stage.'
    },
    {
        id: 2,
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
        age: 37,
        club: 'Manchester United',
        trophies: 33,
        nationality: 'Portugal',
        bio: 'Cristiano Ronaldo, born on February 5, 1985, in Funchal, Madeira, Portugal, is a legendary Portuguese footballer. Ronaldo is renowned for his incredible goal-scoring prowess, athleticism, and dedication to his craft. He started his career with Sporting Lisbon before moving to Manchester United, Real Madrid, and eventually returning to Manchester United. Ronaldo has won numerous individual awards, including multiple Ballon d\'Or titles. His leadership on and off the field has made him a global icon. In addition to his goal-scoring exploits, Ronaldo is known for his versatility, athleticism, and work ethic. His return to Manchester United in 2021 was celebrated by fans worldwide.'
    },
    {
        id: 3,
        firstName: 'Neymar',
        lastName: 'Jr',
        age: 30,
        club: 'Paris Saint-Germain',
        trophies: 21,
        nationality: 'Brazil',
        bio: 'Neymar Jr., born on February 5, 1992, in Mogi das Cruzes, Brazil, is a Brazilian forward known for his flair, skill, and goal-scoring ability. Neymar rose to prominence with Santos FC in Brazil before making a high-profile move to FC Barcelona. After successful years with Barcelona, he transferred to Paris Saint-Germain in 2017. Neymar is known for his dazzling dribbling, creativity, and ability to score spectacular goals. His partnership with Lionel Messi and Kylian Mbappe at PSG has formed one of the most formidable attacking trios in world football. Neymar continues to be a key player for both PSG and the Brazilian national team.'
    },
    {
        id: 4,
        firstName: 'Kylian',
        lastName: 'Mbappe',
        age: 23,
        club: 'Paris Saint-Germain',
        trophies: 13,
        nationality: 'France',
        bio: 'Kylian Mbappe, born on December 20, 1998, in Bondy, France, is a French forward known for his incredible speed, technical ability, and goal-scoring prowess. Mbappe emerged as a star with AS Monaco before making a high-profile move to Paris Saint-Germain in 2017. He played a crucial role in France\'s 2018 FIFA World Cup triumph, showcasing his talent on the biggest stage. Mbappe is characterized by his clinical finishing, versatility, and maturity beyond his years. His combination of speed and skill makes him a constant threat to opposing defenses. As one of the brightest young talents in football, Mbappe continues to amaze fans with his performances.'
    },
    {
        id: 5,
        firstName: 'Robert',
        lastName: 'Lewandowski',
        age: 33,
        club: 'Bayern Munich',
        trophies: 20,
        nationality: 'Poland',
        bio: 'Robert Lewandowski, born on August 21, 1988, in Warsaw, Poland, is a Polish striker widely regarded as one of the best goal-scorers in the world. Lewandowski has had a distinguished career with clubs such as Borussia Dortmund and Bayern Munich. Known for his clinical finishing, aerial ability, and work rate, Lewandowski has consistently been among the top goal-scorers in European football. He achieved global recognition for his incredible performance, scoring five goals in nine minutes for Bayern Munich against VfL Wolfsburg in 2015. Lewandowski\'s leadership on the field and goal-scoring exploits make him a key figure for both Bayern Munich and the Polish national team.'
    },
    {
        id: 6,
        firstName: 'Mohamed',
        lastName: 'Salah',
        age: 30,
        club: 'Liverpool',
        trophies: 8,
        nationality: 'Egypt',
        bio: 'Mohamed Salah, born on June 15, 1992, in Nagrig, Egypt, is an Egyptian forward known for his electrifying pace, goal-scoring prowess, and contributions to Liverpool\'s success. Salah rose to prominence with his performances at AS Roma before making a move to Liverpool in 2017. Since joining Liverpool, Salah has played a crucial role in the team\'s achievements, including winning the UEFA Champions League and the Premier League. Known for his clinical finishing, dribbling ability, and work ethic, Salah has become one of the most prolific goal-scorers in English football. He continues to be a key player for Liverpool and the Egyptian national team.'
    },
    {
        id: 7,
        firstName: 'Kevin',
        lastName: 'De Bruyne',
        age: 31,
        club: 'Manchester City',
        trophies: 13,
        nationality: 'Belgium',
        bio: 'Kevin De Bruyne, born on June 28, 1991, in Drongen, Belgium, is a Belgian midfielder known for his vision, passing ability, and leadership on the field. De Bruyne has had successful stints with clubs such as Chelsea and Wolfsburg before joining Manchester City in 2015. His creativity, precise passing, and ability to score from midfield make him one of the best midfielders in the world. De Bruyne played a pivotal role in Manchester City\'s domestic success, helping the team win multiple Premier League titles and domestic cups. His contributions to both club and country have solidified his reputation as one of the premier midfielders in world football.'
    },
    {
        id: 8,
        firstName: 'Erling',
        lastName: 'Haaland',
        age: 21,
        club: 'Borussia Dortmund',
        trophies: 0, // (as of knowledge cutoff in January 2022)
        nationality: 'Norway',
        bio: 'Erling Haaland, born on July 21, 2000, in Leeds, England, is a Norwegian striker known for his incredible goal-scoring ability and physical prowess. Haaland started gaining attention at a young age, and his performances with Red Bull Salzburg led to a move to Borussia Dortmund in January 2020. With an impressive goal-scoring record, Haaland has become one of the most sought-after young talents in European football. His speed, strength, and clinical finishing make him a constant threat in front of goal. Despite his young age, Haaland has already established himself as a key player for both club and country.'
    },
    {
        id: 9,
        firstName: 'Bruno',
        lastName: 'Fernandes',
        age: 27,
        club: 'Manchester United',
        trophies: 0, // (as of knowledge cutoff in January 2022)
        nationality: 'Portugal',
        bio: 'Bruno Fernandes, born on September 8, 1994, in Maia, Portugal, is a Portuguese midfielder known for his vision, passing ability, and goal-scoring prowess. Fernandes rose to prominence with Sporting Lisbon before making a high-profile move to Manchester United in January 2020. His impact at Manchester United has been significant, with Fernandes contributing both goals and assists from midfield. Known for his leadership qualities on the pitch, Fernandes has become a key figure in the team. With his creativity and work rate, he continues to be a driving force in Manchester United\'s midfield.'
    },
    {
        id: 10,
        firstName: 'Harry',
        lastName: 'Kane',
        age: 28,
        club: 'Tottenham Hotspur',
        trophies: 0, // (as of knowledge cutoff in January 2022)
        nationality: 'England',
        bio: 'Harry Kane, born on July 28, 1993, in Walthamstow, England, is an English striker known for his goal-scoring prowess and playmaking ability. Kane rose through the youth ranks at Tottenham Hotspur and has become one of the most prolific strikers in English football. With an innate ability to score from various positions on the pitch, Kane has consistently been among the top scorers in the Premier League. In addition to his goal-scoring exploits, Kane is known for his leadership on and off the field. As one of England\'s star players, he continues to be a vital asset for both club and country.'
    },
];

export default arrPlayers;
