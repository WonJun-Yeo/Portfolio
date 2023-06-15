import React from 'react';
import '../../styles/main/testimonial.css';
import test_image from '../../assets/images/test_image.jpg';

const Testimonial = () => {
  return (
      <section id={'testimonial'} className={'section max_container'}>
        <h2 className={'title'}>Testimonial</h2>
        <p className={'description'}>See What they say about me</p>
        <ul className={'testimonials'}>
          <li className={'testimonial'}>
            <img src={test_image} alt="people1"  className={'testimonial_image'}/>
            <div className={'testimonial_bubble'}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cumque dolorum, eligendi et facere ipsa ipsam nihil quaerat, quas quos rerum sed suscipit vitae? Commodi dolores maxime possimus quis vitae.</p>
              <p><span className={'testimonial_bubble_name'}>James Kim</span> /Google</p>
            </div>
          </li>
          <li className={'testimonial'}>
            <img src={test_image} alt="people2"  className={'testimonial_image'}/>
            <div className={'testimonial_bubble'}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cumque dolorum, eligendi et facere ipsa ipsam nihil quaerat, quas quos rerum sed suscipit vitae? Commodi dolores maxime possimus quis vitae.</p>
              <p><span className={'testimonial_bubble_name'}>James Kim</span> /Google</p>
            </div>
          </li>
          <li className={'testimonial'}>
            <img src={test_image} alt="people3"  className={'testimonial_image'}/>
            <div className={'testimonial_bubble'}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cumque dolorum, eligendi et facere ipsa ipsam nihil quaerat, quas quos rerum sed suscipit vitae? Commodi dolores maxime possimus quis vitae.</p>
              <p><span className={'testimonial_bubble_name'}>James Kim</span> /Google</p>
            </div>
          </li>
        </ul>
      </section>
  );
};

export default Testimonial;