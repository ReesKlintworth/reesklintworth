import React, { Component } from 'react';
import {
  Header,
  Footer,
} from '../../../components';
import headerImage from '../../../img/hello-world-header-web.jpg';
import authorImage from '../../../img/rees-square-small-web.jpg';
import selfImage from '../../../img/hello-world-1-web.jpg';
import '../style.css';

const HelloWorldDetails = {
  date: {
    day: "15",
    month: "OCT",
    year: "2017",
  },
  description: "Blog article #1 (or 0 for my programmer friends). This is where I introduce myself and the blog.",
  header: headerImage,
  link: "/blog/hello-world",
  title: "Hello, World.",
}

const HelloWorldPage = () => {
  return (
    <div>
      <Header
        image={headerImage}
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-xs-12 col-sm-6">
            <h1>Hello, World.</h1>
            <h2><a href="https://www.youtube.com/watch?v=o1tj2zJ2Wvg">Welcome to the Jungle.</a></h2>
            <p>
              Okay, this isn’t actually a jungle. I just like rock music so a Guns N’ Roses reference seemed appropriate. Who knows,
              maybe a rock song will make it into the header for every section in this article. Anyway, this blog is actually going
              to be a pretty relaxed look at my life and the things I enjoy. There will be product reviews, musings on technology or
              music or photography or anything else I think I have an interesting or novel take on, and other things I think would make
              a good article. This is basically the Hello World article of the blog. If you’re not a programmer, Hello World is a nod to
              the first program people will often write in a new language or technology. As useless and silly as it is, if you can write
              a program to print “Hello World” on the screen, you’ve proven that you can write <em>something</em>.
            </p>
            <p>
              I’m building this blog myself. Right now it’s a smattering of HTML and CSS, but I’m working to build out a more robust
              system. Yep, I’m fully aware that there are a ton of respected and functional blog options out there. That just didn’t
              sound like it would be as much fun as this :). Things will get better, features will be added, and I’m looking forward
              to the evolution.
            </p>
            <h2><a href="https://www.youtube.com/watch?v=PdLIerfXuZ4">Who Are You?</a></h2>
            <img className="img-responsive-blog center-block" src={selfImage} />
            <p>
              We’ll kick things off with a quick introduction. I’m a recent college graduate working in the technology industry as a
              software developer. I grew up in a small town near the capital city in Nebraska. Although I used to think that I was
              going to get out of here as soon as I could, I earned my degree in Computer Engineering from the University of
              Nebraska-Lincoln and am happily employed by Hudl in Lincoln.
            </p>
            <p>
              Computer programming was new to me until my senior year of high school, but right away it really clicked and I knew this
              was what I wanted to pursue. I love the fact that becoming a software developer challenges me to become a domain expert in
              two areas; obviously I have to know how to code, but I also get to learn about whatever field I’m building software for.
              Additionally, it’s incredible how easy it is to build software that can help others. A change doesn’t have to be giant or
              sweeping or completely revolutionary to make a positive impact. And once a change is implemented, getting that into the
              hands of real people is as easy as updating a server or submitting an app.
            </p>
            <p>
              Outside of programming, I have a ton of hobbies and passions. Staying active and being outdoors are important to me, so I
              run, ski, and hike as much as possible. I try to balance binging sitcoms on Netflix with reading autobiographies and historical
              books. Although I’m new to the field, photography is becoming a big passion and I’m always trying to improve my skills. I love to
              work on and fix cars, and enjoy spending time keeping an old VW Bug running or heading off-road in my Jeep. As many of my friends
              know, I’m also an avid shoe collector and small-time sneaker YouTuber. As of the end of September 2017, I’m also a dog father to
              a cute little beagle mix named Pamela Morgan Beesly Halpert Klintworth (or Beesly for short). I guess I need to add blogger to this
              list.
            </p>
            <h2><a href="https://www.youtube.com/watch?v=zeyeO4d5-Qw">Tell Me Why</a>.</h2>
            <p>
              Everyone has some purpose when starting a blog. Maybe it’s to document everyday life, focus on an area of expertise, or to wax poetic
              about random passions. The latter is closest to my plan. There are a lot of topics and ideas floating around my head, and I’ve been
              looking for a good outlet for them. Videos are great, but there’s a lot of content that I find myself wanting to consume in written
              form. There’s so much on the Internet, but I can’t always find exactly what I’m looking for. This is my attempt to create the content
              I want to read, and hopefully all or part of it resonates with someone out there. I don’t have any specific goals with this blog, either
              about posts per week or engagement or anything like that. All that jazz can come later if it works out, but for now I’m looking to have
              some fun and be creative.
            </p>
            <p>
              One other reason I’ve been looking to put something like this together is to tighten up my writing. I enjoy writing, but my
              experience padding essays to meet minimum page requirements in high school English courses has definitely carried over into
              plenty of long-winded sentences (kinda like this one). There’s a time and place for those, but I’m looking to gain more
              experience with concise, well-written articles.
            </p>
            <h2><a href="https://www.youtube.com/watch?v=j8CcTYsMHYU">Turn Up the Radio</a>.</h2>
            <p>
              If you’re interested in more, <a href="https://www.youtube.com/watch?v=9RxU-64P4cw">be sure to <del>drink your ovaltine</del></a>
              follow the blog. Since I’m building this from scratch for now, I don’t have a convenient way to alert people about new posts (yet).
              But don’t worry, that’ll be coming along with more content and features. For now, if you want to reach out with comments or questions,
              send me an email!
            </p>
            <h2>That's <a href="https://www.youtube.com/watch?v=sidL7S09jsc">All She Wrote</a>.</h2>                        
          </div>
          <div className="col-xs-12 col-sm-3">
            <div className="post-information">
              <p><strong>About the Author:</strong></p>
              <div className="post-author">
                <img className="post-author-image" src={authorImage}/>
                <div className="post-author-bio">
                  <p>Software developer, dog father, photographer, runner, car lover, sneaker collector, and blogger. Not necessarily in that order.</p>
                </div>
              </div>
              <div className="post-details">
                <p><strong>Published:</strong> October 15, 2017</p>
                <p><strong>Categories:</strong> General, Life</p>
              </div>
              <div className="post-share">
                <p><strong>Share:</strong></p>
                <a className="fa fa-envelope" href="mailto:?Subject=Hello, World. - A blog post by Rees Klintworth&amp;Body=Check out this blog post! http://www.reesklintworth.com/blog/hello-world.html"></a>
                <a className="fa fa-facebook" href="http://www.facebook.com/sharer.php?u=http://www.reesklintworth.com/blog/hello-world.html"></a>
                <a className="fa fa-twitter" href="http://twitter.com/share?text=Hello, World. - A blog post by Rees Klintworth&url=http://www.reesklintworth.com/blog/hello-world.html"></a>                            
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const HelloWorld = {
  Details: HelloWorldDetails,
  Page: HelloWorldPage,
};

export default HelloWorld;