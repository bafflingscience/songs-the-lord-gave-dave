 const ap = new APlayer({
         container: document.getElementById('aplayer'),
         fixed: true,
         audio: [
           {
            //  zero
             name: 'w h i t m A n',
             artist: 'd A v i d . k L e g g',
             url: 'public/assets/audio/Whitman.mp3',
             cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rzaiOT9sWPrPpeF0FrSQrQHaHa%26pid%3DApi&f=1',
            },
            { // one
             name: 'm u L t i v e r s e',
             artist: 'z i m m . A n d . w o L f b A t',
             url: 'public/assets/audio/Multiverse Bounce - 8.3.16.mp3',
             cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rzaiOT9sWPrPpeF0FrSQrQHaHa%26pid%3DApi&f=1',
           },
           { // two
             name: 'k n o x v i L L e . g i r L',
             artist: 'd A v i d . k L e g g',
             url: 'public/assets/audio/Knoxville Girl.mp3',
             cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rzaiOT9sWPrPpeF0FrSQrQHaHa%26pid%3DApi&f=1',
           },
           { // three
             name: 'm A n y . m i L e s . A p A r t',
             artist: 'd A v i d . k L e g g',
             url: 'public/assets/audio/Many Miles Apart.mp3',
             cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rzaiOT9sWPrPpeF0FrSQrQHaHa%26pid%3DApi&f=1',
            },
            { // four
              name: 'r e v e n g e',
              artist: 'd A v i d . k L e g g',
              url: 'public/assets/audio/Revenge.mp3',
              cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cjS7MOa_c73K6c3ICFdrLQHaHa%26pid%3DApi&f=1',
            },
           { // five
             name: 'q u i x o t e . r i d e s',
             artist: 'd A v i d . k L e g g',
             url: 'public/assets/audio/Quixote Rides.mp3',
             cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rzaiOT9sWPrPpeF0FrSQrQHaHa%26pid%3DApi&f=1',
           },
           { // six
             name: 'A L u m i n u m . w A L L s',
             artist: 'd A v i d . k L e g g',
             url: 'https://f000.backblazeb2.com/file/bucket-song/A+l+u+m+i+n+u+m+.+w+A+L+L+s+4.mp3',
             cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rzaiOT9sWPrPpeF0FrSQrQHaHa%26pid%3DApi&f=1',
           },
           { // seven
             name: 'f u t u r e . n e o n . k N i f e . f i g h t',
             artist: 'd A v i d . k L e g g',
             url: 'public/assets/audio/future neon knife fight.jsnsthm.mp3',
             cover: '"public/assets/images/jason.statham-knives.jpg',
           },
           { // eight
             name: 'c L u b . 2 . c A r . c h A s e',
             artist: 'd A v i d . k L e g g',
             url: 'public/assets/audio/club to car chase.jsnsthm.mp3',
             cover: '"public/assets/images/jason.statham-knives.jpg',
           },
           { // nine
             name: 'A m e n',
             artist: 'd A v i d . k L e g g',
             url: 'public/assets/audio/amen.mp3',
             cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QJr5BX8nyRKbEK4GGDG09QHaKu%26pid%3DApi&f=1',
           },
           { // ten
             name: 'i d L e r',
             artist: 'd A v i d . k L e g g',
             url: 'public/assets/audio/idler ps.6.6-6.11.m4a',
             cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._xAlHCM_FY78fQ2qmcj9xQHaEg%26pid%3DApi&f=1',
           },
           { // eleven
             name: 'L i f e \' s . A . g r A v e',
             artist: 'd A v i d . k L e g g',
             url: 'public/assets/audio/Life\'s A Grave.mp3',
             cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DGfYYLIXmtmAb-cR95leAQHaHa%26pid%3DApi&f=1',
           },
           { // twelve
            name: 't h e . e n d . i s . u p o n . u s',
            artist: 'd A v i d . k L e g g',
            url: 'public/assets/audio/The End Is Upon Us -Master.mp3',
             cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.61WcZ_25A6Z4ixseMj8uTQHaEf%26pid%3DApi&f=1',
           },
           { //thirteen
            name: 'p s A L m . 6 . p r A y e r . i n . o r d e A L',
            artist: 'd A v i d . k L e g g',
             url: 'public/assets/audio/Psalm 6.mp3',
             cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6Noci7znYIaEwqzHG8QIkwHaK_%26pid%3DApi&f=1',
           },
           { //fourteen
            name: 'n o t . p s y c h o t i c',
            artist: 'd A v i d . k L e g g',
             url: 'public/assets/audio/Not Psychotic.mp3',
             cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HpePd2c6HhIpvyO-WYzCqQHaKG%26pid%3DApi&f=1',
           },
           { //fifteen
            name: 'p L a y . m i s t y . f o r . m e',
            artist: 'd A v i d . k L e g g',
            url: 'public/assets/audio/Play Misty For Me.mstr.mp3',
            cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nCVxrr4bcGMnjing8iQ-_QHaD9%26pid%3DApi&f=1',
           },
           { //sixteen
            name: 'b y . g o s h e s . [L i v e]',
            artist: 'd A v i d . k L e g g',
             url: 'public/assets/audio/By Goshes-Live (master).mp3',
             cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.r7nhhEIOPkCzZkzD02reKAHaHa%26pid%3DApi&f=1',
           },
           { //seventeen
             name: 'e v e r y t h i n g . g o o d',
             artist: 'd A v i d . k L e g g',
             url: 'public/assets/audio/Everything Good.mp3',
             cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.HvKEc18ao7HEwpy9kR7heAHaFY%26pid%3DApi&f=1',
           },
           {//eighteen
             name: 'd o s . x x',
             artist: 'd A v i d . k L e g g',
             url: 'public/assets/audio/dosXx.mp3',
             cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.BoHbvP_ZgwDHFz5C3gh6NwHaG0%26pid%3DApi&f=1',
           },
         ]
       });