import React from 'react';
import '../../styles/main/testimonial.css';
import people1 from '../../assets/images/people1.jpg';
import people2 from '../../assets/images/people2.jpg';
import people3 from '../../assets/images/people3.jpg';

const Testimonial = () => {
  return (
      <section id={'testimonial'} className={'section max_container'}>
        <h2 className={'title'}>Testimonial</h2>
        <p className={'description'}>See What they say about me</p>
        <ul className={'testimonials'}>
          <li className={'testimonial'}>
            <img src={people1} alt="people1" className={'testimonial_image'}/>
            <div className={'testimonial_bubble'}>
              <p>맡은 바를 대충하지 않고 있는 힘껏 하는 사람이에요!</p>
              <p><span className={'testimonial_bubble_name'}>김**</span> /SK Bioscience</p>
            </div>
          </li>
          <li className={'testimonial'}>
            <img src={people2} alt="people2" className={'testimonial_image'}/>
            <div className={'testimonial_bubble'}>
              <p>제한된 시간안에 계획성 있게 일을 처리하는 사람이에요!</p>
              <p><span className={'testimonial_bubble_name'}>이**</span> /동물세포실증지원센터</p>
            </div>
          </li>
          <li className={'testimonial'}>
            <img src={people3} alt="people3" className={'testimonial_image'}/>
            <div className={'testimonial_bubble'}>
              <p>이슈 해결에 있어서 창의적으로 접근하는 사람이에요!</p>
              <p><span className={'testimonial_bubble_name'}>박**</span> /NEXTREE</p>
            </div>
          </li>
        </ul>
      </section>
  );
};

export default Testimonial;