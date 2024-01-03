import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

type Props = {};

export default function Mansory({}: Props) {
  return (
    <div className="grid   gap-6 md:grid-cols-2 lg:grid-cols-3 lg:text-[13px]">
      <div className="col-span-2 grid gap-6 rounded-lg p-4 lg:col-span-1">
        {/* card1 */}
        <div className="flex flex-col gap-6 rounded border p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src="https://pbs.twimg.com/profile_images/1585995910521446400/OXrx3eAV_x96.jpg"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-1">
              <span>Theo - t3.gg</span>
              <span className="align-baseline text-sm text-muted-foreground">
                @t3.gg
              </span>
            </div>
          </div>
          <p>
            Moving off React Native is a big, bold, scary thing to do. Enough so
            that I just published a video about it!
          </p>
        </div>

        {/* card2 */}

        <div className="flex flex-col gap-6 rounded border p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src="https://pbs.twimg.com/profile_images/1587046912490090496/kuBUqNkb_x96.jpg"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-1">
              <span>Theo - t3.gg</span>
              <span className="align-baseline text-sm text-muted-foreground">
                @t3.gg
              </span>
            </div>
          </div>
          <p>
            Mitigating Hallucination in LLMs This paper summarizes 32 techniques
            to mitigate hallucination in LLMs. Introduces a taxonomy
            categorizing methods like RAG, Knowledge Retrieval, CoVe, and more.
            Provides tips on how to apply these methods and highlights the
            challenges and…
          </p>
        </div>

        {/* card3 */}

        <div className="flex flex-col gap-6 rounded border p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src="https://pbs.twimg.com/profile_images/561086911561736192/6_g58vEs_x96.jpeg"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-1">
              <span>宝玉老师</span>
              <span className="align-baseline text-sm text-muted-foreground">
                @宝玉
              </span>
            </div>
          </div>
          <p>
            使用个人域名搭建类似 Linktree、Bento
            的链接集合页面，可以使用开源项目 Onelink 实现。我搭建的 Demo：
            https://xxz.cc Onelink 不依赖数据库，直接使用 URL
            存储信息，线上随时可修改内容。项目部署到 Zeabur/Vercel 并使用
            Cloudflare 规则跳转，几分钟就可以完成免费部署。方法步骤：
          </p>
        </div>
      </div>

      <div className="col-span-2 grid gap-6 rounded-lg p-4 lg:col-span-1">
        {/* card1 */}
        <div className="flex flex-col gap-6 rounded border p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src="https://pbs.twimg.com/profile_images/1585995910521446400/OXrx3eAV_x96.jpg"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-1">
              <span>Theo - t3.gg</span>
              <span className="align-baseline text-sm text-muted-foreground">
                @t3.gg
              </span>
            </div>
          </div>
          <p>
            配合正确的方法学英语可以又快又好。 12 年参加沪
            JS，和现场外籍工程师（有 Github
            工程师）基本无法交流，看到别人流利非常羡慕，下定决心要学好英语。
            我的路径是：扇贝单词 - CET 4/6、赖世雄美语、英语魔法师之语法俱乐部。
            效果：自由行很顺畅，出租车司机夸我英语好（害羞~），非常自信。
          </p>
        </div>

        {/* card2 */}

        <div className="flex flex-col gap-6 rounded border p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src="https://pbs.twimg.com/profile_images/1541222252640870401/xgXE9XXt_x96.jpg"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-1">
              <span>Theo - t3.gg</span>
              <span className="align-baseline text-sm text-muted-foreground">
                @t3.gg
              </span>
            </div>
          </div>
          <p>
            如果你来做一个AI给新生儿起名的产品，你会怎么做？
            分享一个ai起名工具的小故事，或许我们能从中意识到些什么。
            群友1a有一天突然问，我做的小程序怎么才能推广出去？我搭茬儿问了一句是什么小程序，结果进入了一场关于gpt新生儿起名小程序的讨论。姑且把自己当作2b，这样容易区分对话。…
          </p>
        </div>

        {/* card3 */}

        <div className="flex flex-col gap-6 rounded border p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src="https://pbs.twimg.com/profile_images/1605762947686375425/lsoGWWty_x96.jpg"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-1">
              <span>宝玉老师</span>
              <span className="align-baseline text-sm text-muted-foreground">
                @宝玉
              </span>
            </div>
          </div>
          <p>
            #工程师学习 这个 Today's top trending papers in Computer Science
            很适合喜欢计算机科学的小伙伴关注，有大量新鲜的值得一看的计算机论文，做成了类似于
            Github Trending 的形式，很适合沉下心来研究，近期毕竟火的是 AI
            相关的内容。 🤖 https://trendingpapers.com/papers
          </p>
        </div>
      </div>

      <div className="col-span-2 grid gap-6 rounded-lg p-4 lg:col-span-1">
        {/* card1 */}
        <div className="flex flex-col gap-6 rounded border p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src="https://pbs.twimg.com/profile_images/1541222252640870401/xgXE9XXt_x96.jpg"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-1">
              <span>Theo - t3.gg</span>
              <span className="align-baseline text-sm text-muted-foreground">
                @t3.gg
              </span>
            </div>
          </div>
          <p>
            如果你想冷启动你的出海产品，找到前100个种子用户，请利用好Reddit。
            http://profilephoto.app的创始团队分享了他们的产品获取种子用户的方法：在Reddit上发帖获得了270k
            +观看，并为他们带来了50个种子用户，转化了20个付费。…
          </p>
        </div>

        {/* card2 */}

        <div className="flex flex-col gap-6 rounded border p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src="https://pbs.twimg.com/profile_images/561086911561736192/6_g58vEs_x96.jpeg"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-1">
              <span>Theo - t3.gg</span>
              <span className="align-baseline text-sm text-muted-foreground">
                @t3.gg
              </span>
            </div>
          </div>
          <p>
            What does API gateway do? The diagram below shows the detail. Step 1
            - The client sends an HTTP request to the API gateway. Step 2 - The
            API gateway parses and validates the attributes in the HTTP request.
            Step 3 - The API gateway performs allow-list/deny-list checks.
          </p>
        </div>

        {/* card3 */}

        <div className="flex flex-col gap-6 rounded border p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src="https://pbs.twimg.com/profile_images/1636981205504786434/xDl77JIw_x96.jpg"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-1">
              <span>宝玉老师</span>
              <span className="align-baseline text-sm text-muted-foreground">
                @宝玉
              </span>
            </div>
          </div>
          <p>
            Redis 作者写了篇文章，分享用 LLM 编程的体验，相当务实。他提到 LLM
            能极大缩短学习新技术的时间，非常适合写一些“用后即丢”的代码，但在本身已是专家的领域中帮助略小。
            最后，他认为如何向 LLM
            提出正确的问题，会成为非常重要的技能；截图那段是我最感慨的部分。
            阅读：http://antirez.com/news/140
          </p>
        </div>
      </div>
    </div>
  );
}
