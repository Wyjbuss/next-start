import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import {Container,Row,Col} from 'react-bootstrap'



function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next-Start</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This Next.js app that was deployed to Vercel
        </h1>

        <p className={styles.description}>
          Getting to know next.js. Making a store front with these cards here.<br />
          Imported bootstrap and react-bootstrap because I plan on using alot of the styles.
        </p>
        <br />
          
        
       
        {/* grid with cards go here
        
        grid card card
         */}
        <Container>
        <Row style={{justifyContent:'center'}}>
        <Col sm={12} md={6} lg={4} xl={3} style={{margin: '1rem'}}>
        <Card style={{ width: '18rem' }}>
          <Card.Img style={{height: '16rem'}} variant="top" src="/images/imgOne.jpg" />
          <Card.Body>
            <Card.Title>Grape Vine</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
        </Col>

        <Col sm={12} md={6} lg={4} xl={3} style={{margin: '1rem'}}>
        <Card style={{ width: '18rem' }}>
          <Card.Img style={{height: '16rem'}} variant="top" src="/images/imgThree.jpg" />
          <Card.Body>
            <Card.Title>Vineyard</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>

        <Col sm={12} md={6} lg={4} xl={3} style={{margin: '1rem'}}>
        <Card style={{ width: '18rem' }}>
          <Card.Img style={{height: '16rem'}} variant="top" src="/images/imgTwo.jpg" />
          <Card.Body>
            <Card.Title>Jar of honey</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>

        <Col sm={12} md={6} lg={4} xl={3} style={{margin: '1rem'}}>
        <Card style={{ width: '18rem' }}>
          <Card.Img style={{height: '16rem'}} variant="top" src="/images/imgTwo.jpg" />
          <Card.Body>
            <Card.Title>Jar of honey</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>

        <Col sm={12} md={6} lg={4} xl={3} style={{margin: '1rem'}}>
        <Card style={{ width: '18rem' }}>
          <Card.Img style={{height: '16rem'}} variant="top" src="/images/imgTwo.jpg" />
          <Card.Body>
            <Card.Title>Jar of honey</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
      </main>

      <footer className={styles.footer}>
       <p>
       Deployed to<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> By Wyatt Bussell 
       and projects at <a href="https://github.com/Wyjbuss?tab=repositories">My Github</a>
       
       </p> <br />
        
      </footer>
    </div>
  )
}

export default Home
