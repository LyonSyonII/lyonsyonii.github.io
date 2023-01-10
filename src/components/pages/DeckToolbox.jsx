import CardContainer from '../card-container';
import Page from '../page';

function DeckToolbox() {
  return (
    <Page>
      <CardContainer loading={false}>
        <button>Potato</button>
        <button>Potato</button>
      </CardContainer>
    </Page>
  );
}

export default DeckToolbox;
