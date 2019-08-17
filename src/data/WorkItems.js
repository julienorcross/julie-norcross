import wno_preview from '../img/opera/preview.jpg';
import wno_main from '../img/opera/opera_1.jpg';
import wno_otello from '../img/opera/Otello.jpg';
import wno_samsonDelilah from '../img/opera/SamsonDelilah.jpg';
import wno_donGiovanni from '../img/opera/DonGiovanni.jpg';

import rcdc_preview from '../img/rcdc/preview.jpg';
import rcdc_home from '../img/rcdc/home.jpg';
import rcdc_list from '../img/rcdc/listing.jpg';
import rcdc_post from '../img/rcdc/post.jpg';
import rcdc_wfd from '../img/rcdc/wfd.jpg';
import tbp_preview from '../img/bonePeople/preview.jpg';
import tbp from '../img/bonePeople/full.jpg';
import franz_preview from '../img/kevinfranz/preview.jpg';
import franz_home from '../img/kevinfranz/home.gif';
import franz_about from '../img/kevinfranz/about.gif';
import jazz_preview from '../img/jazz/preview.jpg';

const workItems = [
  {
    thumbnailPath: wno_preview,
    images: [wno_otello, wno_samsonDelilah, wno_donGiovanni],
    title: 'Washington National Opera',
    subtitle: '2019/2020 Subscriptions Brochure',
    slug: 'wno1920',
    description: '',
    aspectRatio: 0.625
  },
  {
    thumbnailPath: rcdc_preview,
    images: [rcdc_home, rcdc_wfd, rcdc_list, rcdc_post],
    title: 'Real Cooking DC',
    subtitle: 'Website Mockup',
    slug: 'rcdc',
    description: `<p>Real Cooking DC is a fictitious company that wants to inspire people to cook, no matter what their skill level. They wanted photos to be a large part of the site, to entice visitors to want to partake.</p>
    <p>The color scheme and textures were chosen to reflect those that one would find in a home kitchen. They are soft and approachable. The serif font was chosen in order to reflect Real Cooking DC’s logo, and to maintain a sense of credibility. The condensed sans serif brings in a modern flare.</p>
    <p>Each recipe has ratings on time and skill level needed to complete the recipe, so that users know exactly what they’re getting into when choosing a meal. Additionally, users can filter searches by these ratings, as well as dietary restrictions and type of meal.
    Finally, a comments section was included in order for users to share their solutions to recipes and tips for others. This creates a community among Real Cooking DC members, and fosters more excitement for cooking.</p>`,
    aspectRatio: 0.6
  },
  {
    thumbnailPath: jazz_preview,
    images: [jazz_preview],
    title: 'Jazz Subscription Brochure',
    subtitle: '2017/2018 Season',
    slug: 'jazz-subs',
    description: `<p>The subscription brochure for the Kennedy Center’s 2017-2018 Jazz season. This season’s programming featured the theme of “revolution,” which is what inspired the design. At this point in the Kennedy Center’s branding, we were only using Helvetica Neue. In order to incorporate the revolutionary aspect, I decided to break up the font to create something new, while still maintaining our brand integrity. Scroll through to see the entirety of the brochure.</p>`,
    aspectRatio: 0.714
  },
  {
    thumbnailPath: franz_preview,
    images: [franz_home, franz_about],
    title: 'Kevin Franz Website',
    subtitle: 'Website Mockup',
    slug: 'kevin-franz',
    description: `<p>Kevin Franz is an illustrator from Omaha, Nebraska. This student project was to create a website in order to best display an artist’s work. Franz’s illustrations are often done in pen and watercolor. These drawings have lots of white space around them, and are often messy and scrawled, featuring hand written quotes of some sort. In order to reflect his style, the site has a great amount of white space, which has the texture of watercolor paper. The headings are written in the same style that Franz writes on his illustrations.</p>`,
    aspectRatio: 0.6
  },
  {
    thumbnailPath: tbp_preview,
    images: [tbp],
    title: 'The Bone People',
    subtitle: 'Book Cover Design',
    slug: 'bone-people',
    description: `<p><span class="emphasize">The Bone People</span> is a novel by Keri Hulme that follows three characters through a journey of renewal. The novel takes place in New Zealand, and focuses heavily on the Maori people. The book design is graphic and eye catching, but for a reason. The design reflects traditional Maori drawings and tattoos, and the color scheme is also traditionally Maori. The three white swirls are called korus, which symbolize rebirth and renewal in Maori culture, and so three were chosen to represent each main character in the novel.</p>`,
    aspectRatio: 0.429
  }
];

export default workItems;
