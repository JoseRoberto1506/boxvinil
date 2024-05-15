import { Container, Navbar, Button, Section, Product } from "./style";
import logo from "../../assets/logo.svg";
import ImagemBeatles from "../../assets/beatles.jpg";
import ImagemElvis from "../../assets/elvis.jpg";
import ImagemBob from "../../assets/bob.jpg";

export const Home = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Navbar>
        <a href="#home">
          <Button>Home</Button>
        </a>
        <a href="#produtos">
          <Button>Produtos</Button>
        </a>
        <a href="#contato">
          <Button>Contato</Button>
        </a>
      </Navbar>

      <Section id="home">
        <h1>BoxVinil</h1>
        <p>
          A sua plataforma exclusiva para vinis de <b>alta qualidade</b>.
          Descubra clássicos, raridades e lançamentos exclusivos em uma
          experiência de compra intuitiva e segura. Comece sua jornada musical
          hoje mesmo!
        </p>
      </Section>

      <Section>
        <h2>Principais recursos do BoxVinil</h2>
        <p>
          Variedade Excepcional
          <br />
          Autenticidade Garantida
          <br />
          Lançamentos Exclusivos
          <br />
          Envio Seguro e Rápido
          <br />
          Recomendações Personalizadas
          <br />
          Atendimento ao Cliente Excepcional
        </p>
      </Section>

      <Section id="produtos">
        <h2>Produtos em Destaque</h2>
        <Product>
          <img src={ImagemBeatles} alt="Imagem Beatles" />
          <p>Beatles</p>
          <Button>COMPRAR</Button>
        </Product>

        <Product>
          <img src={ImagemElvis} alt="Imagem Elvis Presley" />
          <p>Elvis Presley</p>
          <Button>COMPRAR</Button>
        </Product>

        <Product>
          <img src={ImagemBob} alt="Imagem Bob Marley" />
          <p>Bob Marley</p>
          <Button>COMPRAR</Button>
        </Product>
      </Section>
    </Container>
  );
};
