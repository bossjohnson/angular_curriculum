exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('pirates').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('pirates').insert({
                    id: 1,
                    name: 'Blackbeard',
                    poison: 'Rum',
                    accessory: 'Hook hand',
                    image_url: 'http://www.denofgeek.us/sites/denofgeekus/files/0/72/black-sails-blackbeard.jpg'
                }),
                knex('pirates').insert({
                    id: 2,
                    name: 'Beardbeard',
                    poison: 'Scotch',
                    accessory: 'Extra burly beard',
                    image_url: 'http://boredbug.com/wp-content/uploads/2014/10/beardbeard.jpg'
                }),
                knex('pirates').insert({
                    id: 3,
                    name: 'Frank Beard',
                    poison: 'Liquor',
                    accessory: 'Drum kit',
                    image_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Frank_Beard_ZZ_Top_BBK_Live_2008.jpg'
                })
            ]);
        });
};
