import Helmet from 'preact-helmet';
import CardContainer from '../card-container';
import Page from '../page';

function DeckToolbox() {
  return (
    <>
    <Helmet bodyAttributes={{ style: 'background-color: #f1f1f1' }} />
    <Page>
      <CardContainer loading={false}>
        <button>Potato</button>
        <button>Potato</button>
      </CardContainer>
    </Page>
    
    </>
  );
}

export default DeckToolbox;
