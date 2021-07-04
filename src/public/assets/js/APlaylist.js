 const ap = new APlayer({
         container: document.getElementById('aplayer'),
         fixed: true,
         audio: [
           {
            //  zero
              name: 'w h i t m A n',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/whitman.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-content/images/whitman.jpg',
            },
            { // one
              name: 'm u L t i v e r s e',
              artist: 'z i m m . A n d . w o L f b A t',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/multiverse.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-content/images/unkown-language.jpg',
           },
           { // two
              name: 'k n o x v i L L e . g i r L',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/knoxville-girl.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-content/images/knoxville-girl.jpg',
           },
           { // three
              name: 'm A n y . m i L e s . A p A r t',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/many-miles-apart.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-content/images/many-miles-apart.jpg',
            },
            { // four
              name: 'r e v e n g e',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/revenge.mp3',
               cover: 'https://f000.backblaze2.com/file/bucket-content/images/revenge.jpg',
            },
           { // five
              name: 'q u i x o t e . r i d e s',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/songs-for-sale/quixote-rides.ogg',
              cover: 'https://f000.backblaze2.com/file/bucket-content/images/unknown-language.jpg',
           },
           { // six
              name: 'A L u m i n u m . w A L L s',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/aluminum-walls.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-content/images/alumiunm-walls.jpg',
           },
           { // seven
              name: 'f u t u r e . n e o n . k N i f e . f i g h t',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/future-neon-knife-fight.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-content/images/future-neon-knife-fight.jpg',
           },
           { // eight
              name: 'c L u b . 2 . c A r . c h A s e',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/club-2-car-chase.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-content/images/club-2-car-chase.jpg',
           },
           { // nine
              name: 'A m e n',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/amen.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-content/images/amen.jpg',
           },
           { // ten
              name: 'i d L e r',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/idler.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-content/images/idler.jpg',
           },
           { // eleven
              name: 'L i f e \' s . A . g r A v e',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/lifes-a-grave.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-content/images/lifes-a-grave.jpg',
           },
           { // twelve
              name: 't h e . e n d . i s . u p o n . u s',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/the-end-is-upon-us.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-content/images/the-end-is-upon-us.jpg',
           },
           { //thirteen
              name: 'p s A L m . 6 . p r A y e r . i n . o r d e A L',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/psalm-6.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-content/images/psalm-6.jpg',
           },
           { //fourteen
              name: 'n o t . p s y c h o t i c',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/not-psychotic.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-content/images/not-psychotic.jpg',
           },
           { //fifteen
              name: 'p L a y . m i s t y . f o r . m e',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/play-misty-for-me.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-content/images/play-misty-for-me.jpg',
           },
           { //sixteen
              name: 'b y . g o s h e s . [L i v e]',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/by-goshes.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-content/images/by-goshes.jpg',
           },
           { //seventeen
              name: 'd o u b L e',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/double.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-content/images/double.jpg',
           },
           {//eighteen
              name: 'd o s . x x',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-content/audio/dos-xx.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-content/images/dos-xx.jpg',
           },
         ]
       });