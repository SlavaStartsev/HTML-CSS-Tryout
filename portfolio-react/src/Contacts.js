import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <section id="contacts">
        <h3 className="contacts-header">contact me</h3>
        <div className="social">
          <p><a href="#"><i className="fa fa-facebook-official"></i></a> /SlavaStartsev</p>
          <p><a href="https://twitter.com/SlavaStartsev"><i className="fa fa-twitter"></i></a> @SlavaStartsev</p>
          <p><a href="https://github.com/SlavaStartsev"><i className="fa fa-github-square"></i></a> /SlavaStartsev</p>
        </div>
        <h3>or send me message</h3>
        <form action="/vproekte.php">
          Name: <input type="text" name="name" placeholder="Name" />
          <br /> Email: <input type="text" name="email" placeholder="Email" />
          <br /> Message: <textarea rows="3" cols="45" name="message" placeholder="Your message, my dear friend"></textarea>
          <br /><input type="submit" value="Send" />
        </form>
      </section>
    );
  }
}
