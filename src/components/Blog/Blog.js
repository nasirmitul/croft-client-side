import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='container'>
            <div className="page-heading">
                <p>Blogs</p>
            </div>
            <section class="blog">
                <div class='blog-posts-wrap'>
                    <div class='post-link'>
                        <div class='post-wrap'>
                            <div class='post-image'>
                            </div>

                            <div class='post-body'>
                                <div class='post-body-primary'>
                                    <div class='post-meta'>
                                        <p>by <b>Abu Al Nasir Mitul</b> on November 10, 2022</p>
                                    </div>

                                    <div class='post-title'>
                                        <h2>Difference between SQL and NoSQL</h2>
                                    </div>

                                    <div class='post-text'>
                                        <p>Where SQL databases are vertically scalable, NoSQL databases are horizontally scalable. SQL databases are table-based whereas NoSQL databases are key-value pairs/ document-based/ graph, or wide-column stores. SQL databases have fixed schema which is rigid while NoSQL databases have dynamic schema which is flexible. Among these, SQL databases are mostly used because they are better for fast analytical queries and multi-row transactions whose structure doesn't change frequently
                                            or at all.</p>
                                    </div>
                                </div>

                                <div class='post-body-secondary'>
                                    <div class='post-category'>
                                        <p>SQL, NoSQL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='post-link'>
                        <div class='post-wrap'>
                            <div class='post-image'>
                            </div>

                            <div class='post-body'>
                                <div class='post-body-primary'>
                                    <div class='post-meta'>
                                        <p>by <b>Abu Al Nasir Mitul</b> on November 10, 2022</p>
                                    </div>

                                    <div class='post-title'>
                                        <h2>What is JWT, and how does it work?</h2>
                                    </div>

                                    <div class='post-text'>
                                        <p>JWT refers to 'JSON web token' which is used to securely transfer information over the web.
                                            Because of its relatively small size, a JWT can be sent through a URL, through a POST parameter, or inside an HTTP header, and it is transmitted quickly. A JWT contains all the required information about an entity to avoid querying a database more than once. The recipient of a JWT also does not need to call a server to validate the token.</p>
                                    </div>
                                </div>

                                <div class='post-body-secondary'>
                                    <div class='post-category'>
                                        <p>JWT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='post-link'>
                        <div class='post-wrap'>
                            <div class='post-image'>
                            </div>

                            <div class='post-body'>
                                <div class='post-body-primary'>
                                    <div class='post-meta'>
                                        <p>by <b>Abu Al Nasir Mitul</b> on November 10, 2022</p>
                                    </div>

                                    <div class='post-title'>
                                        <h2>What is the difference between javascript and NodeJS?</h2>
                                    </div>

                                    <div class='post-text'>
                                        <p>Node is an interpreter or runtime environment for building server side and networking applications. On the other hand, javascript is a programming language for writing scripts on the website. While JavaScript runs only on browsers Nodejs can run JavaScript outside of browsers. JavaScript is mostly used on the client side whereas NodeJS is
                                            mostly used on the server-side. Javascript is able to use HTML and modify DOM but Nodejs is not.</p>
                                    </div>
                                </div>

                                <div class='post-body-secondary'>
                                    <div class='post-category'>
                                        <p>javascript, NodeJS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class='post-link'>
                        <div class='post-wrap'>
                            <div class='post-image'>
                            </div>

                            <div class='post-body'>
                                <div class='post-body-primary'>
                                    <div class='post-meta'>
                                        <p>by <b>Abu Al Nasir Mitul</b> on November 10, 2022</p>
                                    </div>

                                    <div class='post-title'>
                                        <h2>How does NodeJS handle multiple requests at the same time?</h2>
                                    </div>

                                    <div class='post-text'>
                                        <p>Nodejs is Single-threaded which means making progress on many tasks at a time in a single sequence. It works with only one call stack that’s why it is single threaded.The event loop of Nodejs also runs on single thread. In Nodejs, only a single task is executed at a time and execution doesn't wait for the current request to complete rather it moves to the next request.</p>
                                    </div>
                                </div>

                                <div class='post-body-secondary'>
                                    <div class='post-category'>
                                        <p>NodeJS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>

        </div>
    );
};

export default Blog;