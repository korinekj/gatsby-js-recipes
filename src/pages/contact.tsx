import React from 'react';
import Layout from '../components/Layout';

function Contact() {
  return (
    <Layout>
      <main className='page'>
        <section className='contact-page'>
          <article className='contact-info'>
            <h1>Want To Get In Touch?</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae cum
              vero, ea eum ipsa similique ab saepe assumenda tenetur obcaecati
              laudantium, repellat repellendus maxime. Harum cupiditate nobis
              odio molestiae repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, voluptatibus unde quisquam repellat dolores quasi nam
              sint, quas veniam voluptas laborum quae est, eum molestias fugit
              maxime. Tempora, soluta architecto!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              asperiores explicabo quia.
            </p>
          </article>
          <article>
            <form action='' className='form contact-form'>
              <div className='form-row'>
                <label htmlFor='name'>
                  your name
                  <input type='text' name='name' id='name' />
                </label>
              </div>
              <div className='form-row'>
                <label htmlFor='email'>
                  your email
                  <input type='text' name='email' id='email' />
                </label>
              </div>
              <div className='form-row'>
                <label htmlFor='message'>
                  your message
                  <textarea name='message' id='message' />
                </label>
              </div>
              <button type='submit' className='btn block'>
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default Contact;
