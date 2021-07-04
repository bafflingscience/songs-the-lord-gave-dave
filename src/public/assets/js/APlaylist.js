 const ap = new APlayer({
         container: document.getElementById('aplayer'),
         fixed: true,
         audio: [
           {
            //  zero
              name: 'w h i t m A n',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-song/w+h+i+t+m+A+n.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-card-images/whitman.jpg',
            },
            { // one
              name: 'm u L t i v e r s e',
              artist: 'z i m m . A n d . w o L f b A t',
              url: 'https://f000.backblazeb2.com/file/bucket-song/m+u+L+t+i+v+e+r+s+e.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-card-images/unkown-language.jpg',
           },
           { // two
              name: 'k n o x v i L L e . g i r L',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-song/KnoxviLLe+GirL.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-card-images/knoxville-girl.jpg',
           },
           { // three
              name: 'm A n y . m i L e s . A p A r t',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-song/Many+Miles+Apart.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-card-images/many-miles-apart.jpg',
            },
            { // four
              name: 'r e v e n g e',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-song/Revenge.mp3',
               cover: 'https://f000.backblaze2.com/file/bucket-card-images/revenge.jpg',
            },
           { // five
              name: 'q u i x o t e . r i d e s',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-song/Quixote+Rides.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-card-images/unknown-language.jpg',
           },
           { // six
              name: 'A L u m i n u m . w A L L s',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-song/A+l+u+m+i+n+u+m+.+w+A+L+L+s+4.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-card-images/alumiunm-walls.jpg',
           },
           { // seven
              name: 'f u t u r e . n e o n . k N i f e . f i g h t',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-song/future+neon+knife+fight.jsnsthm.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-card-images/future-neon-knife-fight.jpg',
           },
           { // eight
              name: 'c L u b . 2 . c A r . c h A s e',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-song/club+to+car+chase.jsnsthm.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-card-images/club-2-car-chase.jpg',
           },
           { // nine
              name: 'A m e n',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-song/amen.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-card-images/amen.jpg',
           },
           { // ten
              name: 'i d L e r',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-song/i+d+L+e+r.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-card-images/idler.jpg',
           },
           { // eleven
              name: 'L i f e \' s . A . g r A v e',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-song/LIfe\'s+A+Grave.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-card-images/lifes-a-grave.jpg',
           },
           { // twelve
              name: 't h e . e n d . i s . u p o n . u s',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-song/t+h+e+.++e+n+d+.+i+s+.+u+p+o+n+.+u+s.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-card-images/the-end-is-upon-us.jpg',
           },
           { //thirteen
              name: 'p s A L m . 6 . p r A y e r . i n . o r d e A L',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-song/Psalm+6.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-card-images/psalm-6.jpg',
           },
           { //fourteen
              name: 'n o t . p s y c h o t i c',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-song/Not+Psychotic.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-card-images/not-psychotic.jpg',
           },
           { //fifteen
              name: 'p L a y . m i s t y . f o r . m e',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-song/Play+Misty+For+Me.mstr.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-card-images/play-misty-for-me.jpg',
           },
           { //sixteen
              name: 'b y . g o s h e s . [L i v e]',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-song/b+y+.+g+o+s+h+e+s.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-card-images/by-goshes.jpg',
           },
           { //seventeen
              name: 'd o u b L e',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-song/d+o+u+b+L+e.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-card-images/double.jpg',
           },
           {//eighteen
              name: 'd o s . x x',
              artist: 'd A v i d . k L e g g',
              url: 'https://f000.backblazeb2.com/file/bucket-song/dosXx.mp3',
              cover: 'https://f000.backblaze2.com/file/bucket-card-images/dos-xx.jpg',
           },
         ]
       });