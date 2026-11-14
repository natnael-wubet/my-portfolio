/**
 * Long-form case studies for the projects that carry the homepage.
 *
 * Only the hero and featured projects get one. Everything else opens the
 * record dialog, which is honest about being a record. Each study leads with
 * the result, then the constraint, then the decision that followed from it.
 *
 * Metrics live in `deployments.ts` beside the project, so there is one place
 * to replace a TODO(metric) with a real number.
 */

export interface CaseStudy {
  slug: string;
  /** What I owned, in scope terms. Not a headcount. */
  role: string;
  /** Situation, move, result. Three sentences a non-technical reader can hold. */
  tldr: string[];
  problem: string[];
  approach: { title: string; body: string }[];
  tradeoffs: string[];
  outcome: string[];
  differently: string[];
}

export const caseStudies: Record<string, CaseStudy> = {
  bigxo: {
    slug: "bigxo",
    role: "Product, frontend, game rules",
    tldr: [
      "Ultimate tic-tac-toe is a solved board with an unsolved feel: the rules are simple, the consequences are not.",
      "I built the rules and the opponent once, in TypeScript, and shipped that same build as a Telegram Mini App and an Android app.",
      "The opponent runs on the device, so a move never waits on a network round trip.",
    ],
    problem: [
      "Big XO is 3x3x3 spatial tic-tac-toe: nine small boards arranged in a grid, where the square you play sends your opponent to the matching board. The rule is easy to state and hard to hold in your head, which makes a weak opponent feel random instead of beatable.",
      "The target surface was Telegram, where a Mini App is a web view with a small viewport, haptics and no patience for a cold start. A native Android build had to come out of the same code, not a second implementation.",
    ],
    approach: [
      {
        title: "Rules first, screen second",
        body: "The board is a value and the rules are pure functions over it. The interface only dispatches moves, which made the game testable without a browser and kept the two shells honest.",
      },
      {
        title: "The opponent stays local",
        body: "The AI is part of the client. A move is computed between taps, so the game works without a server and the Android build has no backend to keep alive.",
      },
      {
        title: "One build, two shells",
        body: "Capacitor wraps the web build for Android, and Telegram gets the same routes with safe-area handling, haptics and a back button that behaves like an app. Native code stays at the edge.",
      },
      {
        title: "Accounts that do not block play",
        body: "Supabase handles identity and WebAuthn where the platform supports it. The game itself is the product, so the sign-in path is a side door, not the front door.",
      },
    ],
    tradeoffs: [
      "A local opponent cannot be as strong as a deep server-side search. I chose instant moves over maximum strength, because waiting on a network for a board game breaks the rhythm.",
      "Capacitor trades a little native polish for one codebase. That is right for a board game and wrong for anything animation-heavy.",
      "Telegram's viewport is not a browser tab. I spent the layout budget on safe areas and thumb reach instead of a desktop-first board.",
    ],
    outcome: [
      "The game ships at bigxo.vercel.app, as a Telegram Mini App and as an Android build. The same rules engine serves all three, so a fix lands everywhere at once.",
    ],
    differently: [
      "I would put the rules behind a small deterministic test suite before the first screen. The rules are the product; the interface is a skin.",
      "I would settle the difficulty curve earlier. A search that is merely deeper is not the same as one that is fun to lose to.",
      "I would measure the first move. Retention on a board game is decided in the first thirty seconds, not in the settings screen.",
    ],
  },

  gameo: {
    slug: "gameo",
    role: "Product, payments, admin",
    tldr: [
      "Bingo is simple to play and hard to run: rooms, wallets, a rake and payouts that have to reconcile to the cent.",
      "I built the room lifecycle and wallet flow around Chapa deposits and Ethiopian bank withdrawals, with a 5% rake and a bilingual surface.",
      "The admin console watches rooms and money in real time, because a live game with no operator view is a liability.",
    ],
    problem: [
      "Real-money bingo in Ethiopia means the payment rails are the product. Cards are cheap; trust is not. A player needs to deposit with Chapa, withdraw to a local bank, and see a balance that never disagrees with the ledger.",
      "The game also has to run in Amharic and English, on cheap Android phones, often on mobile data. Every screen is a bet on bandwidth.",
    ],
    approach: [
      {
        title: "Ledger before balance",
        body: "Every balance change is an entry: deposit, buy-in, win, rake, withdrawal. The wallet is a view over those entries rather than a number someone can edit, so reconciliation is a query, not an investigation.",
      },
      {
        title: "The rake lives in one function",
        body: "Five percent is computed at settlement in a single place. Room variants cannot drift into different maths, and an operator can read the rule without reading the codebase.",
      },
      {
        title: "Local rails, local language",
        body: "Chapa for deposits and Ethiopian bank payouts for withdrawals. Amharic and English come from the same dictionary, so a new screen is incomplete until both locales exist.",
      },
      {
        title: "The operator gets a window",
        body: "Live rooms, balances and stuck payouts sit in one admin console. When money moves in real time, the person responsible needs the same clock as the player.",
      },
    ],
    tradeoffs: [
      "I kept the wallet internal instead of pushing every buy-in through the provider. That keeps the game fast and makes reconciliation a first-class job.",
      "One rake function is less flexible than per-room configuration. I chose fewer ways to be wrong.",
      "Shipping both languages doubles the copy surface and slows every new screen. It is still cheaper than launching a game most players cannot read.",
    ],
    outcome: [
      "GameO runs live bingo rooms with real-money rails, a 5% rake, in-app wallets and a working admin console. The stack is deployed and probed at build time like everything else on this site.",
    ],
    differently: [
      "I would model payouts as a state machine from day one, with explicit pending, sent, failed and reversed states.",
      "I would load-test settlement before launch, not after the first busy night.",
      "I would write the wallet and rake rules in a short spec the operator can read. Rules that only exist in code are rules nobody can audit.",
    ],
  },

  ticketye: {
    slug: "ticketye",
    role: "Product, platform, checkout",
    tldr: [
      "Intercity bus travel in Ethiopia is still largely sold at the counter, with fares and seat maps that live in an operator's head.",
      "Ticketye turns a route into a searchable trip, a trip into a seat map, and a seat into a ticket with a lifecycle.",
      "The hard part was not checkout. It was modelling operators, routes and fares so the same trip means the same thing to a passenger and a conductor.",
    ],
    problem: [
      "A passenger wants three things: when the bus leaves, whether a seat is free, and what it costs. Each of those is owned by a different operator, and none of them publish it in the same shape.",
      "The network is national and the devices are not. Checkout has to survive a slow connection, a language switch mid-flow and a conductor who has never used the system before.",
    ],
    approach: [
      {
        title: "Model the network, not the page",
        body: "Operators, routes, trips, fares, seats and tickets are separate records. Screens compose them, so a new operator is data, not a new page.",
      },
      {
        title: "Seat state is server-owned",
        body: "A seat is held and then confirmed. The interface never guesses availability, because a double-sold seat is worse than a slow one.",
      },
      {
        title: "Localised from the first string",
        body: "Multi-language checkout is part of the flow, not a translation layer bolted on at the end. The ticket stays readable after the session ends.",
      },
      {
        title: "Firebase for the live parts",
        body: "Live operator and fare mapping plus ticket state, without standing up a separate realtime service. The trade is query freedom, and I took it knowingly.",
      },
    ],
    tradeoffs: [
      "A national network is a lot of records to keep clean. I chose a normalised model over a fast denormalised one and paid for it in query work.",
      "Holding a seat costs inventory. The hold window is a product decision as much as a technical one, and it is the number I would tune first.",
      "Firebase gave me speed and took away some reporting depth. The operator reports are thinner than they would be on SQL.",
    ],
    outcome: [
      "Ticketye ships route discovery, seat selection and checkout across the national network, with a ticket lifecycle behind it. It is live and probed at build time.",
    ],
    differently: [
      "I would write the fare rules down with operators before the schema. A fare is a business model, not a field.",
      "I would build the conductor's view first. The passenger app is the easy half.",
      "I would test against a holiday rush instead of an average Tuesday. The network is calm until everyone travels at once.",
    ],
  },

  "cite-chain": {
    slug: "cite-chain",
    role: "Protocol design, contracts, app",
    tldr: [
      "Scientific credit is still decided by author order and journal prestige, which is a social convention, not a verifiable record.",
      "Cite-Chain anchors contribution hashes on Bitcoin, keeps the content on IPFS, and settles splits in audited contracts on Base.",
      "The result is a provenance trail a reviewer can check without trusting the platform that produced it.",
    ],
    problem: [
      "A paper's author list is a claim. It does not say who ran the experiment, who wrote the analysis or who reviewed it, and it cannot be audited after the fact.",
      "Any fix has to be cheap enough for a researcher, durable enough to outlive a university's servers, and legible to someone who has never used a wallet.",
    ],
    approach: [
      {
        title: "Anchor, do not store",
        body: "The chain holds hashes and timestamps; the paper stays on IPFS and in journals. Bitcoin anchoring through OpenTimestamps gives permanence without putting a PDF on-chain.",
      },
      {
        title: "Splits are contracts",
        body: "Contribution shares and royalty distribution settle in audited contracts on Base L2, so a split is executable rather than a promise in a spreadsheet.",
      },
      {
        title: "Identity where researchers already are",
        body: "ORCID links the record to a real academic identity. Asking researchers to adopt a new identity system would have killed the project at the door.",
      },
      {
        title: "Verification in the browser",
        body: "The app recomputes the hash and checks the anchor, so verification does not require trusting Cite-Chain. That is the whole point of the record.",
      },
    ],
    tradeoffs: [
      "Bitcoin anchoring is slow by design. I accepted minutes of latency for a record that should outlive the platform.",
      "Base L2 keeps settlement cheap but adds trust in a younger chain. The audit is the mitigation, not a claim that trust disappears.",
      "IPFS content can disappear if nobody pins it. Permanence is a maintenance commitment, not a property you get for free.",
    ],
    outcome: [
      "The protocol is live at cite-chain: hashes anchored on Bitcoin, content addressed on IPFS, and splits settling on Base. The app is deployed and probed at build time.",
    ],
    differently: [
      "I would design the reviewer's verification page before the author's upload page. The reviewer is the person who decides whether the record matters.",
      "I would publish a plain-language schema for contribution types. Author is not a role.",
      "I would pin content through an institutional partnership from day one, instead of treating pinning as an operational afterthought.",
    ],
  },
};
