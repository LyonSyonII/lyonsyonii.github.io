import { AiFillGithub } from 'react-icons/ai';
import * as React from 'react';
import CardContainer from '../card-container';
import Page from '../page';
import CodeBlock from '../code-block';

function H1({ children }) {
  return (
    <h1 className="md:mt-3 md:text-6xl text-5xl font-bold leading-[4rem] tracking-tight text-black">
      {children}
    </h1>
  );
}

function H2({ children }) {
  return (
    <h2 className="">
      {children}
    </h2>
  );
}

type TextLinkProps = {
  children: React.ReactNode,
  link: string,
  className?: string
};

function TextLink({ children, link, className }: TextLinkProps) {
  return (
    <h3>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={`text-blue-600 underline decoration-2 font-bold ${className}`}
        >
          {children}
        </a>
      ) : (
        <div className={className}>
          {children}
        </div>
      )}
    </h3>
  );
}

function Text({ children }) {
  return (
    <body className="text-base md:text-lg text-slate-600">{children}</body>
  );
}

function SecondaryCard({ title, children }) {
  return (
    <div className="flex-initial mx-auto w-2/3 min-w-fit md:min-w-min max-w-full md:py-3 justify-center">
      <CardContainer loading={false}>
        <div className="px-2 md:px-4">
          <div className="text-center md:mt-3 md:text-5xl text-4xl font-bold tracking-tight text-black">
            <h1>{title}</h1>
          </div>
          {children}
        </div>
      </CardContainer>
    </div>
  );
}

function MainCard() {
  return (
    <div className="md:pt-16 md:pb-20 flex-initial mx-auto w-2/3 min-w-fit md:min-w-min max-w-full justify-center">
      <CardContainer loading={false}>
        <div className="mx-auto px-4 py-4">
          <div className="text-center">
            <h1 className="md:mt-3 md:text-6xl text-5xl font-bold leading-[4rem] tracking-tight text-black">Lyon&apos;s Deck Toolbox</h1>
            <p className="mt-3 text-md md:text-lg lg:text-2xl leading-relaxed text-slate-400">
              An installer for a collection of tools and utilities to enhance
              the experience with the Steam Deck.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="https://github.com/LyonSyonII/lyon-deck-toolbox/releases/latest/download/lyon-deck-toolbox.desktop"
              className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Download
            </a>
            <a
              href="https://github.com/LyonSyonII/lyon-deck-toolbox"
              target="_blank"
              rel="noreferrer"
              className="transform rounded-md border border-slate-200 px-1 py-1 font-medium text-slate-900 transition-colors hover:bg-slate-50"
            >
              <AiFillGithub size={35}></AiFillGithub>
            </a>
          </div>
        </div>
      </CardContainer>
    </div>
  );
}

function InstallCard() {
  return (
    <SecondaryCard title="How to install">
      <div className="max-w-5xl prose prose-sm md:prose-lg">
        <h2>Easy</h2>
        <p>
          Download the <code>Lyon&apos;s Deck Toolbox.desktop</code> executable
          file and double click it in the file explorer. <br />
          It will automatically update itself, so no need to download it again.
        </p>
        <h2>For nerds</h2>
        <p>
          Clone the repository and run the <code>lyon-deck-toolbox</code> executable.
        </p>

        <CodeBlock>
          git clone https://github.com/LyonSyonII/lyon-deck-toolbox <br />
          cd lyon-deck-toolbox <br />
          ./lyon-deck-toolbox <br />
        </CodeBlock>
      </div>
    </SecondaryCard>
  );
}

function ToolsCard() {
  return (
    <SecondaryCard title="Tools">
      <div className="py-4 max-w-5xl prose prose-md md:prose-xl">
        <p className="text-center leading-relaxed text-slate-400">
          Currently the Toolbox can install:
        </p>
        <TextLink link="https://github.com/ValShaped/rwfus">Rwfus</TextLink>
        <p>
          Like a vinyl couch cover for your filesystem, Rwfus covers your
          Deck&apos;s /usr/ directory (and some others) allowing you to
          initialize and use pacman (the Arch Linux package manager) on the
          Steam Deck without losing packages when the next update comes out.
        </p>
        <TextLink link="https://github.com/CryoByte33/steam-deck-utilities">
          CryoUtilities
        </TextLink>
        <p>
          Scripts and utilities to enhance the Steam Deck experience,
          particularly performance.
        </p>
        <TextLink link="https://github.com/dragoonDorise/EmuDeck">Emudeck</TextLink>
        <p>
          EmuDeck is a collection of scripts that allows you to autoconfigure
          your Steam Deck, it creates your roms directory structure and
          downloads all of the needed Emulators for you along with the best
          configurations for each of them.
        </p>
        <TextLink link="https://github.com/SteamDeckHomebrew/decky-loader">
          Decky-loader
        </TextLink>
        <p>
          Decky Loader is a homebrew plugin launcher for the Steam Deck.
        </p>
        <TextLink link="https://github.com/popsUlfr/steamos-btrfs">SteamOS Btrfs</TextLink>
        <p>
          Btrfs is an alternative linux filesystem that allows to compress all
          files automatically, potentially saving a lot of storage. It can be
          especially useful to users of the 64GB deck model. This injector will
          install the necessary payload to keep a btrfs formatted /home even
          through system updates.
        </p>
      </div>
    </SecondaryCard>
  );
}

function DeckToolbox() {
  return (
    <div className="h-screen">
      <Page>
        <MainCard />
        <InstallCard />
        <ToolsCard />
      </Page>
    </div>
  );
}


export default DeckToolbox;
