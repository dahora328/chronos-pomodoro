import { Container } from '../../Container';
import { CountDown } from '../../CountDown';
import { MainForm } from '../../MainForm';
import { MainTemplate } from '../../template/MainTemplate';

export function Home() {
  return (
    <>
      <MainTemplate>
        <Container>
          <CountDown />
        </Container>

        <Container>
          <MainForm />
        </Container>
      </MainTemplate>
    </>
  );
}
