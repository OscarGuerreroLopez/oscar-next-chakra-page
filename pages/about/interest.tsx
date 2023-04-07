import Topic from "@/components/about/topics";
import CustomHeader from "@/components/head";

const mainTitle = "PERSONAL INTERESTS";
const subTitle = "Work-life balance";
const mainDesc =
  "When I'm not working as a software engineer, I enjoy a variety of interests that keep me active and engaged.";

export default function StatsGridWithImage() {
  return (
    <>
      <CustomHeader
        title="Oscar Software Engineer"
        description="Best Software Engineer. Freelance Software Engineer. Software Developer"
        url="https://oscarcomputerguy.com/about/interest"
        siteName="Oscar Software Engineer interest"
      />
      <Topic
        mainTitle={mainTitle}
        subTitle={subTitle}
        mainDesc={mainDesc}
        stats={stats}
      />
    </>
  );
}

const stats = [
  {
    title: "Cycling",
    content: (
      <>
        One of my past passions was cycling. I used to cycle frequently, and I
        even participated in races and owned my own bicycle business. Although I
        don't cycle as much these days, I still have a great appreciation for
        the sport and enjoy following cycling events and news.
      </>
    )
  },
  {
    title: "Outdoors",
    content: (
      <>
        These days, I enjoy exploring the outdoors in a variety of ways. Whether
        it's hiking in the mountains, camping in the wilderness, or simply
        taking a walk through a local park, I love spending time in nature and
        soaking up the fresh air and scenery. I find that spending time outdoors
        helps me to clear my mind and recharge my batteries after a busy week.
      </>
    )
  },
  {
    title: "Travel",
    content: (
      <>
        Another interest of mine is travel. Although I haven't been able to
        travel as much recently due to the pandemic, I love exploring new places
        and experiencing different cultures. Whether it's a trip to a nearby
        city or a more far-flung adventure, I enjoy immersing myself in new
        environments and discovering new things.
      </>
    )
  },
  {
    title: "Overall",
    content: (
      <>
        My personal interests reflect my love of physical activity, adventure,
        and exploration. Although my specific interests may have evolved over
        time, I remain committed to staying active and engaged outside of work
        and finding new ways to challenge myself both physically and mentally.
      </>
    )
  }
];
