// import { Link } from 'react-router-dom';
import './Blog.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer.jsx';
import { posts } from '../components/posts.js';


const BlogPage = () => {
  return (
    <div className="blog-page">
      <Navbar />
      <header className="blog-header">
        <div className="hero-section">
          <h2>Kelis Concierge Blog</h2>
          <p>Insights, News, and Stories from the World of Concierge Services</p>
          <p>Welcome to the Kelis Concierge Blog. Stay updated with the latest news, insights, and stories from Kelis Concierge. Our blog covers a wide range of topics, from industry trends to company updates and client success stories.</p>
        </div>
      </header>
      
      <main className="blog-content">


      {/* recent post news  */}
        <section className="recent-posts">
          <h2>Recent Posts</h2>
          <div className="posts-grid">
            {posts.map((post, index) => (
              <div key={index} className="post-preview">
                <img src={post.image} alt={post.title} />
                <h3>{post.title}</h3>
                <p className="post-date"><em>Published on {post.date}</em></p>
                <p>{post.excerpt}</p>
                {/* <Link className="read-more" to={post.link}>Read more</Link> */}
              </div>
            ))}
          </div>
        </section>
      {/* recent post news  */}

            {/* service news  */}
        <section className="service-posts my-[4em] p-[1.5em] lg:p-[4em]">
          <h2 className='services text-[22px] font-bold'>Service</h2>
          <div className="grid lg:grid-cols-2 my-10 gap-10">
            {posts.map((post, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-5">
                <div className="img lg:w-[50%] lg:h-[80%]">
                <img src={post.image} className='h-full' alt={post.title} />
                </div>
                <div className="info">
                <h3>{post.title}</h3>
                <p className="post-date"><em>Published on {post.date}</em></p>
                <p>{post.excerpt}</p>
                {/* <Link className="read-more" to={post.link}>Read more</Link> */}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* service news  */}


        <section className="newsletter-section">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Stay informed with the latest updates from Kelis Concierge. Subscribe to our newsletter for regular insights and news delivered straight to your inbox.</p>
          <input type="email" placeholder="Your email address" />
          <button className="subscribe-button bg-blueSlate text-white">Subscribe Now</button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
