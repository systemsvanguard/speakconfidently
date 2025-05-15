import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';
import Tags from '../pages/Tags.vue';
// import static blog article pages
import Competency from '../pages/blog/competency.vue';
import DontFear from '../pages/blog/dontfear.vue';
import ExorciseFear from '../pages/blog/exorcisefear.vue';
import FunnyQuotes from '../pages/blog/funnyquotes.vue';
import GetBetter from '../pages/blog/getbetter.vue';
import Glossophobia from '../pages/blog/glossophobia.vue';
import ImprovePS from '../pages/blog/improveps.vue';
import JackofAll from '../pages/blog/jackofall.vue';
import Jitters from '../pages/blog/jitters.vue';
import Kaizen from '../pages/blog/kaizen.vue';
import KnownUnknown from '../pages/blog/knownunknown.vue';
import Procrastinate from '../pages/blog/procrastinate.vue';
import QuickSpeech from '../pages/blog/quickspeech.vue';
import Quotes1 from '../pages/blog/quotes1.vue';
import StPatrick from '../pages/blog/stpatrick.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/tags', component: Tags },
  // blog articles below here.
  { path: '/competency', component: Competency },
  { path: '/dontfear', component: DontFear },
  { path: '/exorcisefear', component: ExorciseFear },
  { path: '/funnyquotes', component: FunnyQuotes },
  { path: '/getbetter', component: GetBetter },
  { path: '/glossophobia', component: Glossophobia },
  { path: '/improveps', component: ImprovePS },
  { path: '/jackofall', component: JackofAll },
  { path: '/jitters', component: Jitters },
  { path: '/kaizen', component: Kaizen },
  { path: '/knownunknown', component: KnownUnknown },
  { path: '/procrastinate', component: Procrastinate },
  { path: '/quickspeech', component: QuickSpeech },
  { path: '/quotes1', component: Quotes1 },
  { path: '/stpatrick', component: StPatrick },
  
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
