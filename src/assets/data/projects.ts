import { IProject } from '../../models/IProject';

export const projects: IProject[] = [
  {
    id: 1,
    title: 'BPS Calculator',
    costumer: 'Precision NanoSystems',
    date: 'March 2024',
    captionText: 'Precision NanoSystems',
    tools: ['Next.js', 'React', 'TypeScript', 'Material UI'],
    shortDesc:
      'The app focuses on quantifying time savings in RNA-LNP drug development and presents the results in a report that highlights the benefits of using expertise of BioPharma Service',
    longDesc:
      "Our team crafted a web application to enhance customer engagement visually. This application delves into quantifying time efficiencies within RNA-LNP drug development, showcasing the outcomes in a comprehensive report that underscores the advantages of leveraging BioPharma Services' proficiency. Serving as a front-end developer within a dynamic team of 2 developers and 2 UX/UI designers, I was resposnible for  implementing the front-end aspect of the application. Thanks to seamless collaboration with UX designers and end-users, we successfully delivered the entire application in under a month.",
    github: '',
    live: '',
    isLive: false,
    img1: 'https://www.dl.dropboxusercontent.com/scl/fi/naciy8j8ye5e2vq5hu6ic/nano1.png?rlkey=oao2bl0q4y4k2kxfg3oqw2y6r&st=8mvem5j1&dl=0',
    img2: 'https://www.dl.dropboxusercontent.com/scl/fi/zgg3biqohwhj8ed8o4lod/nano2.png?rlkey=7nzx71yib1sj38hvc60kqf2nz&st=e4pi9h00&dl=0',
    img3: 'https://www.dl.dropboxusercontent.com/scl/fi/5utucoxjpwtcmixtou4p0/nano3.png?rlkey=viu36sb2znjladkc3mui98iyk&st=8rh4fvc7&dl=0',
    imgExtra:
      'https://www.dl.dropboxusercontent.com/scl/fi/7jqzlo6zpmnrhoe5htcjr/robin2.jpg?rlkey=qaezbirqplt0wb77qxbsm81td&st=dw8bgwei&dl=0',
    coverImg:
      'https://www.dl.dropboxusercontent.com/scl/fi/1zwvxmwthgrv1tkcafap2/nanoCover.png?rlkey=5tq9vq6v1zq8g7xzvtyomyhb9&st=9wba4iaz&dl=0',
    isProtected: false,
  },
  /*  {
    id: 2,
    title: 'Peyvok',
    costumer: 'Case study',
    date: 'december 2023',
    captionText: 'Caption Text',
    tools: ['React Native', 'TypeScript', 'MongoDB Realm'],
    shortDesc:
      'This project is a React Native mobile application developed as final project for my Frontend Development education at Medieinstitutet in Stockholm 2022-2024.',
    longDesc:
      'Dictumst commodo etiam volutpat orci vulputate id. Cursus cras eu sapien id. Enim suspendisse nunc congue ullamcorper donec lectus magna aenean tristique. Diam orci consectetur suspendisse maecenas bibendum ut augue pretium. Eget posuere luctus porttitor tortor gravida quis dignissim sit at. Consectetur suspendisse maecenas bibendum ut augue pretium. Eget posuere luctus porttitor tortor gravida quis dignissim. ',
    github: 'https://github.com/r0binsahin/Peyvok',
    live: '',
    isLive: false,
    img1: 'https://i.postimg.cc/s2XXLnKV/peyvok-1.png',
    img2: 'https://i.postimg.cc/wxh4bgnr/peyvok-2.png',
    img3: 'https://i.postimg.cc/jd49CtXf/peyvok-3.png',
    imgExtra: 'https://i.postimg.cc/T3WDCY4L/placeholder.png',
    coverImg: 'https://i.postimg.cc/qqHGyrrb/Group-2506.png',
    isProtected: false,
  },
  {
    id: 2,
    title: 'Check-in Generator',
    costumer: 'Daresay',
    date: 'october 2023',
    captionText: 'Caption Text',
    tools: ['React', 'TypeScript', 'Framer Motion'],
    shortDesc:
      ' Eget posuere luctus porttitor tortor gravida quis dignissim sit at. Consectetur suspendisse maecenas bibendum ut augue pretium. Eget posuere luctus porttitor tortor gravida quis dignissim.',

    longDesc:
      'Dictumst commodo etiam volutpat orci vulputate id. Cursus cras eu sapien id. Enim suspendisse nunc congue ullamcorper donec lectus magna aenean tristique. Diam orci consectetur suspendisse maecenas bibendum ut augue pretium. Eget posuere luctus porttitor tortor gravida quis dignissim sit at. Consectetur suspendisse maecenas bibendum ut augue pretium. Eget posuere luctus porttitor tortor gravida quis dignissim. ',
    github: '',
    live: 'https://checkin.daresay.io/',
    isLive: true,
    img1: 'https://i.postimg.cc/LsB3T4nB/checkin-1.png',
    img2: 'https://i.postimg.cc/qqXmtx8r/checkin-2.png',
    img3: 'https://i.postimg.cc/02sF8bpx/checkin-3.png',
    imgExtra: 'https://i.postimg.cc/T3WDCY4L/placeholder.png',
    coverImg: 'https://i.postimg.cc/fLbHvmP4/checkin-cover.png',
    isProtected: false,
  },
  {
    id: 3,
    title: 'Check-in Generator',
    costumer: 'Daresay',
    date: 'october 2023',
    captionText: 'Caption Text',
    tools: ['React', 'TypeScript', 'Framer Motion'],
    shortDesc:
      ' Eget posuere luctus porttitor tortor gravida quis dignissim sit at. Consectetur suspendisse maecenas bibendum ut augue pretium. Eget posuere luctus porttitor tortor gravida quis dignissim.',

    longDesc:
      'Dictumst commodo etiam volutpat orci vulputate id. Cursus cras eu sapien id. Enim suspendisse nunc congue ullamcorper donec lectus magna aenean tristique. Diam orci consectetur suspendisse maecenas bibendum ut augue pretium. Eget posuere luctus porttitor tortor gravida quis dignissim sit at. Consectetur suspendisse maecenas bibendum ut augue pretium. Eget posuere luctus porttitor tortor gravida quis dignissim. ',
    github: '',
    live: 'https://checkin.daresay.io/',
    isLive: true,
    img1: 'https://i.postimg.cc/LsB3T4nB/checkin-1.png',
    img2: 'https://i.postimg.cc/qqXmtx8r/checkin-2.png',
    img3: 'https://i.postimg.cc/02sF8bpx/checkin-3.png',
    imgExtra: 'https://i.postimg.cc/T3WDCY4L/placeholder.png',
    coverImg: 'https://i.postimg.cc/fLbHvmP4/checkin-cover.png',
    isProtected: true,
  }, 
    {
    id: 3,
    title: "",
    captionText: "Caption Text",
    tools: [""],
    desc: "",
    github: "",
    live: "",
    isLive: false,
    img1: "",
    img2: "",
    img3: "",
    imgExtra: "",
  },
  {
    id: 4,
    title: "",
    captionText: "Caption Text",
    tools: [""],
    desc: "",
    github: "",
    live: "",
    isLive: false,
    img1: "",
    img2: "",
    img3: "",
    imgExtra: "",
  },
  {
    id: 5,
    title: "",
    captionText: "Caption Text",
    tools: [""],
    desc: "",
    github: "",
    live: "",
    isLive: false,
    img1: "",
    img2: "",
    img3: "",
    imgExtra: "",
  },
  {
    id: 6,
    title: "",
    captionText: "Caption Text",
    tools: [""],
    desc: "",
    github: "",
    live: "",
    isLive: false,
    img1: "",
    img2: "",
    img3: "",
    imgExtra: "",
  }, */
];
