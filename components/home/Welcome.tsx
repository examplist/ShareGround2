import * as s from 'styles/components/Welcome';

export default function Welcome() {
  return (
    <s.Section id="welcome">
      <s.Carousel>
        <s.CarouselItem src={'/배경.jpg'} />
        <s.CarouselItem src={'/배경.jpg'} />
      </s.Carousel>
      <s.Text>ShareGround에 오신 것을 환영합니다!</s.Text>
    </s.Section>
  );
}
